import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const PageMetaDescriptionFailure = () => {
  const ruleId = "page-meta-description";
  const title = `Page has a meta description`;
  const description = `Page has a meta description`;
  const helpText = `Add meta description to the page`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page no meta description", content: `<html>
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

export default PageMetaDescriptionFailure;
