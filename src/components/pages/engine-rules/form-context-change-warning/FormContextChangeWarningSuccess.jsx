import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const FormContextChangeWarningSuccess = () => {
  const ruleId = "form-context-change-warning";
  const title = `Interacting with form controls should not cause a change in context unless a user is notified beforehand`;
  const description = `Interacting with form controls shouldn't automatically submit a form or cause any other change in context without notifying the user in advance. Form controls that cause a context change on input can disorient a user, since the behavior is not expected.`;
  const helpText = `Make sure that forms can be manually submitted via a submit button, or provide instructions that notify users of the expected behavior before they interact with the control.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "button not inside form but associated to it", content: `<form id="test"></form>

<button type="submit" form="test">hi</button>` },
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
  { filename: "hidden form without submit button", content: `<form style="display: none">
  <input type="text" />
  <input type="password" />
</form>` },
  { filename: "input type image", content: `<form>
  <input type="image" />
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

export default FormContextChangeWarningSuccess;
