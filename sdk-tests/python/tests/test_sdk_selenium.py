"""
AccessFlow SDK Selenium Integration Tests - Python

Placeholder for Selenium WebDriver tests when the Python SDK supports a Selenium driver.
Currently skipped; run with: pytest -v -m selenium
"""
import pytest


@pytest.mark.selenium
@pytest.mark.skip(reason="Selenium driver not yet implemented in Python SDK")
def test_audit_deployed_site_selenium():
    """Would audit the deployed site using Selenium WebDriver + AccessFlow SDK."""
    pass


@pytest.mark.selenium
@pytest.mark.skip(reason="Selenium driver not yet implemented in Python SDK")
def test_audit_fixture_page_selenium():
    """Would audit the fixture page using Selenium WebDriver + AccessFlow SDK."""
    pass
