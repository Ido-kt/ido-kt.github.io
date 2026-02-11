import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const AriaDescribedbyHasReferenceFailure = () => {
  const ruleId = "aria-describedby-has-reference";
  const title = `aria-describedby should reference a valid element id`;
  const description = `The element’s aria-describedby attribute points to an id that does not exist or is not valid, preventing assistive technologies from announcing the intended description and causing users to miss important context.`;
  const helpText = `Make the value of aria-describedby exactly match the id of an existing, unique element on the page. Remove or update the attribute if the target is missing or no longer relevant`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "input with aria describedby but no matching element id", content: `<input aria-label="Input field" aria-describedby="description" />
<div id="description-bad-id">Some description</div>` },
  { filename: "input with aria describedby but no matching element", content: `<input aria-label="Input field" aria-describedby="description" />` },
  { filename: "input with valid aria describedby and invalid aria labelledby", content: `<input aria-label="Input field" aria-labelledby="label" aria-describedby="description" />
<div id="description-bad">Some description</div>` }
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

export default AriaDescribedbyHasReferenceFailure;
