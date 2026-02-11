import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RegionMainContentSingleSuccess = () => {
  const ruleId = "region-main-content-single";
  const title = `Each page should include at most one main landmark`;
  const description = `A page typically presents one central subject, so a single main landmark establishes the boundaries of the primary content for screen reader users. Multiple main landmarks create uncertainty about the scope, leading to confusion and difficulty navigating the page.`;
  const helpText = `Keep only the true primary area as <main> or role="main", and change others to suitable elements—such as <section>, <nav>, or a neutral <div>. In modular or single-page apps, only the active view should expose a main landmark; remove the role or unmount inactive modules, or hide them with hidden or display:none.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "single element with role main", content: `<div role="main">Some main content</div>` },
  { filename: "single main element", content: `<main>Some main content</main>` },
  { filename: "two elements with role main one is display none", content: `<div role="main">Some main content</div>
<div role="main" style="display: none">Some main content</div>` },
  { filename: "two elements with role main one is visibility hidden", content: `<div role="main">Some main content</div>
<div role="main" style="visibility: hidden">Some main content</div>` },
  { filename: "two main elements one is display none", content: `<main>Some main content</main>
<main style="display: none">Some main content</main>` },
  { filename: "two main elements one is visibility hidden", content: `<main>Some main content</main>
<main style="visibility: hidden">Some main content</main>` }
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

export default RegionMainContentSingleSuccess;
