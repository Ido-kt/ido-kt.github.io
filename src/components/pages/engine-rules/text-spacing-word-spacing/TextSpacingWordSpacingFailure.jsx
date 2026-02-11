import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TextSpacingWordSpacingFailure = () => {
  const ruleId = "text-spacing-word-spacing";
  const title = `Text spacing - word spacing`;
  const description = `Word spacing to at least 0.16 times the font size`;
  const helpText = `Increase the word spacing to at least 0.16 times the font size.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "font size to word spacing ratio of 0.1 nested element", content: `<div style="font-size:10px;" ><span style="word-spacing: 1px;">Some content</span></div>` },
  { filename: "font size to word spacing ratio of 0.1", content: `<div style="font-size:10px;word-spacing: 1px;" > Some content</div>` }
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

export default TextSpacingWordSpacingFailure;
