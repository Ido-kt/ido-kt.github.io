"""
AccessFlow SDK Integration Tests - Python

Tests validate that the SDK can:
1. Install successfully (implicit - tests won't run if install fails)
2. Initialize with API key from environment variable
3. Audit pages and return structured results
4. Generate reports with expected structure
"""
import pytest
import os
from pathlib import Path


@pytest.mark.accessibility
def test_audit_deployed_site(page, run_accessibility_audit):
    """Test that SDK can audit the deployed GitHub Pages site."""
    import sys
    print("\n" + "="*100, flush=True)
    print("🧪 TEST STARTED: test_audit_deployed_site", flush=True)
    print("="*100, flush=True)
    sys.stdout.flush()
    
    # Navigate to deployed site
    print("\n📄 Loading deployed site: https://ido-kt.github.io/")
    page.goto("https://ido-kt.github.io/")
    
    # Wait for page to load
    page.wait_for_load_state('domcontentloaded')
    
    # Take screenshot for debugging
    page.screenshot(path='test-results/deployed_site.png')
    print("📸 Screenshot saved: test-results/deployed_site.png")
    
    # Run accessibility audit
    print("\n🔍 Running accessibility audit on deployed site...")
    result = run_accessibility_audit()
    
    # Verify audit completed
    assert result is not None, "Audit should return results"
    assert isinstance(result, dict), "Audit result should be a dictionary"
    
    # Verify structure
    assert 'numberOfIssuesFound' in result, "Audit result should contain numberOfIssuesFound"
    assert 'ruleViolations' in result, "Audit result should contain ruleViolations"
    
    issues_by_severity = result['numberOfIssuesFound']
    rule_violations = result['ruleViolations']
    
    print(f"\n✅ Audit completed successfully")
    print(f"   Extreme: {issues_by_severity.get('extreme', 0)}")
    print(f"   High: {issues_by_severity.get('high', 0)}")
    print(f"   Medium: {issues_by_severity.get('medium', 0)}")
    print(f"   Low: {issues_by_severity.get('low', 0)}")
    
    # Calculate total issues
    total_issues = sum(issues_by_severity.values())
    print(f"   Total issues found: {total_issues}")
    print(f"   Rule violations: {len(rule_violations)}")
    
    # Verify we found results (may be 0 for a well-designed site)
    assert total_issues >= 0, f"Total issues should be non-negative, got {total_issues}"
    
    print(f"\n🎉 Test passed! SDK successfully audited deployed site and found {total_issues} issues across {len(rule_violations)} rules")


@pytest.mark.accessibility
def test_verify_report_structure(page, run_accessibility_audit):
    """Test that SDK generates reports with expected structure."""
    
    # Navigate to deployed site
    page.goto("https://ido-kt.github.io/")
    page.wait_for_load_state('domcontentloaded')
    
    # Run audit
    result = run_accessibility_audit()
    
    # Verify report has expected structure
    assert 'numberOfIssuesFound' in result
    assert 'ruleViolations' in result
    
    # Verify numberOfIssuesFound has severity levels
    issues = result['numberOfIssuesFound']
    assert 'extreme' in issues
    assert 'high' in issues
    assert 'medium' in issues
    assert 'low' in issues
    
    # Verify all counts are non-negative
    assert issues['extreme'] >= 0
    assert issues['high'] >= 0
    assert issues['medium'] >= 0
    assert issues['low'] >= 0
    
    print("\n✅ Report structure validation passed")


@pytest.mark.accessibility
def test_audit_fixture_page(page, run_accessibility_audit):
    """Test that SDK can audit fixture page with known accessibility issues."""
    
    # Get path to test fixture HTML
    test_dir = Path(__file__).parent.parent.parent
    html_file = test_dir / "fixtures" / "sample_page_with_issues.html"
    
    if not html_file.exists():
        pytest.fail(f"Test fixture not found: {html_file}")
    
    # Navigate to local HTML file
    file_url = f"file://{html_file.absolute()}"
    print(f"\n📄 Loading fixture page: {file_url}")
    page.goto(file_url)
    
    # Wait for page to load
    page.wait_for_load_state('domcontentloaded')
    
    # Take screenshot for debugging
    page.screenshot(path='test-results/fixture_page.png')
    print("📸 Screenshot saved: test-results/fixture_page.png")
    
    # Run accessibility audit
    print("\n🔍 Running accessibility audit on fixture...")
    result = run_accessibility_audit()
    
    # Verify audit completed
    assert result is not None, "Audit should return results"
    assert isinstance(result, dict), "Audit result should be a dictionary"
    
    # Verify structure
    assert 'numberOfIssuesFound' in result
    assert 'ruleViolations' in result
    
    issues_by_severity = result['numberOfIssuesFound']
    rule_violations = result['ruleViolations']
    
    print(f"\n✅ Audit completed successfully")
    print(f"   Extreme: {issues_by_severity.get('extreme', 0)}")
    print(f"   High: {issues_by_severity.get('high', 0)}")
    print(f"   Medium: {issues_by_severity.get('medium', 0)}")
    print(f"   Low: {issues_by_severity.get('low', 0)}")
    
    # Calculate total issues
    total_issues = sum(issues_by_severity.values())
    print(f"   Total issues found: {total_issues}")
    print(f"   Rule violations: {len(rule_violations)}")
    
    # Verify we found some issues (our HTML has known issues)
    assert total_issues > 0, f"Expected to find accessibility issues in fixture, but found {total_issues}"
    
    print(f"\n🎉 Test passed! SDK successfully audited fixture page and found {total_issues} issues across {len(rule_violations)} rules")


def test_sdk_initialization(page, sdk_config):
    """Test that SDK initializes correctly with environment API key."""
    from accessflow_sdk import AccessFlowSDK
    
    # Navigate to a page
    page.goto("https://ido-kt.github.io/")
    
    # SDK should initialize without errors using ACCESSFLOW_SDK_API_KEY from env
    sdk = AccessFlowSDK(page, api_key=sdk_config.get('apiToken'))
    
    # If initialization worked, audit should execute
    raw_audits = sdk.audit()
    assert raw_audits is not None, "SDK should return audit results after initialization"
    
    print("\n✅ SDK initialization test passed")


def test_audit_returns_empty_dict_not_none(page, sdk_config):
    """
    Test that audit() always returns a dict, never None.
    This tests the fix for null-safety - even if the page has no auditor,
    audit() should return an empty dict {} instead of None.
    """
    from accessflow_sdk import AccessFlowSDK
    
    # Navigate to a minimal page
    page.goto("data:text/html,<html><body><h1>Test</h1></body></html>")
    page.wait_for_load_state('domcontentloaded')
    
    sdk = AccessFlowSDK(page, api_key=sdk_config.get('apiToken'))
    raw_audits = sdk.audit()
    
    # Should return a dict, never None
    assert raw_audits is not None, "audit() should never return None"
    assert isinstance(raw_audits, dict), f"audit() should return dict, got {type(raw_audits)}"
    
    print(f"\n✅ Null-safety test passed - audit() returned {type(raw_audits).__name__}")


def test_local_json_reports_written(page):
    """
    Test that finalize_reports() writes JSON reports locally even without CI env.
    This tests the fix where reports are now saved locally for inspection.
    """
    from accessflow_sdk import AccessFlowSDK
    from accessflow_sdk.teardown import finalize_reports
    from pathlib import Path
    import json
    import shutil
    
    # Clear any existing test results
    test_output_dir = Path("test-results-local-test")
    if test_output_dir.exists():
        shutil.rmtree(test_output_dir)
    
    # Unset CI env vars to ensure we're in "local mode"
    original_ci = os.environ.pop('CI', None)
    original_github = os.environ.pop('GITHUB_ACTIONS', None)
    
    try:
        # Run a real audit through the SDK (this auto-records to _audit_records)
        print("\n🧪 Testing local report generation (no CI env)...")
        page.goto("https://ido-kt.github.io/")
        page.wait_for_load_state('domcontentloaded')
        
        sdk = AccessFlowSDK(page)
        raw_audits = sdk.audit()
        
        assert raw_audits is not None, "Audit should complete"
        print(f"   Audit completed, recorded 1 page")
        
        # Finalize reports in local mode (no CI env vars)
        finalize_reports(output_dir=str(test_output_dir))
        
        # Verify output directory was created
        assert test_output_dir.exists(), f"Output directory should be created: {test_output_dir}"
        
        # Verify state files and/or report files were written
        # The CLI creates .jsonl state files and potentially summary JSON files
        state_files = list(test_output_dir.glob("*.jsonl"))
        json_files = list(test_output_dir.glob("*.json"))
        all_files = state_files + json_files
        
        assert len(all_files) > 0, f"Should have created report/state files in {test_output_dir}"
        
        print(f"✅ Local reports written successfully:")
        for file in all_files:
            print(f"   📄 {file.name} ({file.stat().st_size} bytes)")
        
        print(f"\n✅ Local JSON reports test passed - {len(all_files)} file(s) created")
        
    finally:
        # Restore CI env vars
        if original_ci:
            os.environ['CI'] = original_ci
        if original_github:
            os.environ['GITHUB_ACTIONS'] = original_github
        
        # Cleanup
        if test_output_dir.exists():
            shutil.rmtree(test_output_dir)


def test_finalize_reports_idempotent(page):
    """
    Test that finalize_reports() is idempotent - calling it multiple times
    doesn't cause duplicate processing or errors.
    """
    from accessflow_sdk import AccessFlowSDK
    from accessflow_sdk.teardown import finalize_reports
    from pathlib import Path
    import shutil
    
    # Clear and setup test data
    test_output_dir = Path("test-results-idempotent-test")
    if test_output_dir.exists():
        shutil.rmtree(test_output_dir)
    
    # Unset CI env vars
    original_ci = os.environ.pop('CI', None)
    
    try:
        print("\n🧪 Testing idempotent behavior...")
        
        # Run a real audit to populate _audit_records
        page.goto("https://ido-kt.github.io/")
        page.wait_for_load_state('domcontentloaded')
        
        sdk = AccessFlowSDK(page)
        raw_audits = sdk.audit()
        assert raw_audits is not None
        print("   Audit completed and recorded")
        
        # First call - should process
        print("   📝 First finalize_reports() call...")
        finalize_reports(output_dir=str(test_output_dir))
        
        # Get file count after first call (count .jsonl and .json files)
        first_call_files = list(test_output_dir.glob("*"))
        first_call_count = len(first_call_files)
        assert first_call_count > 0, "First call should create files"
        print(f"   First call created {first_call_count} file(s)")
        
        # Second call - should be idempotent (audit_records cleared, should skip)
        print("   📝 Second finalize_reports() call (should skip)...")
        finalize_reports(output_dir=str(test_output_dir))
        
        # Get file count after second call
        second_call_files = list(test_output_dir.glob("*"))
        second_call_count = len(second_call_files)
        
        # Should have same number of files (no duplicates)
        # Note: Python's implementation clears _audit_records, so second call
        # will print "No audit records to finalize" and return early
        assert second_call_count == first_call_count, \
            f"Second call should not create duplicates. Expected {first_call_count} files, got {second_call_count}"
        
        print(f"✅ Idempotent test passed - both calls resulted in {first_call_count} file(s)")
        
    finally:
        # Restore CI env
        if original_ci:
            os.environ['CI'] = original_ci
        
        # Cleanup
        if test_output_dir.exists():
            shutil.rmtree(test_output_dir)
