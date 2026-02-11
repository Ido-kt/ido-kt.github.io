import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const FormContextChangeWarningFailure = () => {
  const ruleId = "form-context-change-warning";
  const title = `Interacting with form controls should not cause a change in context unless a user is notified beforehand`;
  const description = `Interacting with form controls shouldn't automatically submit a form or cause any other change in context without notifying the user in advance. Form controls that cause a context change on input can disorient a user, since the behavior is not expected.`;
  const helpText = `Make sure that forms can be manually submitted via a submit button, or provide instructions that notify users of the expected behavior before they interact with the control.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button outside div role form  associated to it but its not native form", content: `<div role="form" id="test"></div>

<button type="submit" form="test">hi</button>` },
  { filename: "form with button not calssified as submit", content: `<form>
  <input type="text" />
  <input type="password" />
  <button>Other button</button>
</form>` },
  { filename: "form without submit button", content: `<form>
  <input type="text" />
  <input type="password" />
</form>` },
  { filename: "multiple forms  associated button inside another div role form", content: `<!-- test is skipped due to classifier wrongfully detecting this submit button -->
<div id="submit-1" role="form">
  <input type="text" />
  <input type="password" />
</div>

<form id="missing-submit-2">
  <input type="submit" form="submit-1" />
  <input type="text" />
  <input type="password" />
</form>` },
  { filename: "multiple forms  associated button inside another form", content: `<!-- test is skipped due to classifier wrongfully detecting this submit button -->
<form id="submit-1" role="form">
  <input type="text" />
  <input type="password" />
</form>

<form id="missing-submit-2">
  <input type="submit" form="submit-1" />
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
</form>` },
  { filename: "multiple forms only one with associated submit button", content: `<form id="submit-1">
  <input type="text" />
  <input type="password" />
</form>
<input type="submit" form="submit-1" />
<form id="missing-submit-2">
  <input type="text" />
  <input type="password" />
</form>` },
  { filename: "multiple forms without submit button", content: `<form id="missing-submit-1">
  <input type="text" />
  <input type="password" />
</form>
<form id="missing-submit-2">
  <input type="text" />
  <input type="password" />
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

export default FormContextChangeWarningFailure;
