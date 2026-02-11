import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const InputDiscernibleFailure = () => {
  const ruleId = "input-discernible";
  const title = `Inputs must include a descriptive label`;
  const description = `Screen readers rely on correctly coded and associated labels to announce the purpose of a form field. If a label isn't properly associated with its input field, screen reader users won't know the expected input.`;
  const helpText = `Provide a <label> element and associate it with the <input> using the for and id attributes. Alternatively, you can assign an aria-label attribute directly to the <input> element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "input with described by element", content: `<input type="text" aria-label="Username" aria-describedby="username" />
<label id="username">Username</label>` },
  { filename: "input without label", content: `<input type="text" id="username" aria-label="Username" />` },
  { filename: "select without label", content: `<select id="username" aria-label="Username"></select>` },
  { filename: "textarea without label", content: `<textarea id="username" aria-label="Username"></textarea>` }
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

export default InputDiscernibleFailure;
