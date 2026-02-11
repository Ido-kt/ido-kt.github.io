import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const StrongMismatchSuccess = () => {
  const ruleId = "strong-mismatch";
  const title = `Strong should be tagged properly for assistive technology`;
  const description = `Elements with strong importance should have the strong role. If not, screen reader users may not understand the importance of the text.`;
  const helpText = `Add role=strong to the elements that are perceived as strong importance.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "button has direct text no element children font weight equal to 700", content: `<p style="margin-left: 20px">I would like to be notified by <button style="font-weight: 700">email</button>, not other forms of communication.</p>` },
  { filename: "not perceivable strong", content: `<p style="margin-left: 20px">I would like to be notified by <span style="font-weight: 400">email</span>, not other forms of communication.</p>` },
  { filename: "role strong has direct text no element children font weight equal to 700", content: `<p style="margin-left: 20px">I would like to be notified by <span role="strong" style="font-weight: 700">email</span>, not other forms of communication.</p>` },
  { filename: "role strong has direct text no element children font weight greater than 700", content: `<p style="margin-left: 20px">I would like to be notified by <span role="strong" style="font-weight: 900">email</span>, not other forms of communication.</p>` },
  { filename: "strong has direct text no element children font weight equal to 700", content: `<p style="margin-left: 20px">I would like to be notified by <strong style="font-weight: 700">email</strong>, not other forms of communication.</p>` },
  { filename: "strong has direct text no element children font weight greater than 700", content: `<p style="margin-left: 20px">I would like to be notified by <strong style="font-weight: 900">email</strong>, not other forms of communication.</p>` }
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

export default StrongMismatchSuccess;
