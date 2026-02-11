import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SvgDiscernibleFailure = () => {
  const ruleId = "svg-discernible";
  const title = `SVG discernible`;
  const description = `All SVGs that are not used in the context of button icons must have discernible text.`;
  const helpText = `Add a text alternative to the SVG.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "svg", content: `<svg style="width:100px;height:100px;" >
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>` }
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

export default SvgDiscernibleFailure;
