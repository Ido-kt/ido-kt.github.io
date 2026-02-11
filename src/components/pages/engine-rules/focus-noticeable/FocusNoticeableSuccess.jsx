import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const FocusNoticeableSuccess = () => {
  const ruleId = "focus-noticeable";
  const title = `Focusable elements should have a visible focus indicator`;
  const description = `All focusable elements must have a visible focus indicator when they receive keyboard focus.`;
  const helpText = `Add a CSS outline or other visual indicator to focusable elements to ensure the currently focused element can be visibly distinguished.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "simple anchor", content: `<a id="test-subject" href="#info">info</a>
<div id="info">Some Info</div>` },
  { filename: "simple button", content: `<button id="test-subject">Test Button</button>` },
  { filename: "simple div", content: `<div id="test-subject"><span>some text</span></div>` },
  { filename: "simple input", content: `<input id="test-subject" placeholder="test input" />
<label for="test-subject">test label</label>` }
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

export default FocusNoticeableSuccess;
