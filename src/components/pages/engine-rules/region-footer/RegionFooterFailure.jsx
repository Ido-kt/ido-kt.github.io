import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RegionFooterFailure = () => {
  const ruleId = "region-footer";
  const title = `Footer region should be correctly marked up`;
  const description = `Ensure that the footer region is correctly marked up.`;
  const helpText = `Add a footer element or use role=contentInfo to define the footer of the document.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "no content info", content: `<div aria-label="footer">
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <nav aria-label="Footer navigation">
    <ul>
      <li><a href="/about">About Us</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
  <p>Contact us: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
</div>` }
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

export default RegionFooterFailure;
