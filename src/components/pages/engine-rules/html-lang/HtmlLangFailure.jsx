import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HtmlLangFailure = () => {
  const ruleId = "html-lang";
  const title = `Default page language should be defined`;
  const description = `Specifying a default page language ensures screen readers apply the correct pronunciation rules, voices, and braille output. Without it, screen readers may guess the language incorrectly, causing mispronunciations, confusion, and reduced comprehension for users.`;
  const helpText = `Define the default language for the page by assigning a lang attribute to the html element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page no lang attribute", content: `<!DOCTYPE html>
<html>
<head>
    <title>Page with no lang attribute</title>
</head>
<body>
    <h1>Heading element</h1>
</body>
</html>` }
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

export default HtmlLangFailure;
