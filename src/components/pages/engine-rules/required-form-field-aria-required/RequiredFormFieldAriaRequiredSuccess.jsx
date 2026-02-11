import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RequiredFormFieldAriaRequiredSuccess = () => {
  const ruleId = "required-form-field-aria-required";
  const title = `Mandatory form fields should indicate that they are required`;
  const description = `If a field is marked as required only through visual cues, but lacks the required attribute or aria-required="true", screen readers will not announce it as mandatory. As a result, users may experience unnecessary delays or confusion when trying to submit the form.`;
  const helpText = `Add required or aria-required="true" to required input fields.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "native required form field aria required true", content: `<form>
  <label for="email">Email *</label>
  <input id="email" type="email" style="border: red 1px solid" aria-required="true">
  <button type="submit">Submit</button>
</form>` },
  { filename: "native required form field required false", content: `<form>
  <label for="email">Email *</label>
  <input id="email" type="email" style="border: red 1px solid" required="false">
  <button type="submit">Submit</button>
</form>` },
  { filename: "native required form field required no value", content: `<form>
  <label for="email">Email *</label>
  <input id="email" type="email" style="border: red 1px solid" required>
  <button type="submit">Submit</button>
</form>` },
  { filename: "native required form field required true", content: `<form>
  <label for="email">Email *</label>
  <input id="email" type="email" style="border: red 1px solid" required="true">
  <button type="submit">Submit</button>
</form>` },
  { filename: "non native required form field aria required true", content: `<form>
  <div id="tbLabel">Email Address *</div>
  <div
    role="textbox"
    contenteditable
    aria-labelledby="tblabel"
    id="email1"
    aria-required="true"
    style="border: red 1px solid"></div>
    <button type="submit">Submit</button>
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

export default RequiredFormFieldAriaRequiredSuccess;
