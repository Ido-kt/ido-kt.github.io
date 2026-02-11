import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const PageMetaViewportSuccess = () => {
  const ruleId = "had-meta-viewport";
  const title = `Page has a meta viewport`;
  const description = `Providing a meta viewport to control layout and scaling on mobile devices`;
  const helpText = `Add a meta viewport to the page`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page with meta", content: `<html>
<head>
    <!-- mobile viewport meta tab -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
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

export default PageMetaViewportSuccess;
