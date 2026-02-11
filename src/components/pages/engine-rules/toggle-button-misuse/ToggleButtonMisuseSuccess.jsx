import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ToggleButtonMisuseSuccess = () => {
  const ruleId = "toggle-button-misuse";
  const title = `Only elements that function as toggle buttons should be assigned the aria-pressed attribute`;
  const description = `The aria-pressed attribute is only announced by assistive technology when applied to button elements, including custom toggle controls with role="button". If it is used on elements with other roles, the attribute is ignored, leaving users unaware of any intended pressed or unpressed state.`;
  const helpText = `Remove the aria-pressed attribute from the failing element.`;
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

export default ToggleButtonMisuseSuccess;
