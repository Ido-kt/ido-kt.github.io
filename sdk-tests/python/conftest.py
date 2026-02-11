"""
Pytest configuration for AccessFlow SDK integration tests.
"""
import os
import json
from datetime import datetime
from pathlib import Path
import pytest
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Try to import AccessFlow SDK (will be installed in CI)
try:
    from accessflow_sdk import AccessFlowSDK, record_audit, finalize_reports
    ACCESSFLOW_SDK_AVAILABLE = True
except ImportError:
    ACCESSFLOW_SDK_AVAILABLE = False
    print("⚠️  AccessFlow SDK not available - accessibility audits will be skipped")


def pytest_configure(config):
    """Configure pytest with custom markers and environment."""
    config.addinivalue_line(
        "markers", "accessibility: Tests that include accessibility audits"
    )


@pytest.fixture
def sdk_config():
    """Get AccessFlow SDK configuration from environment."""
    return {
        'apiToken': os.getenv('ACCESSFLOW_SDK_API_KEY', 'xxx-xxxx-xxx'),
        'projectId': os.getenv('ACCESSFLOW_PROJECT_ID'),
        'includeNotices': False,
    }


@pytest.fixture
def run_accessibility_audit(page, sdk_config):
    """
    Fixture to run accessibility audit on the current page.
    Usage in tests:
        run_accessibility_audit()  # Run audit on current page
    """
    def _run_audit():
        import sys
        print("\n" + "="*80, flush=True)
        print("🚀 FIXTURE: run_accessibility_audit called", flush=True)
        print(f"   SDK Available: {ACCESSFLOW_SDK_AVAILABLE}", flush=True)
        print(f"   Page URL: {page.url}", flush=True)
        print(f"   API Key configured: {'***' + sdk_config.get('apiToken', 'none')[-4:] if sdk_config.get('apiToken') else 'none'}", flush=True)
        print("="*80, flush=True)
        sys.stdout.flush()
        
        if not ACCESSFLOW_SDK_AVAILABLE:
            print("⚠️  Skipping accessibility audit - SDK not installed")
            return None

        try:
            print("📦 Initializing AccessFlowSDK...")
            sdk = AccessFlowSDK(page, config=sdk_config)
            print("✅ SDK initialized successfully")

            # Get raw audits from browser
            print(f"\n🔍 Running audit on: {page.url}")
            raw_audits = sdk.audit()
            print(f"📋 Raw audits returned: {type(raw_audits)}, empty={not raw_audits if raw_audits is not None else 'None'}")

            # Audit failed if it returned None
            if raw_audits is None:
                print(f"⚠️  Audit returned None (failed to run)")
                return None

            # Record raw audits for reporting
            if raw_audits:
                record_audit(page.url, raw_audits)

            # Generate formatted report for display
            report = sdk.generate_report(raw_audits)
            print(f"📊 Report generated: {type(report)}, has_data={bool(report)}")

            # Print summary
            if report and isinstance(report, dict) and 'numberOfIssuesFound' in report:
                issues = report['numberOfIssuesFound']
                total = sum(issues.values())
                print(f"\n📊 Accessibility Audit Results for {page.url}:")
                print(f"   Total Issues: {total}")
                print(f"   Extreme: {issues.get('extreme', 0)}")
                print(f"   High: {issues.get('high', 0)}")
                print(f"   Medium: {issues.get('medium', 0)}")
                print(f"   Low: {issues.get('low', 0)}")

            return report
        except Exception as e:
            import traceback
            print(f"\n❌ Accessibility audit failed: {e}")
            print(f"   Error type: {type(e).__name__}")
            print(f"   Traceback:\n{traceback.format_exc()}")
            # Re-raise to make test failures visible
            raise

    return _run_audit


def pytest_sessionstart(session):
    """Initialize test session."""
    print("\n" + "="*80)
    print("🚀 Starting AccessFlow SDK Integration Tests (Python)")
    print("="*80)

    # Create test-results directory
    Path("test-results").mkdir(exist_ok=True)

    # Print environment info
    print(f"📋 Environment:")
    print(f"   Base URL: https://ido-kt.github.io/")
    print(f"   CI: {os.getenv('CI', 'false')}")
    print(f"   AccessFlow SDK: {'✅ Available' if ACCESSFLOW_SDK_AVAILABLE else '❌ Not installed'}")
    print("="*80 + "\n")


def pytest_sessionfinish(session, exitstatus):
    """
    Global teardown: finalize all accessibility reports.
    This runs once after all tests have completed.
    """
    if not ACCESSFLOW_SDK_AVAILABLE:
        print("\n⚠️  AccessFlow SDK not available - no reports to finalize")
        return

    print("\n" + "="*80)
    print("🔍 Finalizing AccessFlow Accessibility Reports...")
    print("="*80)

    # Debug: Print relevant environment variables
    print("\n📋 CI Environment Debug:")
    print(f"   CI: {os.getenv('CI', 'not set')}")
    print(f"   GITHUB_ACTIONS: {os.getenv('GITHUB_ACTIONS', 'not set')}")
    print(f"   GITHUB_REF: {os.getenv('GITHUB_REF', 'not set')}")
    print(f"   GITHUB_SHA: {os.getenv('GITHUB_SHA', 'not set')}")

    # For local testing, save reports to files
    from accessflow_sdk.teardown import _audit_records

    if _audit_records:
        reports_dir = Path("test-results")
        reports_dir.mkdir(exist_ok=True)

        # Save individual audit reports
        for i, record in enumerate(_audit_records):
            url_safe = record['url'].replace('https://', '').replace('http://', '').replace('/', '_').replace(':', '_')
            filename = reports_dir / f"audit_{i+1}_{url_safe}.json"
            with open(filename, 'w') as f:
                json.dump(record, f, indent=2)
            print(f"   📄 Saved: {filename}")

        # Save summary report
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        summary_file = reports_dir / f"summary_{timestamp}.json"
        summary = {
            'timestamp': datetime.now().isoformat(),
            'total_audits': len(_audit_records),
            'audits': _audit_records
        }
        with open(summary_file, 'w') as f:
            json.dump(summary, f, indent=2)
        print(f"   📊 Summary: {summary_file}")
        print(f"   ✅ Total audits recorded: {len(_audit_records)}")
    else:
        print("   ℹ️  No accessibility audits were recorded")

    # In CI environment, upload reports to AccessFlow platform
    if os.getenv('CI'):
        print("\n📤 CI detected - finalizing reports for upload...")
        finalize_reports()

    print("="*80)
    print(f"✅ Test suite finished with exit status: {exitstatus}")
    print("="*80 + "\n")
