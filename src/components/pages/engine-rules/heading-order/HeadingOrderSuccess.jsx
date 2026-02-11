import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HeadingOrderSuccess = () => {
  const ruleId = "heading-order";
  const title = `Heading levels should follow a logical hierarchy`;
  const description = `Incorrect heading hierarchy can create a misleading page outline, disrupt navigation by heading shortcuts, and cause confusion about the structure and importance of content. Skipping levels or using them inconsistently makes it harder for screen reader users and others who rely on structured navigation to understand the page.`;
  const helpText = `Use heading levels in a meaningful, hierarchical order that reflects the structure of the content. Start with a single <h1> for the main page title, then use <h2> for primary sections, <h3> for subsections, and so on. Best practice avoids skipping levels (for example, jumping from <h1> to <h3>) to maintain a logical sequence and ensure a clear, consistent outline for all users.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "heading levels consistent hierarchy 1 to 2", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
    <h2>Regular H2 Heading</h2>
  </body>
</html>` },
  { filename: "heading levels consistent hierarchy 1 to 3", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
    <div role="heading" aria-level="2">Regular H2 Heading</div>
    <h3>Regular H3 Heading</h3>
  </body>
</html>` },
  { filename: "heading levels consistent hierarchy 1 to 4", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <div role="heading" aria-level="1">Big Heading</div>
    <h2>Regular H2 Heading</h2>
    <h3>Regular H3 Heading</h3>
    <h4>Regular H4 Heading</h4>
  </body>
</html>` },
  { filename: "heading levels consistent hierarchy 1 to 5", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <div role="heading" aria-level="1">Big Heading</div>
    <h2>Regular H2 Heading</h2>
    <h3>Regular H3 Heading</h3>
    <h4>Regular H4 Heading</h4>
    <h5>Regular H5 Heading</h5>
  </body>
</html>` },
  { filename: "heading levels consistent hierarchy 1 to 6", content: `<!DOCTYPE html>
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
  { filename: "heading levels consistent hierarchy 1", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <h1>Regular H1 Heading</h1>
  </body>
</html>` },
  { filename: "heading levels consistent hierarchy", content: `<h1>Title of a News Article</h1>

<nav>
  <h2>Main Menu</h2>
</nav>

<article>
  <h2>Subheading in the Content of the News Article</h2>
  <h3>Subheading of the h2</h3>
  <h4>Subheading of the h3</h4>

  <h2>Another Subheading in the Content of the News Article</h2>
</article>

<aside>
  <h2>Related News</h2>
</aside>

<footer>
  <h2>Contact Us</h2>
  <h3>Address</h3>
  <h4>Phone Number</h4>
  <h3>Follow Us</h3>
</footer>` },
  { filename: "no headings", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Example Page</title>
  </head>
  <body>
    <p>Hi</p>
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

export default HeadingOrderSuccess;
