package com.acsbe.accessflow;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.LoadState;
import org.testng.annotations.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import static org.testng.Assert.*;

/**
 * AccessFlow SDK Integration Tests - TestNG
 *
 * Mirrors SDKAuditTest (JUnit 5) using TestNG annotations to validate the
 * AccessFlowSuiteListener auto-finalization path.
 *
 * Report finalization is handled automatically by the SDK's ISuiteListener
 * (registered via ServiceLoader in the SDK JAR) — no @AfterSuite call needed.
 */
@Listeners(com.acsbe.accessflow.AccessFlowSuiteListener.class)
public class SDKTestNGTest {

    private Playwright playwright;
    private Browser browser;
    private BrowserContext context;
    private Page page;

    @BeforeClass
    public void launchBrowser() {
        playwright = Playwright.create();
        browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));
    }

    @AfterClass
    public void closeBrowser() {
        // AccessFlowSuiteListener.onFinish() finalizes reports automatically.
        // No manual finalizeReports() call needed.
        if (browser != null) browser.close();
        if (playwright != null) playwright.close();
    }

    @BeforeMethod
    public void createContext() {
        context = browser.newContext();
        page = context.newPage();
    }

    @AfterMethod
    public void closeContext() {
        if (context != null) context.close();
    }

    // -----------------------------------------------------------------------

    @Test(description = "Should audit the deployed GitHub Pages site (TestNG)")
    public void testAuditDeployedSite() {
        System.out.println("\n📄 [TestNG] Loading deployed site: https://ido-kt.github.io/");

        page.navigate("https://ido-kt.github.io/");
        page.waitForLoadState(LoadState.DOMCONTENTLOADED);

        page.screenshot(new Page.ScreenshotOptions()
                .setPath(Paths.get("test-results/testng_deployed_site.png")));

        AccessFlowSDK sdk = new AccessFlowSDK(new PlaywrightDriver(page));
        Map<String, Object> rawAudits = sdk.audit();

        assertNotNull(rawAudits, "Audit should return results");
        assertFalse(rawAudits.isEmpty(), "Audit should not be empty");

        Map<String, Object> report = sdk.generateReport(rawAudits);
        assertNotNull(report);
        assertTrue(report.containsKey("numberOfIssuesFound"));
        assertTrue(report.containsKey("ruleViolations"));

        @SuppressWarnings("unchecked")
        Map<String, Object> counts = (Map<String, Object>) report.get("numberOfIssuesFound");
        int total = getTotalIssues(counts);
        System.out.println("   Total issues found: " + total);
        assertTrue(total >= 0);

        System.out.println("\n🎉 [TestNG] testAuditDeployedSite passed (" + total + " issues)");
    }

    @Test(description = "Should audit fixture page with known accessibility issues (TestNG)")
    public void testAuditFixturePage() {
        String fileUrl = getFixtureUrl();
        System.out.println("\n📄 [TestNG] Loading fixture page: " + fileUrl);

        page.navigate(fileUrl);
        page.waitForLoadState(LoadState.DOMCONTENTLOADED);

        page.screenshot(new Page.ScreenshotOptions()
                .setPath(Paths.get("test-results/testng_fixture_page.png")));

        AccessFlowSDK sdk = new AccessFlowSDK(new PlaywrightDriver(page));
        Map<String, Object> rawAudits = sdk.audit();

        assertNotNull(rawAudits, "Audit should return results");
        assertFalse(rawAudits.isEmpty(), "Audit should not be empty");

        Map<String, Object> report = sdk.generateReport(rawAudits);
        assertNotNull(report);
        assertTrue(report.containsKey("numberOfIssuesFound"));
        assertTrue(report.containsKey("ruleViolations"));

        @SuppressWarnings("unchecked")
        Map<String, Object> counts = (Map<String, Object>) report.get("numberOfIssuesFound");
        @SuppressWarnings("unchecked")
        Map<String, Object> violations = (Map<String, Object>) report.get("ruleViolations");

        int total = getTotalIssues(counts);
        assertTrue(total > 0, "Expected accessibility issues in fixture page");
        assertTrue(violations.size() > 0, "Expected rule violations in fixture page");

        System.out.println("\n🎉 [TestNG] testAuditFixturePage passed (" + total + " issues)");
    }

    @Test(description = "Should return non-null Map from audit() (TestNG)")
    public void testAuditReturnsNonNull() {
        page.navigate("data:text/html,<html><body><h1>Test</h1></body></html>");
        page.waitForLoadState(LoadState.DOMCONTENTLOADED);

        AccessFlowSDK sdk = new AccessFlowSDK(new PlaywrightDriver(page));
        Map<String, Object> rawAudits = sdk.audit();

        assertNotNull(rawAudits, "audit() should never return null");
        assertTrue(rawAudits instanceof Map, "audit() should return a Map");

        System.out.println("\n🎉 [TestNG] testAuditReturnsNonNull passed");
    }

    // -----------------------------------------------------------------------

    private String getFixtureUrl() {
        Path base = Paths.get(System.getProperty("user.dir", ".")).toAbsolutePath().normalize();
        Path htmlPath = base.resolve("../fixtures/sample_page_with_issues.html").normalize();
        if (!htmlPath.toFile().exists()) {
            htmlPath = base.resolve("sdk-tests/fixtures/sample_page_with_issues.html").normalize();
        }
        if (!htmlPath.toFile().exists()) {
            throw new IllegalStateException("Test fixture not found. Tried: " + htmlPath);
        }
        return htmlPath.toUri().toString();
    }

    private int getIssueCount(Map<String, Object> issues, String severity) {
        Object count = issues.get(severity);
        if (count instanceof Number) return ((Number) count).intValue();
        return 0;
    }

    private int getTotalIssues(Map<String, Object> issues) {
        if (issues == null) return 0;
        return getIssueCount(issues, "extreme")
             + getIssueCount(issues, "high")
             + getIssueCount(issues, "medium")
             + getIssueCount(issues, "low");
    }
}
