import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const VisibilityMisuseSuccess = () => {
  const ruleId = "visibility-misuse";
  const title = `Visibly hidden content should not be exposed to assistive technology`;
  const description = `When elements are visually hidden but still exposed to assistive technology, screen reader users may encounter content that should not be available in the current interface. This can obscure the current state of the page and lead to confusion about what information or controls are available.`;
  const helpText = `Use aria-hidden="true" to remove elements from the accessibility tree when they should not be exposed to assistive technology. Consider using CSS techniques, such as display:none or visibility:hidden when the content should be hidden from all users.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "div clipped content", content: `<!-- The element is inapplicable because it is detected as SR-Only -->

<div style="clip: rect(1px, 1px, 1px, 1px); position: absolute;">Hidden text</div>` },
  { filename: "div opacity 0 position absolute", content: `<!-- The element is inapplicable because it is detected as SR-Only -->

<div style="opacity: 0; position: absolute;">Hidden message</div>` },
  { filename: "div position absolute left negative 9999px", content: `<!-- The element is inapplicable because it is detected as SR-Only -->

<div style="position: absolute; left: -9999px">Visually hidden</div>` },
  { filename: "element with display none", content: `<div style="display: none">Some invisible content</div>` },
  { filename: "element with nested sr only element", content: `<html>
  <head>
    <style>
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    </style>
  </head>
  <body>
    <div><span class="sr-only">is being skipped</span></div>
  </body>
</html>` },
  { filename: "element with sr only content", content: `<html>
  <head>
    <style>
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    </style>
  </head>
  <body>
    <div>test<span class="sr-only">is being skipped</span></div>
  </body>
</html>` },
  { filename: "element with visibility hidden", content: `<html>
  <head> </head>
  <body>
    <div style="visibility: hidden">
      <span style="visibility: visible"> Some visible content </span>
    </div>
  </body>
</html>` },
  { filename: "empty div", content: `<div></div>` },
  { filename: "image with alt no src", content: `<button tabindex="-1" role="button" type="button" class="oke-media-link">
  <img alt="Customer-uploaded image, show more details" draggable="false" class="oke-media-image" style="opacity: 0" />
</button>` },
  { filename: "nested sr only element", content: `<a
  href="https://accessibe.com/blog/knowledgebase/screen-reader-guide"
  target="_blank"
  rel="noopener"
  data-acsb="sr-trigger"
  data-acsb-sr-only="true"
  class="acsb-sr-only"
  style="position: absolute; width: 200px; height: 1px; margin-top: -1px; z-index: -1; border: 0px; top: 0px; left: 0px; overflow: hidden; outline: 0px"
  data-custom-button-processed="true"
>
  Accessibility Screen-Reader Guide, Feedback, and Issue Reporting
  <span data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important"> | New Window</span>
</a>` },
  { filename: "out of screen with aria hidden", content: `<html>
  <head>
    <style>
      .out-of-screen {
        position: absolute;
        left: -9999px;
      }
    </style>
  </head>
  <body>
    <div class="out-of-screen" aria-hidden="true">Some invisible content</div>
  </body>
</html>` },
  { filename: "out of viewport element", content: `<html>
  <head>
    <style>
      .out-of-screen {
        position: absolute;
        left: -9999px;
      }
    </style>
  </head>
  <body>
    <!-- why is it detected as screen reader only?  -->
    <div class="out-of-screen">This text is still visible to screen reader</div>
  </body>
</html>` },
  { filename: "visible element in hidden element", content: `<div id="parent" style="height: 0.5px; width: 0.5px; overflow: hidden">
    <div id="child" style="position: fixed">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.83 3.296a2.452 2.452 0 0 1 2.339 0c.36.195.665.48.882.831l7.615 12.392a2.247 2.247 0 0 1 .002 2.35 2.347 2.347 0 0 1-.882.834c-.36.196-.763.297-1.17.297H4.384c-.408 0-.811-.101-1.17-.297a2.347 2.347 0 0 1-.883-.834 2.247 2.247 0 0 1 .002-2.35L9.95 4.127c.217-.351.523-.636.882-.831ZM12 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              fill="currentColor"
            ></path>
        </svg>
    </div>
</div>` },
  { filename: "zero opacity with aria hidden", content: `<html>
  <head> </head>
  <body>
    <div style="opacity: 0" aria-hidden="true">Some invisible content</div>
  </body>
</html>` }
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

export default VisibilityMisuseSuccess;
