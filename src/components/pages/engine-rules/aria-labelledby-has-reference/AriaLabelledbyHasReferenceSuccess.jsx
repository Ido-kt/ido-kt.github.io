import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const AriaLabelledbyHasReferenceSuccess = () => {
  const ruleId = "aria-labelledby-has-reference";
  const title = `aria-labelledby should reference a valid element id`;
  const description = `Since aria-labelledby relies on valid id references, screen readers can only announce the label if the target exists. If the id is missing or invalid, the label will not be conveyed, causing users to miss important context.`;
  const helpText = `Make sure that aria-labeledby attribute point to an existing, screen-reader-visible element on the screen with proper text content.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "input with aria labelledby and matching element", content: `<input aria-labelledby="label" />
<div id="label">Some label</div>` },
  { filename: "input without aria references", content: `<input aria-label="label" />` },
  { filename: "multiple inputs with labelledby and with matching element", content: `<input id="labelled-by" aria-labelledby="description" />
<div id="description">Some label</div>
<input id="labelled-by-1" aria-labelledby="label" />
<div id="label">Some label</div>` }
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

export default AriaLabelledbyHasReferenceSuccess;
