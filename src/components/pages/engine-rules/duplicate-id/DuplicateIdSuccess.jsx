import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const DuplicateIdSuccess = () => {
  const ruleId = "duplicate-id";
  const title = `The id attribute should have a unique value`;
  const description = `The id attribute is a unique identifier in the DOM, and using the same value more than once creates ambiguity. This can cause styles and scripts to behave unpredictably, and may also disrupt label or ARIA references that depend on unique IDs.`;
  const helpText = `Make sure all id attributes on a page have unique values.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "distinct id", content: `<h1 id="some-id">Heading element</h1>
<div id="some-id2">Heading element</div>` },
  { filename: "multiple elements no id", content: `<h1>Heading element</h1>
<div>Heading element</div>` }
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

export default DuplicateIdSuccess;
