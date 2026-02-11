import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TextSpacingLineHeightSuccess = () => {
  const ruleId = "text-spacing-line-height";
  const title = `Line height should scale to at least 1.5 times the font size without loss of content or functionality`;
  const description = `When line height is increased to 1.5 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed heights, fixed widths, hidden overflow, or absolute positioning prevent proper reflow`;
  const helpText = `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to make sure content remains readable when line spacing is scaled to 1.5 times the font size.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "font size to line height ratio of 1.5 nested element", content: `<div style="font-size:20px;" ><span style="line-height: 1.5;">Some content</span></div>` },
  { filename: "font size to line height ratio of 1.5", content: `<div style="font-size:20px;line-height: 1.5;" > Some content</div>` }
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

export default TextSpacingLineHeightSuccess;
