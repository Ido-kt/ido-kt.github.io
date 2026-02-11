import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const PageTitleFailure = () => {
  const ruleId = "page-title";
  const title = `Page should have a title`;
  const description = `Screen readers rely heavily on page titles to announce the purpose of a page. If titles aren’t descriptive, users with low or no vision may not understand the context until they start navigating the page.`;
  const helpText = `Make sure the title element inside the <head> is unique and describes the purpose of the page.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page no title element", content: `<html>
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

export default PageTitleFailure;
