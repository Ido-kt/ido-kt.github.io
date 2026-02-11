import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RegionFooterSingleSuccess = () => {
  const ruleId = "region-footer-single";
  const title = `Each page should include at most one global contentinfo landmark (footer)`;
  const description = `Each page should normally include only one contentinfo landmark (usually the site footer) to keep landmark navigation simple and predictable. Additional contentinfo landmarks are permitted when clearly justified, but they must each have a unique accessible label.`;
  const helpText = `Make sure each page has only one top-level contentinfo landmark for the global footer. For additional footer-like blocks, nest them inside sectioning elements, or use role="region" with a label instead of contentinfo.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "footer presentation and content info", content: `<div role="contentinfo" aria-label="footer">
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

<footer role="presentation">
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</footer>` },
  { filename: "single content info", content: `<div role="contentinfo" aria-label="footer">
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</div>` },
  { filename: "single footer", content: `<footer>
  <div>
    <h3>About Us</h3>
    <p>Learn more about our mission and values.</p>
  </div>
  <div>
    <h3>Contact</h3>
    <p>Email: <a href="mailto:support@mywebsite.com">support@mywebsite.com</a></p>
    <p>Phone: (555) 123-4567</p>
  </div>
  <div>
    <h3>Quick Links</h3>
    <ul>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/support">Support</a></li>
    </ul>
  </div>
</footer>` }
  ];

  return (
    <EngineIssueSuccess
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      bestPractices={bestPractices}
      htmlExamples={htmlExamples}
    />
  );
};

export default RegionFooterSingleSuccess;
