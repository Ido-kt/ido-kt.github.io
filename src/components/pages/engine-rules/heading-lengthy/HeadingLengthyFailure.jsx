import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingLengthyFailure = () => {
  const ruleId = "heading-lengthy";
  const title = `Heading should be concise`;
  const description = `The main heading of the document should be concise and descriptive. It should not be too lengthy (less than 160 chars).`;
  const helpText = `Add a <h1> element to define the main heading of the document.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "h1 with more than 160 chars", content: `<h1>As twilight embraces the horizon, a lone figure stands atop a hill, gazing at the stars, contemplating the mysteries of the universe and our place in it. further away he goes.</h1>` },
  { filename: "h4 with more than 160 chars", content: `<h4>As twilight embraces the horizon, a lone figure stands atop a hill, gazing at the stars, contemplating the mysteries of the universe and our place in it. further away he goes.</h4>` }
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

export default HeadingLengthyFailure;
