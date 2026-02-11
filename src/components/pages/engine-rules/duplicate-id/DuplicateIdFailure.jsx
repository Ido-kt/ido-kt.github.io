import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const DuplicateIdFailure = () => {
  const ruleId = "duplicate-id";
  const title = `The id attribute should have a unique value`;
  const description = `The id attribute is a unique identifier in the DOM, and using the same value more than once creates ambiguity. This can cause styles and scripts to behave unpredictably, and may also disrupt label or ARIA references that depend on unique IDs.`;
  const helpText = `Make sure all id attributes on a page have unique values.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "multuple same id", content: `<h1 id="some-id">Heading element</h1>
<div id="some-id">Heading element</div>` }
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

export default DuplicateIdFailure;
