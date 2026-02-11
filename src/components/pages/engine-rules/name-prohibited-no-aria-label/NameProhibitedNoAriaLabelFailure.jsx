import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NameProhibitedNoAriaLabelFailure = () => {
  const ruleId = "name-prohibited-no-aria-label";
  const title = `aria-label should be used with compatible roles`;
  const description = `Using aria-label on elements that do not support the attribute can lead to the label being ignored, leaving users without the intended information.`;
  const helpText = `Use a visually hidden element to provide the name or description instead of an aria-label.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "caption", content: `<div role="caption" aria-label="caption label">some caption</div>` },
  { filename: "code", content: `<div role="code" aria-label="code label">some code</div>` },
  { filename: "definition", content: `<div role="definition" aria-label="definition label">a definition</div>` },
  { filename: "deletion", content: `<div role="deletion" aria-label="deletion label">a deleted text</div>` },
  { filename: "emphasis", content: `<div role="emphasis" aria-label="emphasis label">an emphasized text</div>` },
  { filename: "generic", content: `<div role="generic" aria-label="generic label">generic content</div>` },
  { filename: "insertion", content: `<div role="insertion" aria-label="insertion label">an inserted text</div>` },
  { filename: "mark", content: `<div role="mark" aria-label="mark label">a marked text</div>` },
  { filename: "none", content: `<div role="none" aria-label="none label">no particular role</div>` },
  { filename: "paragraph", content: `<div role="paragraph" aria-label="paragraph label">a paragraph of text</div>` },
  { filename: "strong", content: `<div role="strong" aria-label="strong label">a strong text</div>` },
  { filename: "subscript", content: `<div role="subscript" aria-label="subscript label">a subscript text</div>` },
  { filename: "suggestion", content: `<div role="suggestion" aria-label="suggestion label">a suggestion</div>` },
  { filename: "superscript", content: `<div role="superscript" aria-label="superscript label">a superscript text</div>` },
  { filename: "term", content: `<div role="term" aria-label="term label">a term</div>` },
  { filename: "time", content: `<div role="time" aria-label="time label">a time-related text</div>` }
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

export default NameProhibitedNoAriaLabelFailure;
