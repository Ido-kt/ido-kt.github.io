import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const PageMetaDescriptionSuccess = () => {
  const ruleId = "page-meta-description";
  const title = `Page has a meta description`;
  const description = `Page has a meta description`;
  const helpText = `Add meta description to the page`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page with meta description", content: `<html>
<head>
    <!-- mobile viewport meta tab -->
    <meta name="description" content="some description here" />
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

export default PageMetaDescriptionSuccess;
