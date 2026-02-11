import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const EmphasisMismatchSuccess = () => {
  const ruleId = "emphasis-mismatch";
  const title = `Emphasis should be tagged properly for assistive technology`;
  const description = `Elements with emphasis importance should have the emphasis role. If not, screen reader users may not understand the emphasis of the text.`;
  const helpText = `Add role=emphasis to the elements that are perceived as emphasis importance.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "button has direct text no element children font style italic", content: `<p style="margin-left: 20px">His favorite book is <button style="font-style: italic">The Grapes of Wrath</button>.</p>` },
  { filename: "em has direct text no element children font style italic", content: `<p style="margin-left: 20px">His favorite book is <em style="font-style: italic">The Grapes of Wrath</em>.</p>` },
  { filename: "not perceivable emphasis", content: `<p style="margin-left: 20px">His favorite book is <span style="font-style: normal">The Grapes of Wrath</span>.</p>` },
  { filename: "role emphasis has direct text no element children font style italic", content: `<p style="margin-left: 20px">His favorite book is <span role="emphasis" style="font-style: italic">The Grapes of Wrath</span>.</p>` }
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

export default EmphasisMismatchSuccess;
