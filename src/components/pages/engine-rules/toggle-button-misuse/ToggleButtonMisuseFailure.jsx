import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ToggleButtonMisuseFailure = () => {
  const ruleId = "toggle-button-misuse";
  const title = `Only elements that function as toggle buttons should be assigned the aria-pressed attribute`;
  const description = `The aria-pressed attribute is only announced by assistive technology when applied to button elements, including custom toggle controls with role="button". If it is used on elements with other roles, the attribute is ignored, leaving users unaware of any intended pressed or unpressed state.`;
  const helpText = `Remove the aria-pressed attribute from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button toggle  no toggle context", content: `<button aria-pressed="true">123</button>` }
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

export default ToggleButtonMisuseFailure;
