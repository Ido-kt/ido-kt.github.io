import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TabbableNonInteractiveFailure = () => {
  const ruleId = "tabbable-non-interactive";
  const title = `Non-interactive elements should not be keyboard navigable`;
  const description = `Allowing static content to receive keyboard focus creates unnecessary stops in the tab order, forcing users to tab through elements that provide no action and making keyboard navigation less intuitive.`;
  const helpText = `Remove the tabindex attribute from the static element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "non interactive element with tabindex", content: `<div tabindex="0">
  <span>Not Interactive</span>
</div>` }
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

export default TabbableNonInteractiveFailure;
