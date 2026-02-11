import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NoAutofocusFailure = () => {
  const ruleId = "no-autofocus";
  const title = `Avoid using autofocus`;
  const description = `Make sure that no element has an autofocus attribute.`;
  const helpText = `Remove the autofocus attribute from the element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button with auto focus", content: `<button autofocus></button>` },
  { filename: "div with auto focus", content: `<div autofocus></div>` }
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

export default NoAutofocusFailure;
