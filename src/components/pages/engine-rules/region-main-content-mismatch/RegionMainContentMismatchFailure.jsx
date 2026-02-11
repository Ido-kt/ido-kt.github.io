import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RegionMainContentMismatchFailure = () => {
  const ruleId = "region-main-content-mismatch";
  const title = `All of the main content on the page is contained in the main landmark`;
  const description = `The main landmark represents the primary content of a page. It should include only content unique to that page and must remain separate from repeated elements, such as navigation, header, or footer.`;
  const helpText = `Add a role='main' attribute to the main content area so that it is correctly identified by assistive technologies.`;
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
    <footer>Footer content</footer>
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

export default RegionMainContentMismatchFailure;
