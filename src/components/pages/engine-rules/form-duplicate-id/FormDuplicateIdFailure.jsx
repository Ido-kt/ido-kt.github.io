import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const FormDuplicateIdFailure = () => {
  const ruleId = "form-duplicate-id";
  const title = `Forms and form fields must have unique ID attributes`;
  const description = `Screen readers rely on ID attributes to be unique in order to announce to the users the correct content. If IDs are not unique, screen readers won't know which element is the correct one.`;
  const helpText = `Change the ID of the duplicate fields and forms so they are unique.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "duplicate ids form and fields", content: `<form id="form">
  <input id="form" type="text" />
  <input type="password" />
  <button>submit</button>
</form>` },
  { filename: "duplicate ids in form fields", content: `<form>
  <input id="name" type="text" />
  <input id="name" type="password" />
  <button>Not a submit button</button>
</form>` },
  { filename: "duplicate ids in forms", content: `<form id="form">
  <input type="text" />
  <input type="password" />
  <button>submit</button>
</form>

<form id="form">
  <input type="text" />
  <input type="number" />
  <button>clear</button>
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

export default FormDuplicateIdFailure;
