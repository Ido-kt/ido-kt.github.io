import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HeadingMismatchSuccess = () => {
  const ruleId = "heading-mismatch";
  const title = `Headings should be tagged for assistive technology`;
  const description = `Text that visually functions as a heading for sighted users should also be tagged as a heading for screen reader users.`;
  const helpText = `If you specifically coded headings without native HTML tags (like h1, h2, etc.) for SEO reasons or otherwise, use role="heading" and aria-level="1/2/3/4/5/6" (the appropriate heading level) to make sure that screen readers announce them as headings. For example, role="heading" aria-level="3" will be treated by screen readers as a h3 heading. Alternatively, you can directly code those elements as native HTML headings.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "h1 sr only", content: `<style>
    body {
        font-size: 16px;
        font-weight: 400;
    }
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

<h1 class="sr-only">Heading element</h1>` },
  { filename: "native html headers", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
    <h2>Regular H2 Heading</h2>
    <h3>Regular H3 Heading</h3>
    <h4>Regular H4 Heading</h4>
    <h5>Regular H5 Heading</h5>
    <h6>Regular H6 Heading</h6>
  </body>
</html>` },
  { filename: "no perceivable heading too long", content: `<!DOCTYPE html>
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
      .too-long {
        font-size: 22px;
        font-weight: 500;
      }
    </style>

    <div class="too-long">This heading text is intentionally longer than sixty characters to test the limit.</div>
  </body>
</html>` },
  { filename: "no perceivable heading too small", content: `<!DOCTYPE html>
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
      .too-small {
        font-size: 14px; /* Smaller than the base size */
        font-weight: 500;
      }
    </style>

    <div class="too-small">Text with too small font</div>
  </body>
</html>` },
  { filename: "perceivable heading has role heading and aria level", content: `<!DOCTYPE html>
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
    <div class="text-xl" role="heading" aria-level="1">Big Heading</div>
    <p>Regular body text</p>
  </body>
</html>` },
  { filename: "perceivable heading has role heading but no aria level", content: `<!DOCTYPE html>
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

    <div class="text-xl" role="heading">Big Heading</div>
    <p>Regular body text</p>
  </body>
</html>` },
  { filename: "perceivable heading with native header tag", content: `<!DOCTYPE html>
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
    <h4 class="text-xl">Big Heading</h4>
    <p>Regular body text</p>
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

export default HeadingMismatchSuccess;
