import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const SkipLinkFirstSuccess = () => {
  const ruleId = "skip-link-first";
  const title = `Skip links should be the first elements on a page`;
  const description = `Skip links should be placed at the very beginning of the page so they are encountered first by keyboard and screen reader users. This lets users quickly bypass repeated navigation and move directly to important regions such as the main content, navigation, or footer.`;
  const helpText = `Place skip links at the very start of the page HTML.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "multi skip links before tabbables", content: `<head>
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
  <div>
    <a class="skip-link" href="#main">Skip to main content</a>
    <a class="skip-link" href="#main-nav">Skip to main navigation</a>
    <a class="skip-link" href="#footer">Skip to footer</a>
  </div>
  <main id="main"></main>
</body>` },
  { filename: "page without skip links", content: `<main id="main"></main>` },
  { filename: "skip link as first element", content: `<head>
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

export default SkipLinkFirstSuccess;
