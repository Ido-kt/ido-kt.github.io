package com.acsbe.accessflow;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

/**
 * Ensures ruleViolation payloads match CI/CD expectations: WCAGLink is always present
 * and is either '-' or a valid http(s) URL (SDK normalizes missing issueWCAGLinks to '-').
 */
public final class WcagLinkAssertions {

    private WcagLinkAssertions() {}

    public static void assertRuleViolationsWcagLinksValid(Map<String, Object> ruleViolations) {
        if (ruleViolations == null || ruleViolations.isEmpty()) {
            return;
        }
        for (Map.Entry<String, Object> e : ruleViolations.entrySet()) {
            String ruleId = e.getKey();
            assertTrue(e.getValue() instanceof Map, () -> "rule " + ruleId + ": violation must be a map");
            @SuppressWarnings("unchecked")
            Map<String, Object> v = (Map<String, Object>) e.getValue();
            assertTrue(v.containsKey("WCAGLink"),
                () -> "rule " + ruleId + ": WCAGLink key must be present (SDK uses '-' when no WCAG URL)");
            Object linkObj = v.get("WCAGLink");
            assertNotNull(linkObj, () -> "rule " + ruleId + ": WCAGLink must be non-null");
            assertTrue(linkObj instanceof String, () -> "rule " + ruleId + ": WCAGLink must be a string");
            String link = (String) linkObj;
            if (!"-".equals(link)) {
                try {
                    URL url = new URL(link);
                    String protocol = url.getProtocol();
                    assertTrue("http".equals(protocol) || "https".equals(protocol),
                        () -> "rule " + ruleId + ": WCAGLink must be http(s) or '-', got: " + link);
                } catch (MalformedURLException ex) {
                    fail("rule " + ruleId + ": invalid WCAGLink: " + link, ex);
                }
            }
        }
    }
}
