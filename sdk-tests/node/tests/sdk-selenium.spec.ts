/**
 * AccessFlow SDK Selenium Integration Tests - Node.js
 *
 * Uses Selenium WebDriver + SeleniumDriver to audit pages (same flow as Playwright tests).
 * Prerequisites: Chrome, ACCESSFLOW_SDK_API_KEY. Run: npx playwright test tests/sdk-selenium.spec.ts
 */
import { expect, test } from '@playwright/test';
import path from 'path';
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { AccessFlowSDK, SeleniumDriver } from '@acsbe/accessflow-sdk';

test.describe('AccessFlow SDK - Selenium', () => {
  test('should audit deployed site with Selenium WebDriver', async () => {
    let driver: import('selenium-webdriver').WebDriver | null = null;
    try {
      driver = await buildChromeDriver();
      await driver.get('https://ido-kt.github.io/');

      const sdk = new AccessFlowSDK(new SeleniumDriver(driver));
      const rawAudits = await sdk.audit();

      expect(rawAudits).toBeDefined();
      expect(rawAudits).not.toBeNull();

      const report = await sdk.generateReport(rawAudits);
      expect(report).toBeDefined();
      expect(report.numberOfIssuesFound).toBeDefined();
      expect(report.ruleViolations).toBeDefined();

      const totalIssues = Object.values(report.numberOfIssuesFound).reduce(
        (sum, count) => sum + (count ?? 0),
        0,
      );
      expect(totalIssues).toBeGreaterThanOrEqual(0);
    } finally {
      if (driver) await driver.quit();
    }
  });

  test('should audit fixture page with Selenium WebDriver', async () => {
    let driver: import('selenium-webdriver').WebDriver | null = null;
    try {
      driver = await buildChromeDriver();
      const htmlPath = path.join(__dirname, '..', '..', 'fixtures', 'sample_page_with_issues.html');
      const fileUrl = `file://${htmlPath}`;
      await driver.get(fileUrl);

      const sdk = new AccessFlowSDK(new SeleniumDriver(driver));
      const rawAudits = await sdk.audit();

      expect(rawAudits).toBeDefined();
      expect(rawAudits).not.toBeNull();

      const report = await sdk.generateReport(rawAudits);
      expect(report).toBeDefined();
      expect(report.numberOfIssuesFound).toBeDefined();
      expect(report.ruleViolations).toBeDefined();

      const totalIssues = Object.values(report.numberOfIssuesFound).reduce(
        (sum, count) => sum + (count ?? 0),
        0,
      );
      const ruleViolationCount = Object.keys(report.ruleViolations).length;
      expect(totalIssues).toBeGreaterThan(0);
      expect(ruleViolationCount).toBeGreaterThan(0);
    } finally {
      if (driver) await driver.quit();
    }
  });
});

function buildChromeDriver(): Promise<import('selenium-webdriver').WebDriver> {
  const options = new chrome.Options();
  options.addArguments('--headless=new', '--no-sandbox', '--disable-dev-shm-usage');
  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}
