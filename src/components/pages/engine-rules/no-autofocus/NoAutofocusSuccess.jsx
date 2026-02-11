import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NoAutofocusSuccess = () => {
  const ruleId = "no-autofocus";
  const title = `Avoid using autofocus`;
  const description = `Make sure that no element has an autofocus attribute.`;
  const helpText = `Remove the autofocus attribute from the element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "button no auto focus", content: `<label for="my-button">Clickable Download Link</label>
<button id="my-button"></button>` },
  { filename: "div no auto focus", content: `<div id="my-div"></div>` },
  { filename: "svg with auto focus", content: `<svg autofocus></svg>` }
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

export default NoAutofocusSuccess;
