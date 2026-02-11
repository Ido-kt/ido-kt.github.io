import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const PageTitleSuccess = () => {
  const ruleId = "page-title";
  const title = `Page should have a title`;
  const description = `Screen readers rely heavily on page titles to announce the purpose of a page. If titles aren’t descriptive, users with low or no vision may not understand the context until they start navigating the page.`;
  const helpText = `Make sure the title element inside the <head> is unique and describes the purpose of the page.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page empty title", content: `<html>
<head>
    <title></title>
</head>
<body>
</body>
</html>` },
  { filename: "page title element", content: `<html>
<head>
    <title>Page Title</title>
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

export default PageTitleSuccess;
