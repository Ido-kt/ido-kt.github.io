import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const PageMetaViewportFailure = () => {
  const ruleId = "had-meta-viewport";
  const title = `Page has a meta viewport`;
  const description = `Providing a meta viewport to control layout and scaling on mobile devices`;
  const helpText = `Add a meta viewport to the page`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page with no meta", content: `<html>
<head>
</head>
<body>
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

export default PageMetaViewportFailure;
