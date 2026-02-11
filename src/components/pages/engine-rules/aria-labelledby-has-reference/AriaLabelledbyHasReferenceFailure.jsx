import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const AriaLabelledbyHasReferenceFailure = () => {
  const ruleId = "aria-labelledby-has-reference";
  const title = `aria-labelledby should reference a valid element id`;
  const description = `Since aria-labelledby relies on valid id references, screen readers can only announce the label if the target exists. If the id is missing or invalid, the label will not be conveyed, causing users to miss important context.`;
  const helpText = `Make sure that aria-labeledby attribute point to an existing, screen-reader-visible element on the screen with proper text content.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "input with aria labelledby but no matching element id", content: `<input aria-label="Input field" aria-labelledby="label" />
<div id="label-bad-id">Some label</div>` },
  { filename: "input with aria labelledby but no matching element", content: `<input aria-label="Input field" aria-labelledby="label" />` },
  { filename: "multiple inputs with labelledby but no fitting element", content: `<input id="labelled-by" aria-label="First input" aria-labelledby="labelled-2" />
<div id="label-bad-id-1">Some label</div>
<input id="labelled-by-2" aria-label="Second input" aria-labelledby="label" />
<div id="label-bad-id">Some label</div>` }
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

export default AriaLabelledbyHasReferenceFailure;
