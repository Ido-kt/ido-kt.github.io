import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ToggleButtonCorrectStateFailure = () => {
  const ruleId = "toggle-button-correct-state";
  const title = `The state of toggle buttons should be accurate`;
  const description = `If the exposed state of a toggle button is not accurate, screen reader users may not know whether it is active or inactive, leading to confusion and unintended actions.`;
  const helpText = `Make sure the value of aria-pressed represents the visible state of the control.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button toggle context  no aria pressed", content: `<button aria-pressed="">Off</button>` },
  { filename: "button toggle context  wrong aria pressed", content: `<button aria-pressed="true">Off</button>` }
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

export default ToggleButtonCorrectStateFailure;
