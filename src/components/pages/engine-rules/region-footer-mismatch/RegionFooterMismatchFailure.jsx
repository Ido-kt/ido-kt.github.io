import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RegionFooterMismatchFailure = () => {
  const ruleId = "region-footer-mismatch";
  const title = `Footer region should be correctly marked up`;
  const description = `Ensure that the footer region is correctly marked up.`;
  const helpText = `Add a <footer> element to define the footer of the document.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "landmark no role", content: `<!DOCTYPE html>
<html>
  <body>
    <header>Header content</header>
    <div style="height: 300px;">Smaller div</div>
    <div id="larger" style="height: 700px;">Larger div</div>
    <div class="footer">Footer content</div>
  </body>
</html>` }
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

export default RegionFooterMismatchFailure;
