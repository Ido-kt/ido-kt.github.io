import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingOrderFailure = () => {
  const ruleId = "heading-order";
  const title = `Heading levels should follow a logical hierarchy`;
  const description = `Incorrect heading hierarchy can create a misleading page outline, disrupt navigation by heading shortcuts, and cause confusion about the structure and importance of content. Skipping levels or using them inconsistently makes it harder for screen reader users and others who rely on structured navigation to understand the page.`;
  const helpText = `Use heading levels in a meaningful, hierarchical order that reflects the structure of the content. Start with a single <h1> for the main page title, then use <h2> for primary sections, <h3> for subsections, and so on. Best practice avoids skipping levels (for example, jumping from <h1> to <h3>) to maintain a logical sequence and ensure a clear, consistent outline for all users.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "first heading h2", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h2 id="firstH2">Regular H2 Heading</h2>
    <h1>Regular H1 Heading</h1>
    <h2 id="secondH2">Regular H2 Heading</h2>
    <h3>Regular H3 Heading</h3>
  </body>
</html>` },
  { filename: "first heading h3", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h3 id="firstH3">Regular H3 Heading</h3>
    <h1>Regular H1 Heading</h1>
    <h2>Regular H2 Heading</h2>
    <h3 id="secondH3">Regular H3 Heading</h3>
  </body>
</html>` },
  { filename: "h3 after h1", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
    <h3 id="firstH3">Regular H3 Heading</h3>
    <h2>Regular H2 Heading</h2>
    <h3 id="secondH3">Regular H3 Heading</h3>
  </body>
</html>` },
  { filename: "heading skipped level 1", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h2>Regular H2 Heading</h2>
    <h3>Regular H3 Heading</h3>
    <h4>Regular H4 Heading</h4>
  </body>
</html>` },
  { filename: "heading skipped level 2", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
    <div role="heading" aria-level="3">H3</div>
    <h3>Regular H3 Heading</h3>
  </body>
</html>` },
  { filename: "heading skipped level 4", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
    <h2>Regular H2 Heading</h2>
    <h2>Regular H2 Heading</h2>
    <h3>Regular H3 Heading</h3>
    <h5>Regular H5 Heading</h5>
    <h6>Regular H6 Heading</h6>
  </body>
</html>` },
  { filename: "heading skipped levels 3 and 5", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
    <h2>Regular H2 Heading</h2>
    <h4>Regular H4 Heading</h4>
    <h6>Regular H6 Heading</h6>
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

export default HeadingOrderFailure;
