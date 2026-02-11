import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const FormSubmitButtonMismatchSuccess = () => {
  const ruleId = "form-submit-button-mismatch";
  const title = `Form submission controls should have type="submit"`;
  const description = `Adding type="submit" to a control that submits a form ensures that screen readers users expect a change of context when they activate the control.`;
  const helpText = `Assign type="submit" to <button> or <input> elements when they submit a form.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "form with hidden submit button", content: `<form>
  <input type="text" required />
  <span style="cursor: pointer; display: none">go</span>
</form>` },
  { filename: "form with submit button", content: `<form>
  <input type="text" />
  <input type="password" />
  <button type="submit">Confirm</button>
</form>` },
  { filename: "form with submit input", content: `<form>
  <input type="text" />
  <input type="password" />
  <input type="submit" />
</form>` },
  { filename: "form without submit button", content: `<form>
  <input type="text" />
  <input type="password" />
</form>` },
  { filename: "multiple forms one without submit button", content: `<form id="submit-1">
  <input type="text" />
  <input type="password" />
  <input type="submit">
</form>
<form id="missing-submit-2">
  <input type="text" />
  <input type="password" />
</form>` }
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

export default FormSubmitButtonMismatchSuccess;
