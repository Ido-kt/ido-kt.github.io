"""
AccessFlow SDK Selenium Integration Tests - Python
Run with: pytest -v -m selenium
Requires: Chrome, ACCESSFLOW_SDK_API_KEY.
"""
from pathlib import Path

import pytest

from accessflow_sdk import AccessFlowSDK, SeleniumDriver

try:
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options
    SELENIUM_AVAILABLE = True
except ImportError:
    SELENIUM_AVAILABLE = False


def _chrome_driver():
    opts = Options()
    opts.add_argument("--headless=new")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    return webdriver.Chrome(options=opts)


def _fixture_url():
    # sdk-tests/python/tests/ -> sdk-tests/fixtures/
    base = Path(__file__).resolve().parent
    html = base.parent.parent / "fixtures" / "sample_page_with_issues.html"
    if not html.exists():
        pytest.fail(f"Fixture not found: {html}")
    return html.as_uri()


@pytest.mark.selenium
@pytest.mark.skipif(not SELENIUM_AVAILABLE, reason="selenium not installed")
def test_audit_deployed_site_selenium():
    """Audit the deployed site using Selenium WebDriver + AccessFlow SDK."""
    driver = None
    try:
        driver = _chrome_driver()
        driver.get("https://ido-kt.github.io/")
        sdk = AccessFlowSDK(SeleniumDriver(driver))
        raw_audits = sdk.audit()
        assert raw_audits is not None
        report = sdk.generate_report(raw_audits)
        assert report is not None
        assert "numberOfIssuesFound" in report
        assert "ruleViolations" in report
        total = sum(report["numberOfIssuesFound"].values())
        assert total >= 0
    finally:
        if driver:
            driver.quit()


@pytest.mark.selenium
@pytest.mark.skipif(not SELENIUM_AVAILABLE, reason="selenium not installed")
def test_audit_fixture_page_selenium():
    """Audit the fixture page using Selenium WebDriver + AccessFlow SDK."""
    driver = None
    try:
        driver = _chrome_driver()
        driver.get(_fixture_url())
        sdk = AccessFlowSDK(SeleniumDriver(driver))
        raw_audits = sdk.audit()
        assert raw_audits is not None
        report = sdk.generate_report(raw_audits)
        assert report is not None
        assert "numberOfIssuesFound" in report
        assert "ruleViolations" in report
        total = sum(report["numberOfIssuesFound"].values())
        rule_count = len(report["ruleViolations"])
        assert total > 0, "fixture should have at least one issue"
        assert rule_count > 0, "fixture should have rule violations"
    finally:
        if driver:
            driver.quit()
