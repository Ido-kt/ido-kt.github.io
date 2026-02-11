import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingSingleH1Failure = () => {
  const ruleId = "heading-single-h1";
  const title = `Each page should not have more than one main heading`;
  const description = `Each web page should have only one h1 element so that screen reader users can identify the main topic or purpose of the page. Multiple h1s can confuse users by suggesting there are multiple primary topics, disrupting navigation by headings and making it harder to understand the overall page structure.`;
  const helpText = `Make sure that each web page has exactly one h1 element so that screen reader users can identify the main subject of the page.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "h1 and aria level 1", content: `<h1>Heading element</h1>
<div role="heading" aria-level="1">Heading element</div>` },
  { filename: "multiple h1", content: `<h1 id="firstH1">Heading element</h1>
<h1 id="secondH1">Heading element</h1>` },
  { filename: "multiple role heading aria level 1", content: `<div id="firstH1" role="heading" aria-level="1">Heading element</div>
<div id="secondH1" role="heading" aria-level="1">Heading element</div>` }
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

export default HeadingSingleH1Failure;
