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
    sdk = AccessFlowSDK(page, config=sdk_config)
    
    # If initialization worked, audit should execute
    raw_audits = sdk.audit()
    assert raw_audits is not None, "SDK should return audit results after initialization"
    
    print("\n✅ SDK initialization test passed")
