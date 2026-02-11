import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const PageTitleValidSuccess = () => {
  const ruleId = "page-title-valid";
  const title = `Page title should be descriptive`;
  const description = `Providing a descriptive title helps users understand the content of the page.`;
  const helpText = `Add a \\`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page no title element", content: `<html>
<head>
</head>
<body>
</body>
</html>` },
  { filename: "page title element", content: `<html>
<head>
    <title>Descriptive Title</title>
</head>
<body>
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

export default PageTitleValidSuccess;
