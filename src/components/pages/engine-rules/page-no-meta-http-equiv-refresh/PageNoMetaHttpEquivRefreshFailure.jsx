import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const PageNoMetaHttpEquivRefreshFailure = () => {
  const ruleId = "page-no-meta-http-equiv-refresh";
  const title = `Pages should not contain <meta> elements with http-equiv='refresh' attribute`;
  const description = `<meta> elements with http-equiv='refresh' should be avoided as they can negatively impact accessibility and user experience. The <meta> element with http-equiv='refresh' specifies a delay in seconds before the page reloads or redirects to a provided URL. This can be disorienting for users, especially for those who rely on screen readers because the page content changes without any user interaction.`;
  const helpText = `Remove <meta> elements with http-equiv="refresh" and use server-side redirects or JavaScript for page refreshes or redirects.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page with meta with http equiv refresh with url", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="5;url=https://www.example.com" />
    <title>Test Page</title>
  </head>
  <body>
    <p>Content of the page</p>
  </body>
</html>` },
  { filename: "page with meta with http equiv refresh without url", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="refresh" content="5" />
    <title>Test Page</title>
  </head>
  <body>
    <p>Content of the page</p>
    <p1>This is a sentence, hello world, hello world, 123</p1>
  </body>
</html>` },
  { filename: "page with multiple meta with http equiv refresh", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="5; url=https://www.example.com" />
    <meta http-equiv="refresh" content="10" />
    <title>Test Page</title>
  </head>
  <body>
    <p>Content of the page</p>
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

export default PageNoMetaHttpEquivRefreshFailure;
