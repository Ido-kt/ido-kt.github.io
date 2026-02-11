import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkContextSuccess = () => {
  const ruleId = "link-context";
  const title = `Links should indicate their functionality and destination to assistive technology`;
  const description = `Visual cues on pages provide context to links or hint functionality to users with sight, even if the links aren't fully descriptive. Screen reader users need to know where a link will take them based on the anchor text without additional context.`;
  const helpText = `Examples include links to the shopping cart, to the company's Facebook page, to the site's search page, or to other similar destinations. If the link's anchor text doesn't explicitly describe those destinations, add screen-reader only text describing the destination`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "a with ambiguous text", content: `<a href="/home">Click here</a>` },
  { filename: "a with long text", content: `<a href="/home"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tenetur exercitationem, commodi sequi nisi ab, dolorem adipisci hic in repudiandae enim iste repellendus, est voluptates tempore quibusdam neque doloremque accusamus! By the way this leads home. </a>` },
  { filename: "a with no text with aria label", content: `<a href="/home" aria-label="Going home"></a>` },
  { filename: "a with no text with icon with alt", content: `<a href="/home"><img alt="Home link image" /></a>` },
  { filename: "a with text", content: `<a href="/home">Home</a>` }
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

export default LinkContextSuccess;
