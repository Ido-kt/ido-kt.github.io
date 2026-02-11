import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const StrongMismatchFailure = () => {
  const ruleId = "strong-mismatch";
  const title = `Strong should be tagged properly for assistive technology`;
  const description = `Elements with strong importance should have the strong role. If not, screen reader users may not understand the importance of the text.`;
  const helpText = `Add role=strong to the elements that are perceived as strong importance.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "b has direct text no element children", content: `<p style="margin-left: 20px">I would like to be notified by <b>email</b>, not other forms of communication.</p>` },
  { filename: "has direct text no element children font weight equal to 700", content: `<p style="margin-left: 20px">I would like to be notified by <span style="font-weight: 700">email</span>, not other forms of communication.</p>` },
  { filename: "has direct text no element children font weight greater than 700", content: `<p style="margin-left: 20px">I would like to be notified by <span style="font-weight: 900">email</span>, not other forms of communication.</p>` }
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

export default StrongMismatchFailure;
