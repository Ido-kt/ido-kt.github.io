import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const PageMetaViewportValidFailure = () => {
  const ruleId = "page-meta-viewport-valid";
  const title = `Meta viewport should allow content scaling`;
  const description = `The meta viewport should allow scalability, typically with width=device-width, initial-scale=1, so text can be resized up to 200% without loss of functionality. Using user-scalable=no or maximum-scale=1 prevents users from enlarging content, making it difficult for people with low vision to read or interact.`;
  const helpText = `Set content="width=device-width, initial-scale=1" on the meta viewport element and avoid values like user-scalable=no or maximum-scale=1 to preserve zoom and text scaling.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "meta no content", content: `<html>
<head>
    <meta name="viewport" >
</head>
<body>
</body>
</html>` },
  { filename: "meta viewport content is empty string", content: `<html>
  <head>
    <!-- mobile viewport meta tab -->
    <meta name="viewport" content="" />
  </head>
  <body></body>
</html>` },
  { filename: "meta viewport content with maximum scale less than 2", content: `<html>
  <head>
    <!-- mobile viewport meta tab -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.5" />
  </head>
  <body></body>
</html>` },
  { filename: "meta viewport content with user scalable no", content: `<html>
  <head>
    <!-- mobile viewport meta tab -->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  </head>
  <body></body>
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

export default PageMetaViewportValidFailure;
