import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TabbableVisibleFailure = () => {
  const ruleId = "tabbable-visible";
  const title = `Use tabindex attribute correctly to manage docus for custom interactive elements`;
  const description = `When interactive elements remain focusable while they are visually hidden, keyboard users may encounter controls that they cannot see and that should not be available in the current interface.`;
  const helpText = `Apply tabindex="0" to custom interactive elements so they follow the natural tab sequence, and tabindex="-1" when an element should only be reachable programmatically. Avoid positive numbers such as tabindex="1" or higher, do not use invalid values such as letters or decimals, and ensure tabindex is not applied to static elements.Use tabindex="-1" to remove elements from the tab order when they are offscreen. Consider using CSS techniques, such as display:none or visibility:hidden when content should be hidden from all users.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "hidden dimensions tabbable element", content: `<div style="height: 1px; width: 1px; overflow: hidden;">
  <input type="text" />
  <button>Click</button>
</div>` },
  { filename: "no content tabbable", content: `<div tabindex="0">
  <span></span>
</div>` },
  { filename: "opacity zero tabbable element", content: `<div style="opacity: 0">
  <input type="text" />
  <button>Click</button>
</div>` },
  { filename: "out of viewport tabbable element", content: `<div style="position: absolute; left: -500px;">
  <input type="text" />
</div>` }
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

export default TabbableVisibleFailure;
