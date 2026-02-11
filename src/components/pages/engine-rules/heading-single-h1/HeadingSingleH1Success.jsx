import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HeadingSingleH1Success = () => {
  const ruleId = "heading-single-h1";
  const title = `Each page should not have more than one main heading`;
  const description = `Each web page should have only one h1 element so that screen reader users can identify the main topic or purpose of the page. Multiple h1s can confuse users by suggesting there are multiple primary topics, disrupting navigation by headings and making it harder to understand the overall page structure.`;
  const helpText = `Make sure that each web page has exactly one h1 element so that screen reader users can identify the main subject of the page.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "no h1", content: `<div></div>` },
  { filename: "single aria level 1", content: `<div role="heading" aria-level="1">Heading element</div>` },
  { filename: "single h1", content: `<h1>Heading element</h1>` },
  { filename: "two h1 one with aria level 2", content: `<h1>Heading element</h1>
<h1 aria-level="2">Heading element</h1>` }
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

export default HeadingSingleH1Success;
