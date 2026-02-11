import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TabindexValidSuccess = () => {
  const ruleId = "tabindex-valid";
  const title = `The tabindex attribute should be assigned a valid value`;
  const description = `Invalid tabindex values are ignored by browsers, while positive values override the natural focus order. Applying the tabindex attribute incorrectly can break the expected navigation flow for keyboard users.`;
  const helpText = `Rina Volovich is there an advice to add here?`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "div with tabindex  1", content: `<div tabindex="-1">Heading element</div>` },
  { filename: "div with tabindex 0", content: `<div tabindex="0">Heading element</div>` },
  { filename: "svg with tabindex 6", content: `<svg xmlns="http://www.w3.org/2000/svg" tabindex="6">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>` }
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

export default TabindexValidSuccess;
