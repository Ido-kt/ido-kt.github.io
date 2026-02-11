import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingMisuseFailure = () => {
  const ruleId = "heading-misuse";
  const title = `Only elements that function as headings should be tagged as heading`;
  const description = `Accurate tagging allows screen readers to present content in a logical structure. Misidentifying an element as a heading disrupts navigation, creating confusion about the importance of content and page hierarchy.`;
  const helpText = `Remove ARIA heading attributes from the failing element, or if the element is marked up using a native HTML tag, update the role according to the function of the element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "font size too small", content: `<!DOCTYPE html>
<html lang="en">
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

    <div role="heading" aria-level="1" class="too-small">Text with too small font</div>
  </body>
</html>` },
  { filename: "insufficient font weight and line height", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.2rem;
      }
      .insufficient-style {
        font-size: 20px; /* Larger than the base font size */
        font-weight: 400; /* Same weight as the base */
        line-height: 1.2rem; /* Same line height as the base */
      }
    </style>

    <h2 role="heading" class="insufficient-style">Heading with insufficient weight and line height</h2>
  </body>
</html>` },
  { filename: "no visible text", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1></h1>
  </body>
</html>` },
  { filename: "semantic headings", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>Regular H1 Heading</h1>
    <h2>Regular H2 Heading</h2>
    <h3>Regular H3 Heading</h3>
    <h4>Regular H4 Heading</h4>
    <h5>Regular H5 Heading</h5>
    <h6>Regular H6 Heading</h6>
  </body>
</html>` },
  { filename: "too long heading", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>This heading text is intentionally longer than sixty characters to test the limit.</h1>
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

export default HeadingMisuseFailure;
