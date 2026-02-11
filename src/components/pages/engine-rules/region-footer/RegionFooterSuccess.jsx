import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RegionFooterSuccess = () => {
  const ruleId = "region-footer";
  const title = `Footer region should be correctly marked up`;
  const description = `Ensure that the footer region is correctly marked up.`;
  const helpText = `Add a footer element or use role=contentInfo to define the footer of the document.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "content info and label", content: `<div role="contentinfo" aria-label="footer">
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
  { filename: "footer tag", content: `<footer>
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

export default RegionFooterSuccess;
