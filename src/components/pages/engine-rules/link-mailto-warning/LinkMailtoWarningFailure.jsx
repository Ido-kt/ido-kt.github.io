import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkMailtoWarningFailure = () => {
  const ruleId = "link-mailto-warning";
  const title = `Warning a user when a link triggers a mail application is recommended`;
  const description = `It's good practice to warn users about the expected behavior when activating a link triggers a mail application.`;
  const helpText = `Add a visibly hidden text element that contains 'Opens mail application'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "link mailto without warning", content: `<p>
  <a href="mailto:someone@example.com" id="email-link">Send email</a>
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

export default LinkMailtoWarningFailure;
