import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const EmphasisMismatchFailure = () => {
  const ruleId = "emphasis-mismatch";
  const title = `Emphasis should be tagged properly for assistive technology`;
  const description = `Elements with emphasis importance should have the emphasis role. If not, screen reader users may not understand the emphasis of the text.`;
  const helpText = `Add role=emphasis to the elements that are perceived as emphasis importance.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "has direct text no element children font style italic", content: `<p style="margin-left: 20px">His favorite book is <span style="font-style: italic">The Grapes of Wrath</span>.</p>` },
  { filename: "i has direct text no element children", content: `<p style="margin-left: 20px">His favorite book is <i>The Grapes of Wrath</i>.</p>` }
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

export default EmphasisMismatchFailure;
