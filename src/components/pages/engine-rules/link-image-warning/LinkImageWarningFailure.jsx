import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkImageWarningFailure = () => {
  const ruleId = "link-image-warning";
  const title = `Links that open an image shouldn't do so without warning the user`;
  const description = `Standalone image links can unexpectedly shift the user's context by redirecting them to an image. They should therefore display a clear warning so that the user is informed before proceeding`;
  const helpText = `Include a clear warning that will be visible for screen-readers, indicating that clicking the link will open an image.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "link image without warning", content: `<p>
  <a href="https://example.com/image.png" id="image-link">View Image</a>
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

export default LinkImageWarningFailure;
