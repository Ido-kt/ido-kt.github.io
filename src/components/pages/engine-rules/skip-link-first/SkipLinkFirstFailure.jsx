import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SkipLinkFirstFailure = () => {
  const ruleId = "skip-link-first";
  const title = `Skip links should be the first elements on a page`;
  const description = `Skip links should be placed at the very beginning of the page so they are encountered first by keyboard and screen reader users. This lets users quickly bypass repeated navigation and move directly to important regions such as the main content, navigation, or footer.`;
  const helpText = `Place skip links at the very start of the page HTML.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "a skip link after a tabbable", content: `<head>
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
  <main id="main" tabindex="0"></main>
  <a href="#main" class="skip-link">Skip to main content</a>
</body>` },
  { filename: "multi skip links with one skip link after tabbable", content: `<head>
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
  <a href="#first" class="skip-link">Skip to main content</a>
  <a href="#second" class="skip-link">Skip to main content</a>
  <a href="#third" class="skip-link">Skip to main content</a>
  <section id="first" tabindex="0"></section>
  <section id="second" tabindex="0"></section>
  <!-- One of the skip-links is appearing after a non-skip-link tabbable -->
  <a href="#fourth" class="skip-link">Skip to main content</a>
  <section id="third" tabindex="0"></section>
  <section id="fourth" tabindex="0"></section>
</body>` }
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

export default SkipLinkFirstFailure;
