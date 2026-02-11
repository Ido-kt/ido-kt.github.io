import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const AriaInvalidMisuseSuccess = () => {
  const ruleId = "aria-invalid-misuse";
  const title = `Fields must indicate validation errors to assistive technology`;
  const description = `Screen reader users rely on properly coded field validation status and associated validation messages. Otherwise, users would have to browse around and try to pick up clues on the page as to why their submission attempt did not work.`;
  const helpText = `Include the aria-invalid=true attribute when the field validation shows on the page. Screen readers will pick that up and inform the user that this field is invalid. Make sure to change the aria-invalid to false when the field value becomes valid.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "input aria invalid false", content: `<input aria-invalid="false" aria-describedby="description" />
<div id="description">Some description</div>` },
  { filename: "input no aria invalid attribute", content: `<input aria-describedby="description" />
<div id="description">Some description</div>` }
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

export default AriaInvalidMisuseSuccess;
