import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TabbableVisibleSuccess = () => {
  const ruleId = "tabbable-visible";
  const title = `Use tabindex attribute correctly to manage docus for custom interactive elements`;
  const description = `When interactive elements remain focusable while they are visually hidden, keyboard users may encounter controls that they cannot see and that should not be available in the current interface.`;
  const helpText = `Apply tabindex="0" to custom interactive elements so they follow the natural tab sequence, and tabindex="-1" when an element should only be reachable programmatically. Avoid positive numbers such as tabindex="1" or higher, do not use invalid values such as letters or decimals, and ensure tabindex is not applied to static elements.Use tabindex="-1" to remove elements from the tab order when they are offscreen. Consider using CSS techniques, such as display:none or visibility:hidden when content should be hidden from all users.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "element negative tabindex", content: `<!-- none of them is tabbable so passedNodes and failedNodes arrays stay empty -->
<div style="opacity: 0">
  <input tabindex="-1" type="text" />
  <button tabindex="-1">Click</button>
</div>` },
  { filename: "overflow dimensions nested tabbable element", content: `<div style="height: 1px; width: 1px; overflow: visible;">
  <button>Click</button>
</div>` },
  { filename: "skip link", content: `<head>
  <style>
    .skip-link {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    .skip-link:focus {
      position: static;
      width: auto;
      height: auto;
    }
  </style>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <main id="main"></main>
</body>` },
  { filename: "visible tabbable element", content: `<input type="text" id="username" aria-label="Username" />` }
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

export default TabbableVisibleSuccess;
