import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RegionMainContentFailure = () => {
  const ruleId = "region-main-content";
  const title = `Each web page that uses landmark regions should have a main landmark`;
  const description = `A main landmark (e.g., <main>) lets screen reader users quickly skip past repeated elements and jump straight to the primary content, improving navigation and orientation.`;
  const helpText = `Enclose all of the primary content on the page in either a <main> element or any container with role="main".`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "aria hidden single main element", content: `<main aria-hidden="true">Main content</main>` },
  { filename: "display none single main element", content: `<main style="display: none">Main content</main>` },
  { filename: "non visible multiple main elements", content: `<div role="main" style="display: none">Some main content</div>
<div role="main" id="redundant-1" aria-hidden="true">Some main content</div>
<div role="main" id="redundant-2" style="visibility: hidden">Some main content</div>` },
  { filename: "single element without indication of being main", content: `<div>Main content</div>` },
  { filename: "visibility hidden single main element", content: `<main style="visibility: hidden">Main content</main>` }
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

export default RegionMainContentFailure;
