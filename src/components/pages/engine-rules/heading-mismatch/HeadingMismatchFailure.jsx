import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingMismatchFailure = () => {
  const ruleId = "heading-mismatch";
  const title = `Headings should be tagged for assistive technology`;
  const description = `Text that visually functions as a heading for sighted users should also be tagged as a heading for screen reader users.`;
  const helpText = `If you specifically coded headings without native HTML tags (like h1, h2, etc.) for SEO reasons or otherwise, use role="heading" and aria-level="1/2/3/4/5/6" (the appropriate heading level) to make sure that screen readers announce them as headings. For example, role="heading" aria-level="3" will be treated by screen readers as a h3 heading. Alternatively, you can directly code those elements as native HTML headings.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "perceivable heading no role heading", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
      }
      .text-xl {
        font-size: 20px;
        font-weight: 400;
      }
    </style>

    <div class="text-xl">Big Heading</div>
    <p>Regular body text</p>
  </body>
</html>` }
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

export default HeadingMismatchFailure;
