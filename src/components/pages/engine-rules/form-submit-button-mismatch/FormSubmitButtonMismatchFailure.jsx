import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const FormSubmitButtonMismatchFailure = () => {
  const ruleId = "form-submit-button-mismatch";
  const title = `Form submission controls should have type="submit"`;
  const description = `Adding type="submit" to a control that submits a form ensures that screen readers users expect a change of context when they activate the control.`;
  const helpText = `Assign type="submit" to <button> or <input> elements when they submit a form.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "form with button not calssified as submit", content: `<form>
  <input type="text" />
  <input type="password" />
  <button>Other button</button>
</form>` },
  { filename: "form with perceivable submit button", content: `<form>
  <input type="text" required />
  <span style="cursor: pointer">go</span>
</form>` }
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

export default FormSubmitButtonMismatchFailure;
