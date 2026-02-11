import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HtmlLangSuccess = () => {
  const ruleId = "html-lang";
  const title = `Default page language should be defined`;
  const description = `Specifying a default page language ensures screen readers apply the correct pronunciation rules, voices, and braille output. Without it, screen readers may guess the language incorrectly, causing mispronunciations, confusion, and reduced comprehension for users.`;
  const helpText = `Define the default language for the page by assigning a lang attribute to the html element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page with lang attribute", content: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page with lang attribute</title>
</head>
<body>
    <h1>Heading element</h1>
</body>
</html>` },
  { filename: "page with lang set from js api", content: `<!DOCTYPE html>
<html>
<head>
    <title>Page with lang set from JS API</title>
    <script>
        document.documentElement.lang = 'en';
    </script>
</head>
<body>
    <h1>Page with lang set from JS API</h1>
</body>
</html>` }
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

export default HtmlLangSuccess;
