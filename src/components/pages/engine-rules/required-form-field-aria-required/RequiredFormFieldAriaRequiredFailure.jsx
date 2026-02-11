import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RequiredFormFieldAriaRequiredFailure = () => {
  const ruleId = "required-form-field-aria-required";
  const title = `Mandatory form fields should indicate that they are required`;
  const description = `If a field is marked as required only through visual cues, but lacks the required attribute or aria-required="true", screen readers will not announce it as mandatory. As a result, users may experience unnecessary delays or confusion when trying to submit the form.`;
  const helpText = `Add required or aria-required="true" to required input fields.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "native required form field no required", content: `<form>
  <label for="email">Email *</label>
  <input id="email" type="email" style="border: red 1px solid">
  <button type="submit">Submit</button>
</form>` },
  { filename: "non native required form field aria required false", content: `<form>
  <div id="tbLabel">Email Address *</div>
  <div
    role="textbox"
    contenteditable
    aria-labelledby="tblabel"
    id="email1"
    aria-required="false"
    style="border: red 1px solid"></div>
    <button type="submit">Submit</button>
</form>` },
  { filename: "non native required form field aria required no value", content: `<form>
  <div id="tbLabel">Email Address *</div>
  <div
    role="textbox"
    contenteditable
    aria-labelledby="tblabel"
    id="email1"
    aria-required
    style="border: red 1px solid"></div>
    <button type="submit">Submit</button>
</form>` },
  { filename: "non native required form field no aria required", content: `<form>
  <div id="tbLabel">Email Address *</div>
  <div
    role="textbox"
    contenteditable
    aria-labelledby="tblabel"
    id="email1"
    style="border: red 1px solid"></div>
    <button type="submit">Submit</button>
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

export default RequiredFormFieldAriaRequiredFailure;
