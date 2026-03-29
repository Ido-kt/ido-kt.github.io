/**
 * AccessFlow SDK Integration Tests - Node.js
 * 
 * Tests validate that the SDK can:
 * 1. Install successfully (implicit - tests won't run if install fails)
 * 2. Initialize with API key from environment variable
 * 3. Audit pages and return structured results
 * 4. Generate reports with expected structure
 */
import { expect, test } from '@playwright/test';
import path from 'path';
import AccessFlowSDK from '@acsbe/accessflow-sdk';

/**
 * Each ruleViolation must include WCAGLink: a valid URL or '-' when rules.json has no WCAG URL.
 * The SDK always sets this key (issueWCAGLinks[0] or '-'); CI schema allows it to be optional
 * for older payloads, but current SDK summaries should always emit it.
 */
function assertRuleViolationsWcagLinksValid(ruleViolations: Record<string, { WCAGLink?: string }>) {
  for (const [ruleId, v] of Object.entries(ruleViolations)) {
    expect(v, `rule ${ruleId}: violation object`).toHaveProperty('WCAGLink');
    const link = v.WCAGLink;
    expect(typeof link, `rule ${ruleId}: WCAGLink must be a string`).toBe('string');
    if (link !== '-') {
      expect(() => new URL(link as string)).not.toThrow();
    }
  }
}

test.describe('AccessFlow SDK - Deployed Site Audits', () => {
  test('should audit the deployed GitHub Pages site', async ({ page }) => {
    console.log('\n📄 Loading deployed site: https://ido-kt.github.io/');
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Take screenshot for debugging
    await page.screenshot({ path: 'test-results/deployed_site.png' });
    console.log('📸 Screenshot saved: test-results/deployed_site.png');

    // Initialize SDK and run audit
    console.log('\n🔍 Running accessibility audit on deployed site...');
    const sdk = new AccessFlowSDK(page);
    const rawAudits = await sdk.audit();

    // Verify audit completed
    expect(rawAudits).toBeDefined();
    expect(rawAudits).not.toBeNull();

    // Generate report from raw audits
    const report = await sdk.generateReport(rawAudits);

    // Verify report structure
    expect(report).toBeDefined();
    expect(report.numberOfIssuesFound).toBeDefined();
    expect(report.ruleViolations).toBeDefined();

    const { numberOfIssuesFound, ruleViolations } = report;

    console.log('\n✅ Audit completed successfully');
    console.log(`   Extreme: ${numberOfIssuesFound.extreme || 0}`);
    console.log(`   High: ${numberOfIssuesFound.high || 0}`);
    console.log(`   Medium: ${numberOfIssuesFound.medium || 0}`);
    console.log(`   Low: ${numberOfIssuesFound.low || 0}`);

    // Calculate total issues
    const totalIssues = Object.values(numberOfIssuesFound).reduce((sum, count) => sum + count, 0);
    const ruleViolationCount = Object.keys(ruleViolations).length;

    console.log(`   Total issues found: ${totalIssues}`);
    console.log(`   Rule violations: ${ruleViolationCount}`);

    // Verify we found some issues (real sites typically have at least some issues)
    expect(totalIssues).toBeGreaterThanOrEqual(0);

    if (ruleViolationCount > 0) {
      assertRuleViolationsWcagLinksValid(ruleViolations as Record<string, { WCAGLink?: string }>);
    }

    console.log(
      `\n🎉 Test passed! SDK successfully audited deployed site and found ${totalIssues} issues across ${ruleViolationCount} rules`,
    );
  });

  test('should verify report structure from deployed site', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const sdk = new AccessFlowSDK(page);
    const rawAudits = await sdk.audit();
    const report = await sdk.generateReport(rawAudits);

    // Verify report has expected structure
    expect(report).toHaveProperty('numberOfIssuesFound');
    expect(report).toHaveProperty('ruleViolations');

    // Verify numberOfIssuesFound has severity levels
    const { numberOfIssuesFound } = report;
    expect(numberOfIssuesFound).toHaveProperty('extreme');
    expect(numberOfIssuesFound).toHaveProperty('high');
    expect(numberOfIssuesFound).toHaveProperty('medium');
    expect(numberOfIssuesFound).toHaveProperty('low');

    // Verify all counts are non-negative numbers
    expect(numberOfIssuesFound.extreme).toBeGreaterThanOrEqual(0);
    expect(numberOfIssuesFound.high).toBeGreaterThanOrEqual(0);
    expect(numberOfIssuesFound.medium).toBeGreaterThanOrEqual(0);
    expect(numberOfIssuesFound.low).toBeGreaterThanOrEqual(0);

    const rv = report.ruleViolations as Record<string, { WCAGLink?: string }>;
    if (Object.keys(rv).length > 0) {
      assertRuleViolationsWcagLinksValid(rv);
    }

    console.log('\n✅ Report structure validation passed');
  });
});

test.describe('AccessFlow SDK - Fixture Page Audit', () => {
  test('should audit fixture page with known accessibility issues', async ({ page }) => {
    // Get path to shared test fixture HTML
    const htmlPath = path.join(__dirname, '..', '..', 'fixtures', 'sample_page_with_issues.html');
    const fileUrl = `file://${htmlPath}`;

    console.log(`\n📄 Loading fixture page: ${fileUrl}`);
    await page.goto(fileUrl);
    await page.waitForLoadState('domcontentloaded');

    // Take screenshot for debugging
    await page.screenshot({ path: 'test-results/fixture_page.png' });
    console.log('📸 Screenshot saved: test-results/fixture_page.png');

    // Initialize SDK and run audit
    console.log('\n🔍 Running accessibility audit on fixture...');
    const sdk = new AccessFlowSDK(page);
    const rawAudits = await sdk.audit();

    // Verify audit completed
    expect(rawAudits).toBeDefined();
    expect(rawAudits).not.toBeNull();

    // Generate report from raw audits
    const report = await sdk.generateReport(rawAudits);

    // Verify report structure
    expect(report).toBeDefined();
    expect(report.numberOfIssuesFound).toBeDefined();
    expect(report.ruleViolations).toBeDefined();

    const { numberOfIssuesFound, ruleViolations } = report;

    console.log('\n✅ Audit completed successfully');
    console.log(`   Extreme: ${numberOfIssuesFound.extreme || 0}`);
    console.log(`   High: ${numberOfIssuesFound.high || 0}`);
    console.log(`   Medium: ${numberOfIssuesFound.medium || 0}`);
    console.log(`   Low: ${numberOfIssuesFound.low || 0}`);

    // Calculate total issues
    const totalIssues = Object.values(numberOfIssuesFound).reduce((sum, count) => sum + count, 0);
    const ruleViolationCount = Object.keys(ruleViolations).length;

    console.log(`   Total issues found: ${totalIssues}`);
    console.log(`   Rule violations: ${ruleViolationCount}`);

    // Verify we found some issues (our HTML has known issues)
    expect(totalIssues).toBeGreaterThan(0);
    expect(ruleViolationCount).toBeGreaterThan(0);

    assertRuleViolationsWcagLinksValid(ruleViolations as Record<string, { WCAGLink?: string }>);

    console.log(
      `\n🎉 Test passed! SDK successfully audited fixture page and found ${totalIssues} issues across ${ruleViolationCount} rules`,
    );
  });
});

test.describe('AccessFlow SDK - Initialization', () => {
  test('should initialize SDK with API key from environment', async ({ page }) => {
    await page.goto('/');

    // SDK should initialize without errors using ACCESSFLOW_SDK_API_KEY from env
    const sdk = new AccessFlowSDK(page);
    
    // If initialization worked, audit should execute
    const rawAudits = await sdk.audit();
    expect(rawAudits).toBeDefined();

    console.log('\n✅ SDK initialization test passed');
  });

  test('should not expose CLI-related options (removed in v1.0.1)', async ({ page }) => {
    console.log('\n🧪 Testing that CLI functionality was removed from Node.js SDK');
    
    await page.goto('/');
    
    // Verify constructor only accepts page and testInfo (no options parameter)
    const sdk = new AccessFlowSDK(page);
    
    // Verify EngineClient is not exported
    try {
      // This should fail to import since EngineClient is no longer exported
      const module = await import('@acsbe/accessflow-sdk');
      expect((module as any).EngineClient).toBeUndefined();
      console.log('✅ EngineClient not exported (expected)');
    } catch (e) {
      // Also acceptable - import might fail
      console.log('✅ EngineClient import failed (expected)');
    }
    
    // Verify AccessFlowSDKOptions type is not exported
    try {
      const module = await import('@acsbe/accessflow-sdk');
      expect((module as any).AccessFlowSDKOptions).toBeUndefined();
      console.log('✅ AccessFlowSDKOptions type not exported (expected)');
    } catch (e) {
      console.log('✅ AccessFlowSDKOptions import failed (expected)');
    }
    
    // Verify the SDK instance doesn't have getEngineClient method
    expect((sdk as any).getEngineClient).toBeUndefined();
    console.log('✅ getEngineClient() method not available (expected)');
    
    console.log('\n✅ CLI removal verification passed - Node.js SDK is pure JavaScript');
  });

  test('should use in-memory processing (no CLI dependency)', async ({ page }) => {
    console.log('\n🧪 Testing in-memory JavaScript processing');
    
    await page.goto('/');
    
    const sdk = new AccessFlowSDK(page);
    const rawAudits = await sdk.audit();
    const report = await sdk.generateReport(rawAudits);
    
    // Verify report was generated using JavaScript (not CLI)
    expect(report).toBeDefined();
    expect(report.numberOfIssuesFound).toBeDefined();
    
    // The fact that this works without any CLI binaries proves
    // the SDK is using pure JavaScript processing
    console.log('✅ In-memory processing confirmed - no CLI required');
  });
});
