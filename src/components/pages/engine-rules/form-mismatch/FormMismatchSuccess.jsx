import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const FormMismatchSuccess = () => {
  const ruleId = "form-mismatch";
  const title = `A container of input elements should be tagged as a form`;
  const description = `Input elements should be enclosed in a <form> element or an element with role="form" so that browsers and assistive technologies identify and expose the fields as part of a form.\\\\`;
  const helpText = `Enclose the input controls in a <form> element or assign role="form" to an element that contains the fields.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "compliant form", content: `<form>
  <input type="text" />
  <input type="password" />
  <input type="submit" />
</form>
<div role="form">
  <input type="text" />
  <input type="password" />
  <input type="submit" />
</div>` }
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

export default FormMismatchSuccess;
