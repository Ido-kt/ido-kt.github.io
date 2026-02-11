import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RegionFooterSingleFailure = () => {
  const ruleId = "region-footer-single";
  const title = `Each page should include at most one global contentinfo landmark (footer)`;
  const description = `Each page should normally include only one contentinfo landmark (usually the site footer) to keep landmark navigation simple and predictable. Additional contentinfo landmarks are permitted when clearly justified, but they must each have a unique accessible label.`;
  const helpText = `Make sure each page has only one top-level contentinfo landmark for the global footer. For additional footer-like blocks, nest them inside sectioning elements, or use role="region" with a label instead of contentinfo.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "footer and content info", content: `<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</footer>

<div role="contentinfo" aria-label="footer">
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</div>` },
  { filename: "multiple content info", content: `<div role="contentinfo" aria-label="footer">
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</div>

<div role="contentinfo" aria-label="footer">
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</div>` },
  { filename: "multiple footers", content: `<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</footer>

<footer>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</footer>` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default RegionFooterSingleFailure;
