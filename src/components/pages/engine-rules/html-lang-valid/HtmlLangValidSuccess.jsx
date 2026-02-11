import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HtmlLangValidSuccess = () => {
  const ruleId = "html-lang-valid";
  const title = `HTML lang attribute should have a valid value`;
  const description = `A valid ISO language value in the HTML lang attribute ensures that screen readers use the correct pronunciation rules, browsers apply proper spell-checking and translation, and search engines index the content in the appropriate language. Without it, assistive technologies may misinterpret the text and create a confusing experience.`;
  const helpText = `Make sure that the lang attribute on the HTML element is assigned  a valid ISO language code that matches the default language of the page.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page with language and region", content: `<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Page with language, script and region</title>
</head>
<body>
    <h1>Page with language, script and region</h1>

</body>
</html>` },
  { filename: "page with language and script and region and variant", content: `<!DOCTYPE html>
<html lang="de-Latn-DE-1996">
<head>
    <title>Page with language, script, region and variant</title>
</head>
<body>
    <h1>Page with language, script, region and variant</h1>

</body>
</html>` },
  { filename: "page with language and script and region", content: `<!DOCTYPE html>
<html lang="sr-Latn-RS">
<head>
    <title>Page with language, script and region</title>
</head>
<body>
    <h1>Page with language, script and region</h1>

</body>
</html>` },
  { filename: "page with language and script", content: `<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <title>Page with language and script</title>
</head>
<body>
    <h1>Page with language and script</h1>

</body>
</html>` },
  { filename: "page with language and variant", content: `<!DOCTYPE html>
<html lang="de-1901">
<head>
    <title>Page with language and variant</title>
</head>
<body>
    <h1>Page with language and variant</h1>

</body>
</html>` },
  { filename: "page with language only", content: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page with language only</title>
</head>
<body>
    <h1>Page with language only</h1>
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

export default HtmlLangValidSuccess;
