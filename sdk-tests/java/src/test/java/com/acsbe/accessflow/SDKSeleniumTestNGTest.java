package com.acsbe.accessflow;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.Map;

import static org.testng.Assert.*;

/**
 * AccessFlow SDK Selenium Integration Tests - TestNG
 *
 * Mirrors SDKSeleniumTest (JUnit 5) using TestNG annotations to validate the
 * AccessFlowSuiteListener auto-finalization path with the Selenium driver.
 *
 * Report finalization is handled automatically by the SDK's ISuiteListener
 * (registered via ServiceLoader in the SDK JAR) — no @AfterSuite call needed.
 */
@Listeners(com.acsbe.accessflow.AccessFlowSuiteListener.class)
public class SDKSeleniumTestNGTest {

    private WebDriver driver;

    @BeforeMethod
    public void openBrowser() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new", "--no-sandbox", "--disable-dev-shm-usage");
        driver = new ChromeDriver(options);
    }

    @AfterMethod
    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }

    // -----------------------------------------------------------------------

    @Test(description = "Audit deployed site with Selenium WebDriver (TestNG)")
    public void testAuditDeployedSiteSelenium() {
        driver.get("https://ido-kt.github.io/");

        AccessFlowSDK sdk = new AccessFlowSDK(new SeleniumDriver(driver));
        Map<String, Object> rawAudits = sdk.audit();

        assertNotNull(rawAudits, "rawAudits should be defined");
        Map<String, Object> report = sdk.generateReport(rawAudits);
        assertNotNull(report);
        assertTrue(report.containsKey("numberOfIssuesFound"));
        assertTrue(report.containsKey("ruleViolations"));

        System.out.println("\n🎉 [TestNG+Selenium] testAuditDeployedSiteSelenium passed");
    }

    @Test(description = "Audit fixture page with Selenium WebDriver (TestNG)")
    public void testAuditFixturePageSelenium() throws InterruptedException {
        driver.get(getFixtureUrl());
        waitForFixtureContent(driver);
        Thread.sleep(500);

        AccessFlowSDK sdk = new AccessFlowSDK(new SeleniumDriver(driver));
        Map<String, Object> rawAudits = sdk.audit();

        assertNotNull(rawAudits);
        Map<String, Object> report = sdk.generateReport(rawAudits);
        assertNotNull(report);
        assertTrue(report.containsKey("numberOfIssuesFound"));
        assertTrue(report.containsKey("ruleViolations"));

        @SuppressWarnings("unchecked")
        Map<String, Object> counts = (Map<String, Object>) report.get("numberOfIssuesFound");
        int total = 0;
        if (counts != null) {
            for (Object v : counts.values()) {
                if (v instanceof Number) total += ((Number) v).intValue();
            }
        }
        assertTrue(total > 0, "fixture should have at least one issue");
        assertTrue(((Map<?, ?>) report.get("ruleViolations")).size() > 0, "fixture should have rule violations");

        System.out.println("\n🎉 [TestNG+Selenium] testAuditFixturePageSelenium passed (" + total + " issues)");
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

    private void waitForFixtureContent(WebDriver d) {
        new WebDriverWait(d, Duration.ofSeconds(10))
            .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h1[text()='Main Heading']")));
    }
}
