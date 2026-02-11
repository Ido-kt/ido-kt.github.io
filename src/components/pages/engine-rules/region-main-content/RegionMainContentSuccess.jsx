import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RegionMainContentSuccess = () => {
  const ruleId = "region-main-content";
  const title = `Each web page that uses landmark regions should have a main landmark`;
  const description = `A main landmark (e.g., <main>) lets screen reader users quickly skip past repeated elements and jump straight to the primary content, improving navigation and orientation.`;
  const helpText = `Enclose all of the primary content on the page in either a <main> element or any container with role="main".`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "multiple elements with role main", content: `<div role="main" id="first">Some main content</div>
<div role="main" id="second">Some main content</div>
<div role="main" id="third">Some main content</div>` },
  { filename: "multiple main elements and role main", content: `<main id="first">Main content</main>
<div role="main" id="second">Some main content</div>
<div role="main" id="third">Some main content</div>` },
  { filename: "multiple main elements", content: `<main id="first">Some main content</main>
<main id="second">Some main content</main>
<main id="third">Some main content</main>` },
  { filename: "single element with role main", content: `<div role="main">Some main content</div>` },
  { filename: "single main element", content: `<main>Some main content</main>` }
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

export default RegionMainContentSuccess;
