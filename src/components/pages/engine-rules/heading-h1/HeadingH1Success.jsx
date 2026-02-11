import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HeadingH1Success = () => {
  const ruleId = "heading-h1";
  const title = `Each page should have a main heading`;
  const description = `There should be one h1 heading element that defines the subject of the main content on the page.`;
  const helpText = `Add a h1 element at the start of the main content on the page.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "single aria level 1", content: `<div role="heading" aria-level="1">Heading element</div>` },
  { filename: "single h1 single aria level 1", content: `<h1>Test</h1>
<div role="heading" aria-level="1">Heading element</div>` },
  { filename: "single h1 sr only", content: `<style>
    body {
        font-size: 16px;
        font-weight: 400;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
</style>

<h1 class="sr-only">Heading element</h1>` },
  { filename: "single h1", content: `<h1>Heading element</h1>` },
  { filename: "single h2 aria level 1", content: `<h2 aria-level="1">Heading element</h2>` }
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

export default HeadingH1Success;
