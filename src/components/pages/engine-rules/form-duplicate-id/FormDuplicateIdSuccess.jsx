import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const FormDuplicateIdSuccess = () => {
  const ruleId = "form-duplicate-id";
  const title = `Forms and form fields must have unique ID attributes`;
  const description = `Screen readers rely on ID attributes to be unique in order to announce to the users the correct content. If IDs are not unique, screen readers won't know which element is the correct one.`;
  const helpText = `Change the ID of the duplicate fields and forms so they are unique.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "form with unique ids", content: `<form id="form">
  <input id="name-field" type="text" />
  <input id="password-field" type="password" />
  <button type="submit">Confirm</button>
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

export default FormDuplicateIdSuccess;
