import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TextSpacingLineHeightFailure = () => {
  const ruleId = "text-spacing-line-height";
  const title = `Line height should scale to at least 1.5 times the font size without loss of content or functionality`;
  const description = `When line height is increased to 1.5 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed heights, fixed widths, hidden overflow, or absolute positioning prevent proper reflow`;
  const helpText = `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to make sure content remains readable when line spacing is scaled to 1.5 times the font size.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "font size to line height ratio of 1 nested element", content: `<div style="font-size:13px;" ><span style="line-height: 1;">Some content</span></div>` },
  { filename: "font size to line height ratio of 1", content: `<div style="font-size:13px;line-height: 1;" > Some content</div>` }
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

export default TextSpacingLineHeightFailure;
