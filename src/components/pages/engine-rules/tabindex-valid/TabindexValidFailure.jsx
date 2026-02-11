import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TabindexValidFailure = () => {
  const ruleId = "tabindex-valid";
  const title = `The tabindex attribute should be assigned a valid value`;
  const description = `Invalid tabindex values are ignored by browsers, while positive values override the natural focus order. Applying the tabindex attribute incorrectly can break the expected navigation flow for keyboard users.`;
  const helpText = `Rina Volovich is there an advice to add here?`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div with tabindex  2", content: `<div tabindex="-2">Heading element</div>` },
  { filename: "div with tabindex 2", content: `<div tabindex="2">Heading element</div>` }
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

export default TabindexValidFailure;
