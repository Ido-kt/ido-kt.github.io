/**
 * Selenium integration spec. No Playwright. Run: npm run test:selenium
 * Prerequisites: Chrome, ACCESSFLOW_SDK_API_KEY.
 * Finalize and upload (same as a customer would): run SDK global teardown after all tests.
 */
const { after, before, describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { AccessFlowSDK, SeleniumDriver } = require('@acsbe/accessflow-sdk');

// Ensure output dir exists so SDK writes and teardown find the same path
before(() => {
  const outDir = path.join(__dirname, '..', 'test-results');
  fs.mkdirSync(outDir, { recursive: true });
});

function buildChromeDriver() {
  const options = new chrome.Options();
  options.addArguments('--headless=new', '--no-sandbox', '--disable-dev-shm-usage');
  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

describe('AccessFlow SDK - Selenium', () => {
  it('should audit deployed site with Selenium WebDriver', async () => {
    let driver = null;
    try {
      driver = await buildChromeDriver();
      await driver.get('https://ido-kt.github.io/');
      const sdk = new AccessFlowSDK(new SeleniumDriver(driver));
      const rawAudits = await sdk.audit();
      assert.ok(rawAudits != null, 'rawAudits should be defined');
      const report = await sdk.generateReport(rawAudits);
      assert.ok(report != null && report.numberOfIssuesFound != null && report.ruleViolations != null);
      const total = Object.values(report.numberOfIssuesFound).reduce((s, c) => s + (c ?? 0), 0);
      assert.ok(total >= 0, 'total issues should be non-negative');
    } finally {
      if (driver) await driver.quit();
    }
  });

  it('should audit fixture page with Selenium WebDriver', async () => {
    let driver = null;
    try {
      driver = await buildChromeDriver();
      const htmlPath = path.join(__dirname, '..', '..', 'fixtures', 'sample_page_with_issues.html');
      const fileUrl = pathToFileURL(htmlPath).toString();
      await driver.get(fileUrl);
      const sdk = new AccessFlowSDK(new SeleniumDriver(driver));
      const rawAudits = await sdk.audit();
      assert.ok(rawAudits != null, 'rawAudits should be defined');
      const report = await sdk.generateReport(rawAudits);
      assert.ok(report != null && report.numberOfIssuesFound != null && report.ruleViolations != null);
      const total = Object.values(report.numberOfIssuesFound).reduce((s, c) => s + (c ?? 0), 0);
      const ruleCount = Object.keys(report.ruleViolations).length;
      assert.ok(total > 0, 'fixture should have at least one issue');
      assert.ok(ruleCount > 0, 'fixture should have at least one rule violation');
    } finally {
      if (driver) await driver.quit();
    }
  });
});

// Finalize and upload report after all tests (same pattern a customer would use). Return Promise so runner awaits.
after(() => {
  return require('@acsbe/accessflow-sdk/dist/src/playwright/global-teardown').default();
});
