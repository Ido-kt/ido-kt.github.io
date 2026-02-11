import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TabbableNonInteractiveSuccess = () => {
  const ruleId = "tabbable-non-interactive";
  const title = `Non-interactive elements should not be keyboard navigable`;
  const description = `Allowing static content to receive keyboard focus creates unnecessary stops in the tab order, forcing users to tab through elements that provide no action and making keyboard navigation less intuitive.`;
  const helpText = `Remove the tabindex attribute from the static element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "input element without tabindex", content: `<body style="height: 100vh; width: 100vw">
  <input style="width: 150px; height: 100px" type="text" placeholder="enter your name" />
</body>` },
  { filename: "interactive element with tabindex", content: `<button>Click here</button>
<div role="button" onclick="alert('Hello, user!')" tabindex="0">or here</div>` },
  { filename: "interactive element without tabindex", content: `<span onclick="alert('Hello, user!')" style="cursor: pointer">Interactive but without tabindex - should not be included in the passedNodes array</span>` },
  { filename: "role button", content: `<body style="height: 100vh; width: 100vw">
  <div style="width: 150px; height: 100px" id="btn" role="button" class="no tabIndex - not tabbable">Click here</div>
</body>` },
  { filename: "role link", content: `<div role="link" tabindex="0" aria-label="Go to next page" onclick="location.href='next.html'">Next Page</div>` },
  { filename: "select element without tabindex", content: `<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>` },
  { filename: "text area element without tabindex", content: `<textarea placeholder="comment.."></textarea>` }
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

export default TabbableNonInteractiveSuccess;
