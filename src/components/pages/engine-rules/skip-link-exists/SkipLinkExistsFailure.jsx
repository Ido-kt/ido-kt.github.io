import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SkipLinkExistsFailure = () => {
  const ruleId = "skip-link-exists";
  const title = `Skip links are the preferred technique for bypassing repeated content`;
  const description = `Skip links let keyboard and screen reader users bypass repetitive navigation and jump directly to important sections such as main content, navigation, or footer. This improves efficiency, reduces keystrokes, and makes pages easier to use for those relying on assistive technology.`;
  const helpText = `Add skip links as the first focusable elements on the page, directing users to regions marked with unique ids and appropriate landmarks such as <main>, <nav>, or <footer>. Keep them visually hidden until focused so they don’t clutter the layout, but ensure they remain accessible to screen readers by avoiding aria-hidden="true" or CSS display:none.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page without skip link", content: `<main id="main"></main>` }
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

export default SkipLinkExistsFailure;
