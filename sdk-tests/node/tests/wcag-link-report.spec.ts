/**
 * WCAGLink normalization in SDK report summaries (issueWCAGLinks[0] or '-' placeholder).
 * Locks behavior aligned with accessflow-sdk reporting / summarizer and cicdReport Zod tolerance.
 */
import { expect, test } from '@playwright/test';
import path from 'path';
import AccessFlowSDK from '@acsbe/accessflow-sdk';

function assertWcagLinkOnEveryViolation(
  ruleViolations: Record<string, { WCAGLink?: string; WCAGLinks?: string[] }>,
) {
  for (const [ruleId, v] of Object.entries(ruleViolations)) {
    expect(v, `rule ${ruleId}`).toHaveProperty('WCAGLink');
    const link = v.WCAGLink;
    expect(typeof link, `rule ${ruleId}: WCAGLink must be a string`).toBe('string');
    if (link !== '-') {
      expect(() => new URL(link as string), `rule ${ruleId}: WCAGLink must be http(s) or '-'`).not.toThrow();
      const u = new URL(link as string);
      expect(u.protocol === 'http:' || u.protocol === 'https:').toBe(true);
    }
  }
}

test.describe('SDK report — WCAGLink field', () => {
  test('fixture audit: every ruleViolation includes WCAGLink string (- or URL)', async ({ page }) => {
    const htmlPath = path.join(__dirname, '..', '..', 'fixtures', 'sample_page_with_issues.html');
    await page.goto(`file://${htmlPath}`);
    await page.waitForLoadState('domcontentloaded');

    const sdk = new AccessFlowSDK(page);
    const rawAudits = await sdk.audit();
    expect(rawAudits).toBeTruthy();

    const report = await sdk.generateReport(rawAudits);
    expect(report.ruleViolations).toBeDefined();

    const rv = report.ruleViolations as Record<string, { WCAGLink?: string }>;
    const keys = Object.keys(rv);
    expect(keys.length, 'fixture should produce rule violations').toBeGreaterThan(0);

    assertWcagLinkOnEveryViolation(rv);
  });
});
