import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ToggleButtonCorrectStateSuccess = () => {
  const ruleId = "toggle-button-correct-state";
  const title = `The state of toggle buttons should be accurate`;
  const description = `If the exposed state of a toggle button is not accurate, screen reader users may not know whether it is active or inactive, leading to confusion and unintended actions.`;
  const helpText = `Make sure the value of aria-pressed represents the visible state of the control.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "button toggle class context  aria pressed", content: `<button class="active" aria-pressed="true">ksmdfsd</button>` },
  { filename: "button toggle context  aria pressed", content: `<button aria-pressed="false">Off</button>` }
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

export default ToggleButtonCorrectStateSuccess;
