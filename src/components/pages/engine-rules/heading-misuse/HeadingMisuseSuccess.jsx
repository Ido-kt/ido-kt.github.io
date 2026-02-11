import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HeadingMisuseSuccess = () => {
  const ruleId = "heading-misuse";
  const title = `Only elements that function as headings should be tagged as heading`;
  const description = `Accurate tagging allows screen readers to present content in a logical structure. Misidentifying an element as a heading disrupts navigation, creating confusion about the importance of content and page hierarchy.`;
  const helpText = `Remove ARIA heading attributes from the failing element, or if the element is marked up using a native HTML tag, update the role according to the function of the element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "exact length heading", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>This heading text is exactly sixty characters long in total.</h1>
  </body>
</html>` },
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
  { filename: "heading with icon", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
      }
      .heading-with-svg {
        font-size: 20px;
        font-weight: 500;
      }
      .icon {
        width: 20px;
        height: 20px;
        display: inline-block;
      }
    </style>

    <div class="heading-with-svg" role="heading" aria-level="3">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="gray" />
      </svg>
      Heading with SVG Icon
    </div>
  </body>
</html>` },
  { filename: "large uppercase heading", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
      }
      div {
        font-size: 22px;
        font-weight: 600;
        text-transform: uppercase;
      }
    </style>

    <div role="heading" aria-level="5">THIS IS A VALID UPPERCASE HEADING</div>
  </body>
</html>` },
  { filename: "no compliant heading", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
      }
      .heading {
        font-size: 22px;
        font-weight: 600;
      }
    </style>

    <div class="heading">This heading text is exactly sixty characters long in total.</div>
  </body>
</html>` },
  { filename: "semantic headings", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <h3>Regular H3 Heading</h3>
    <h2 role="heading">Regular H2 Heading</h2>
    <h1>Regular H1 Heading</h1>
  </body>
</html>` },
  { filename: "slightly heavier font weight", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
      }
      .slightly-heavier {
        font-size: 18px; /* Larger than base */
        font-weight: 500; /* Heavier than base */
      }
    </style>

    <div role="heading" aria-level="3" class="slightly-heavier">Heading with Slightly Heavier Weight</div>
  </body>
</html>` },
  { filename: "slightly larger font heading", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
      }
      .slightly-larger {
        font-size: 17px;
        font-weight: 400;
      }
    </style>

    <div role="heading" aria-level="4" class="slightly-larger">Heading with Slightly Larger Font</div>
  </body>
</html>` },
  { filename: "slightly larger line height", content: `<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      body {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.2;
      }
      .larger-line-height {
        font-size: 18px; /* Larger than base */
        font-weight: 400;
        line-height: 1.5; /* Larger line height */
      }
    </style>

    <div role="heading" aria-level="2" class="larger-line-height">Heading with Larger Line Height</div>
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

export default HeadingMisuseSuccess;
