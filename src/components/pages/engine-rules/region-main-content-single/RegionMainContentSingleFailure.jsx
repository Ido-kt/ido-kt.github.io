import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RegionMainContentSingleFailure = () => {
  const ruleId = "region-main-content-single";
  const title = `Each page should include at most one main landmark`;
  const description = `A page typically presents one central subject, so a single main landmark establishes the boundaries of the primary content for screen reader users. Multiple main landmarks create uncertainty about the scope, leading to confusion and difficulty navigating the page.`;
  const helpText = `Keep only the true primary area as <main> or role="main", and change others to suitable elements—such as <section>, <nav>, or a neutral <div>. In modular or single-page apps, only the active view should expose a main landmark; remove the role or unmount inactive modules, or hide them with hidden or display:none.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "multiple visible elements with role main", content: `<div role="main">Some main content</div>
<div role="main" id="redundant-1">Some main content</div>
<div role="main" id="redundant-2">Some main content</div>` },
  { filename: "multiple visible main elements and role main", content: `<main>Main content</main>
<div role="main" id="redundant-1">Some main content</div>
<main id="redundant-2">Some main content</main>` },
  { filename: "multiple visible main elements", content: `<main>Main content</main>
<main id="redundant-1">Main content</main>
<main id="redundant-2">Main content</main>` }
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

export default RegionMainContentSingleFailure;
