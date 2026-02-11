import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ToggleButtonMismatchSuccess = () => {
  const ruleId = "toggle-button-mismatch";
  const title = `Toggle buttons should expose their state to assistive technology`;
  const description = `When a toggle button fails to expose its pressed state, screen reader users cannot determine whether the control is active or inactive.`;
  const helpText = `Assign aria-pressed="true/false" to a native <button>, or an element with role="button". Make sure aria-pressed updates dynamically whenever the button is toggled.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "native toggle button with aria pressed attribute", content: `<button aria-pressed="false">Off</button>` },
  { filename: "toggle button with aria pressed attribute", content: `<div aria-pressed="false" role="button" style="cursor: pointer">On</div>` }
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

export default ToggleButtonMismatchSuccess;
