import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ToggleButtonMismatchFailure = () => {
  const ruleId = "toggle-button-mismatch";
  const title = `Toggle buttons should expose their state to assistive technology`;
  const description = `When a toggle button fails to expose its pressed state, screen reader users cannot determine whether the control is active or inactive.`;
  const helpText = `Assign aria-pressed="true/false" to a native <button>, or an element with role="button". Make sure aria-pressed updates dynamically whenever the button is toggled.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button toggle context  no aria pressed", content: `<button>Off</button>` },
  { filename: "toggle button without aria pressed attr", content: `<div role="button" style="cursor: pointer">On</div>` }
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

export default ToggleButtonMismatchFailure;
