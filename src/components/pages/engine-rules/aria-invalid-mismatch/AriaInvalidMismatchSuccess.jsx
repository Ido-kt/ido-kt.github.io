import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const AriaInvalidMismatchSuccess = () => {
  const ruleId = "aria-invalid-mismatch";
  const title = `Form fields should indicate validation errors to assistive technology`;
  const description = `Screen reader users rely on properly coded field validation status and associated errormessages. Otherwise, users have to browse around and search the page for clues as to why their submission attempt didn't work.`;
  const helpText = `To make sure that screen readers are aware of form fields with invalid input, set aria-invalid="true". Remove the attribute once the value becomes valid.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "textarea required has value", content: `<!-- Only interacted elements are audited, we can't test it using atomic tests currently. unit tests cover it -->
<textarea required>filled</textarea>` }
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

export default AriaInvalidMismatchSuccess;
