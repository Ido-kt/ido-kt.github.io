import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ButtonMismatchFailure = () => {
  const ruleId = "button-mismatch";
  const title = `Buttons should be tagged for assistive technology`;
  const description = `If interactive elements cannot be identified as buttons, screen reader users may not realize the element is actionable, which can stop them from submitting forms, opening dialogs, or performing other intended actions.`;
  const helpText = `Add role="button" to the custom navigation region, or use a HTML <button> element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button like link href javascript", content: `<a href="javascript: console.log()"></a>` },
  { filename: "link with role button", content: `<a href="#anchor" role="button"></a>` }
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

export default ButtonMismatchFailure;
