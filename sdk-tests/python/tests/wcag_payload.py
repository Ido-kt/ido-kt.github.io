"""Shared assertions for SDK report payloads sent to AccessFlow CI/CD APIs."""
from urllib.parse import urlparse


def assert_rule_violations_wcag_links(rule_violations: dict) -> None:
    """
    Each ruleViolation must include WCAGLink: '-' or a valid http(s) URL.

    The SDK sets WCAGLink from rules.issueWCAGLinks[0] or '-' when missing/empty
    (reporting / summarizer); the key should always be present on summaries even
    though the CI Zod schema marks WCAGLink optional for backward compatibility.
    """
    for rule_id, v in rule_violations.items():
        assert "WCAGLink" in v, (
            f"{rule_id}: WCAGLink key must be present (SDK uses '-' when no WCAG URL)"
        )
        link = v["WCAGLink"]
        assert isinstance(link, str), f"{rule_id}: WCAGLink must be a string"
        if link != "-":
            parsed = urlparse(link)
            assert parsed.scheme in ("http", "https") and parsed.netloc, (
                f"{rule_id}: WCAGLink must be http(s) or '-', got {link!r}"
            )
