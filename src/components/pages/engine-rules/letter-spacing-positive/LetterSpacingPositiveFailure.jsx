import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LetterSpacingPositiveFailure = () => {
  const ruleId = "letter-spacing-positive";
  const title = `Letter spacing should scale to at least 0.12 times the font size without loss of content or functionality`;
  const description = `When letter spacing is increased to 0.12 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed widths, fixed heights, hidden overflow, or forced no-wrap prevent proper reflow.`;
  const helpText = `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to ensure text remains readable when letter spacing is scaled to 0.12 times the font size.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "lower than minus one", content: `<div style="font-size:13px;letter-spacing: -1.5px;" > Some content</div>` },
  { filename: "nested lower than minus one", content: `<div style="font-size:13px;" ><span style="letter-spacing: -1.1px;">Some content</span></div>` }
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

export default LetterSpacingPositiveFailure;
