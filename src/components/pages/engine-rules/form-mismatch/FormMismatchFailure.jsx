import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const FormMismatchFailure = () => {
  const ruleId = "form-mismatch";
  const title = `A container of input elements should be tagged as a form`;
  const description = `Input elements should be enclosed in a <form> element or an element with role="form" so that browsers and assistive technologies identify and expose the fields as part of a form.\\\\`;
  const helpText = `Enclose the input controls in a <form> element or assign role="form" to an element that contains the fields.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "non compliant form", content: `<div id="form1">
  <input type="text" />
  <input type="password" />
  <input type="submit" />
</div>
<div id="form2">
  <input type="text" />
  <input type="password" />
  <input type="submit" />
</div>` }
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

export default FormMismatchFailure;
