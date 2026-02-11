import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkNewWindowWarningSuccess = () => {
  const ruleId = "link-new-window-warning";
  const title = `Warning a user when a link triggers a new browser window is recommended`;
  const description = `It's good practice to warn users about the expected behavior when activating a link triggers a new window.`;
  const helpText = `Add a visibly hidden text element that contains 'Opens new window'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "link with target blank aria label with new window", content: `<a href="path/to/page" target="_blank" aria-label="link to new window">link to somewhere</a>` },
  { filename: "link with target blank content with hebrew new window", content: `<html lang="he">
    <a href="path/to/page" target="_blank">לינק לחלון חדש</a>
</html>` },
  { filename: "link with target blank content with new tab", content: `<a href="path/to/page" target="_blank">link to new tab</a>` },
  { filename: "link with target blank content with new window", content: `<a href="path/to/page" target="_blank">link to new Window</a>` },
  { filename: "link with target blank content with separate tab", content: `<a href="path/to/page" target="_blank">link to separate tab</a>` },
  { filename: "link with target blank content with separate window", content: `<a href="path/to/page" target="_blank">link to separate tab</a>` },
  { filename: "link with target self", content: `<a href="path/to/page" target="_self">link to somewhere</a>` }
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

export default LinkNewWindowWarningSuccess;
