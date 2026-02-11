import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkContextFailure = () => {
  const ruleId = "link-context";
  const title = `Links should indicate their functionality and destination to assistive technology`;
  const description = `Visual cues on pages provide context to links or hint functionality to users with sight, even if the links aren't fully descriptive. Screen reader users need to know where a link will take them based on the anchor text without additional context.`;
  const helpText = `Examples include links to the shopping cart, to the company's Facebook page, to the site's search page, or to other similar destinations. If the link's anchor text doesn't explicitly describe those destinations, add screen-reader only text describing the destination`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "a with icon but no text", content: `<a href="/home"><img src="/icon-home.png" /></a>` },
  { filename: "a with only numeric content", content: `<a href="/home" aria-label="123 12">1234 5</a>` },
  { filename: "a with only symbols content", content: `<a href="/home" aria-label="---">?!?!?!</a>` },
  { filename: "a with too short text", content: `<a href="/home">Go</a>` },
  { filename: "a without any text", content: `<a href="/home"></a>` }
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

export default LinkContextFailure;
