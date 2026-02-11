import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LetterSpacingPositiveSuccess = () => {
  const ruleId = "letter-spacing-positive";
  const title = `Letter spacing should scale to at least 0.12 times the font size without loss of content or functionality`;
  const description = `When letter spacing is increased to 0.12 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed widths, fixed heights, hidden overflow, or forced no-wrap prevent proper reflow.`;
  const helpText = `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to ensure text remains readable when letter spacing is scaled to 0.12 times the font size.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "negative letter spacing", content: `<div style="font-size:12px;letter-spacing: -1px;" > Some content</div>` },
  { filename: "normal letter spacing", content: `<div style="font-size:12px;" ><span style="letter-spacing: normal;">Some content</span></div>` },
  { filename: "positive letter spacing", content: `<div style="font-size:12px;" ><span style="letter-spacing: 2px;">Some content</span></div>` }
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

export default LetterSpacingPositiveSuccess;
