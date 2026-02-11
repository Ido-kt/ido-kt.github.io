import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const FocusNoticeableFailure = () => {
  const ruleId = "focus-noticeable";
  const title = `Focusable elements should have a visible focus indicator`;
  const description = `All focusable elements must have a visible focus indicator when they receive keyboard focus.`;
  const helpText = `Add a CSS outline or other visual indicator to focusable elements to ensure the currently focused element can be visibly distinguished.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "anchor with overridden outline", content: `<style>
  #test-subject:focus {
    outline: none;
  }
</style>
<a id="test-subject" href="#info">info</a>
<div id="info">Some Info</div>` },
  { filename: "button with overridden outline", content: `<style>
  #test-subject:focus {
    outline: none;
  }
</style>
<button id="test-subject">Click this</button>` },
  { filename: "div with tabindex with overridden outline", content: `<style>
  #test-subject:focus {
    outline: none;
  }
</style>
<div id="test-subject" tabindex="0">Content</div>` },
  { filename: "input with overridden outline", content: `<style>
  #test-subject:focus {
    outline: none;
  }
</style>
<input id="test-subject" placeholder="test input" />
<label for="test-subject">test label</label>` }
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

export default FocusNoticeableFailure;
