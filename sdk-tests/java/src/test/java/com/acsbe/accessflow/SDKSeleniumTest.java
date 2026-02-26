package com.acsbe.accessflow;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

/**
 * AccessFlow SDK Selenium Integration Tests - Java
 * Run with: mvn test -Dtest=SDKSeleniumTest
 * Requires: Chrome, ACCESSFLOW_SDK_API_KEY.
 */
public class SDKSeleniumTest {

    private WebDriver driver;

    @BeforeEach
    void openBrowser() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new", "--no-sandbox", "--disable-dev-shm-usage");
        driver = new ChromeDriver(options);
    }

    @AfterEach
    void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }

    private String getFixtureUrl() {
        Path base = Paths.get(System.getProperty("user.dir", "."));
        Path htmlPath = base.resolve("../fixtures/sample_page_with_issues.html").normalize();
        if (!htmlPath.toFile().exists()) {
            throw new IllegalStateException("Test fixture not found: " + htmlPath);
        }
        return "file://" + htmlPath.toAbsolutePath().toString();
    }

    @Test
    @DisplayName("Audit deployed site with Selenium WebDriver")
    void testAuditDeployedSiteSelenium() {
        driver.get("https://ido-kt.github.io/");

        AccessFlowSDK sdk = new AccessFlowSDK(new SeleniumDriver(driver));
        Map<String, Object> rawAudits = sdk.audit();

        assertNotNull(rawAudits, "rawAudits should be defined");
        Map<String, Object> report = sdk.generateReport(rawAudits);
        assertNotNull(report);
        assertTrue(report.containsKey("numberOfIssuesFound"));
        assertTrue(report.containsKey("ruleViolations"));
    }

    @Test
    @DisplayName("Audit fixture page with Selenium WebDriver")
    void testAuditFixturePageSelenium() {
        driver.get(getFixtureUrl());

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
    }
}
