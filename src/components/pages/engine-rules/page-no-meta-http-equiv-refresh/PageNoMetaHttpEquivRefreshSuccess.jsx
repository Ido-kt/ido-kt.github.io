import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const PageNoMetaHttpEquivRefreshSuccess = () => {
  const ruleId = "page-no-meta-http-equiv-refresh";
  const title = `Pages should not contain <meta> elements with http-equiv='refresh' attribute`;
  const description = `<meta> elements with http-equiv='refresh' should be avoided as they can negatively impact accessibility and user experience. The <meta> element with http-equiv='refresh' specifies a delay in seconds before the page reloads or redirects to a provided URL. This can be disorienting for users, especially for those who rely on screen readers because the page content changes without any user interaction.`;
  const helpText = `Remove <meta> elements with http-equiv="refresh" and use server-side redirects or JavaScript for page refreshes or redirects.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page with no meta with http equiv refresh", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test Page</title>
  </head>
  <body>
    <p>Content of the page</p>
  </body>
</html>` },
  { filename: "page with no meta", content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Test Page</title>
  </head>
  <body>
    <p>Content of the page</p>
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

export default PageNoMetaHttpEquivRefreshSuccess;
