import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const PageMetaViewportValidSuccess = () => {
  const ruleId = "page-meta-viewport-valid";
  const title = `Meta viewport should allow content scaling`;
  const description = `The meta viewport should allow scalability, typically with width=device-width, initial-scale=1, so text can be resized up to 200% without loss of functionality. Using user-scalable=no or maximum-scale=1 prevents users from enlarging content, making it difficult for people with low vision to read or interact.`;
  const helpText = `Set content="width=device-width, initial-scale=1" on the meta viewport element and avoid values like user-scalable=no or maximum-scale=1 to preserve zoom and text scaling.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "meta viewport content with maximum scale equal to 2", content: `<html>
  <head>
    <!-- mobile viewport meta tab -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />
  </head>
  <body></body>
</html>` },
  { filename: "meta viewport content with maximum scale greater than 2", content: `<html>
  <head>
    <!-- mobile viewport meta tab -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3" />
  </head>
  <body></body>
</html>` },
  { filename: "meta with valid value", content: `<html>
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

export default PageMetaViewportValidSuccess;
