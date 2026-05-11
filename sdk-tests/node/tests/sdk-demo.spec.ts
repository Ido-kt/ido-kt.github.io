/**
 * Lite demo: Playwright opens a page → AccessFlow SDK audits → generateReport().
 * Run: cd sdk-tests/node && npx playwright test sdk-demo.spec.ts
 * Selenium twin: npm run test:selenium:demo (see sdk-demo-selenium.spec.js).
 * Requires ACCESSFLOW_SDK_API_KEY (or call AccessFlowSDK.init({ apiKey }) before audit).
 */
import { expect, test } from "@playwright/test";
import AccessFlowSDK from "@acsbe/accessflow-sdk";

test("demo: Playwright page + SDK audit + report", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");

  //ACCESSFLOW SDK
  const sdk = new AccessFlowSDK(page);
  const audit = await sdk.audit();

  
  //ACCESSFLOW SDK OPTIONAL FOR LOCAL TESTING
  const report = await sdk.generateReport(audit);
  expect(report.numberOfIssuesFound.extreme).toBeLessThan(3);
  expect(report.numberOfIssuesFound.high).toBeLessThan(10);
  expect(report.numberOfIssuesFound.medium).toBeLessThan(25);
  expect(report.numberOfIssuesFound.low).toBeLessThan(100);
});
