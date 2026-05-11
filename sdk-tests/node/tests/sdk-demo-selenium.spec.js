/**
 * Lite demo: Selenium opens a page → AccessFlow SDK audits → generateReport().
 * Run: cd sdk-tests/node && npm run test:selenium:demo
 * Requires Chrome, ACCESSFLOW_SDK_API_KEY (or AccessFlowSDK.init({ apiKey }) before audit).
 */
const { after, before, describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { AccessFlowSDK, SeleniumDriver } = require('@acsbe/accessflow-sdk');

before(() => {
  const outDir = path.join(__dirname, '..', 'test-results');
  fs.mkdirSync(outDir, { recursive: true });
});

function buildChromeDriver() {
  const options = new chrome.Options();
  options.addArguments('--headless=new', '--no-sandbox', '--disable-dev-shm-usage');
  const chromeBin = process.env.CHROME_BIN;
  if (chromeBin) {
    options.setChromeBinaryPath(chromeBin);
  }
  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

describe('AccessFlow SDK - Selenium demo', () => {
  it('demo: WebDriver + SDK audit + report', async () => {
    let driver = null;
    try {
      driver = await buildChromeDriver();
      await driver.get('https://ido-kt.github.io/');
      const sdk = new AccessFlowSDK(new SeleniumDriver(driver));
      const audit = await sdk.audit();
      const report = await sdk.generateReport(audit);

      const { numberOfIssuesFound } = report;
      assert.ok(numberOfIssuesFound != null);
      assert.ok(report.ruleViolations != null);
      assert.ok(numberOfIssuesFound.extreme < 3);
      assert.ok(numberOfIssuesFound.high < 10);
      assert.ok(numberOfIssuesFound.medium < 25);
      assert.ok(numberOfIssuesFound.low < 100);
    } finally {
      if (driver) await driver.quit();
    }
  });
});

after(() => {
  return require('@acsbe/accessflow-sdk/dist/src/playwright/global-teardown').default();
});
