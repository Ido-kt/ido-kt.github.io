import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkHomepageWarningFailure = () => {
  const ruleId = "link-homepage-warning";
  const title = `Links that redirect to the homepage shouldn't do so without warning the user`;
  const description = `Standalone redirection links to the homepage can unexpectedly shift the user's context by redirecting them to the homepage. They should therefore display a clear warning so that the user is informed before proceeding`;
  const helpText = `Include a clear warning that will be visible for screen-readers, indicating that clicking the link will redirect the user to the homepage`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "link homepage without warning", content: `<p>
  <a href="/" id="homepage-link">link to page...</a>
</p>` }
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

export default LinkHomepageWarningFailure;
