import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkNewWindowWarningFailure = () => {
  const ruleId = "link-new-window-warning";
  const title = `Warning a user when a link triggers a new browser window is recommended`;
  const description = `It's good practice to warn users about the expected behavior when activating a link triggers a new window.`;
  const helpText = `Add a visibly hidden text element that contains 'Opens new window'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "link blank no new window in content", content: `<a href="path/to/page" target="_blank">Link to somewhere</a>` },
  { filename: "link with no content", content: `<a href="path/to/page" target="_blank"></a>` }
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

export default LinkNewWindowWarningFailure;
