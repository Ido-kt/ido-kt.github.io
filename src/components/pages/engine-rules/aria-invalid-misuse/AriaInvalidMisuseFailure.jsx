import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const AriaInvalidMisuseFailure = () => {
  const ruleId = "aria-invalid-misuse";
  const title = `Fields must indicate validation errors to assistive technology`;
  const description = `Screen reader users rely on properly coded field validation status and associated validation messages. Otherwise, users would have to browse around and try to pick up clues on the page as to why their submission attempt did not work.`;
  const helpText = `Include the aria-invalid=true attribute when the field validation shows on the page. Screen readers will pick that up and inform the user that this field is invalid. Make sure to change the aria-invalid to false when the field value becomes valid.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "input with aria invalid grammar", content: `<input aria-label="Input field" aria-invalid="grammar" aria-describedby="description" />
<div id="description">Some description</div>` },
  { filename: "input with aria invalid spelling", content: `<input aria-label="Input field" aria-invalid="spelling" aria-describedby="description" />
<div id="description">Some description</div>` },
  { filename: "input with aria invalid true", content: `<input aria-label="Input field" aria-invalid="true" aria-describedby="description" />
<div id="description">Some description</div>` },
  { filename: "input with empty aria invalid", content: `<input aria-label="Input field" aria-invalid aria-describedby="description" />
<div id="description">Some description</div>` }
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

export default AriaInvalidMisuseFailure;
