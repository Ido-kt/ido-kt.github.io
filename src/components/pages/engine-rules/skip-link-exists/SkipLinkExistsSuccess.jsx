import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const SkipLinkExistsSuccess = () => {
  const ruleId = "skip-link-exists";
  const title = `Skip links are the preferred technique for bypassing repeated content`;
  const description = `Skip links let keyboard and screen reader users bypass repetitive navigation and jump directly to important sections such as main content, navigation, or footer. This improves efficiency, reduces keystrokes, and makes pages easier to use for those relying on assistive technology.`;
  const helpText = `Add skip links as the first focusable elements on the page, directing users to regions marked with unique ids and appropriate landmarks such as <main>, <nav>, or <footer>. Keep them visually hidden until focused so they don’t clutter the layout, but ensure they remain accessible to screen readers by avoiding aria-hidden="true" or CSS display:none.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page with skip link", content: `<head>
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
</body>` }
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

export default SkipLinkExistsSuccess;
