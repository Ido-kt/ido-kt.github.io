import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const PageTitleValidFailure = () => {
  const ruleId = "page-title-valid";
  const title = `Page title should be descriptive`;
  const description = `Providing a descriptive title helps users understand the content of the page.`;
  const helpText = `Add a \\`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page title one word", content: `<html>
<head>
    <title>ONEWORD</title>
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

export default PageTitleValidFailure;
