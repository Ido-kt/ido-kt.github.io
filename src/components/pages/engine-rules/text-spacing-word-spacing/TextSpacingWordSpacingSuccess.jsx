import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TextSpacingWordSpacingSuccess = () => {
  const ruleId = "text-spacing-word-spacing";
  const title = `Text spacing - word spacing`;
  const description = `Word spacing to at least 0.16 times the font size`;
  const helpText = `Increase the word spacing to at least 0.16 times the font size.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "font size to word spacing ratio of 0.2 nested element", content: `<div style="font-size:20px;" ><span style="word-spacing: 4px;">Some content</span></div>` },
  { filename: "font size to word spacing ratio of 0.2", content: `<div style="font-size:20px;word-spacing: 4px;" > Some content</div>` }
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

export default TextSpacingWordSpacingSuccess;
