import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HeadingLengthySuccess = () => {
  const ruleId = "heading-lengthy";
  const title = `Heading should be concise`;
  const description = `The main heading of the document should be concise and descriptive. It should not be too lengthy (less than 160 chars).`;
  const helpText = `Add a <h1> element to define the main heading of the document.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "h1 with less than 160 chars", content: `<h1>As twilight embraces the horizon, a lone figure stands atop a hill, gazing at the stars, contemplating the mysteries of the universe and our place in</h1>` },
  { filename: "h1 with more than 160 chars due to double spaces and trimmable ends", content: `<h1>   As  twilight            embraces the horizon, a lone figure stands atop a hill, gazing at the stars, contemplating the mysteries of the universe and our place in</h1>` },
  { filename: "h4 with less than 160 chars", content: `<h4>As twilight embraces the horizon, a lone figure stands atop a hill, gazing at the stars, contemplating the mysteries of the universe and our place in</h4>` }
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

export default HeadingLengthySuccess;
