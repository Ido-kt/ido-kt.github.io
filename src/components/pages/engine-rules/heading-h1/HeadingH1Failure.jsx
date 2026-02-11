import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingH1Failure = () => {
  const ruleId = "heading-h1";
  const title = `Each page should have a main heading`;
  const description = `There should be one h1 heading element that defines the subject of the main content on the page.`;
  const helpText = `Add a h1 element at the start of the main content on the page.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "no h1 no aria level 1", content: `<span>Not header</span>` }
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

export default HeadingH1Failure;
