import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HtmlLangValidFailure = () => {
  const ruleId = "html-lang-valid";
  const title = `HTML lang attribute should have a valid value`;
  const description = `A valid ISO language value in the HTML lang attribute ensures that screen readers use the correct pronunciation rules, browsers apply proper spell-checking and translation, and search engines index the content in the appropriate language. Without it, assistive technologies may misinterpret the text and create a confusing experience.`;
  const helpText = `Make sure that the lang attribute on the HTML element is assigned  a valid ISO language code that matches the default language of the page.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page no lang attribute", content: `<!DOCTYPE html>
<html>
<head>
    <title>Page with no lang attribute</title>
</head>
<body>
    <h1>Heading element</h1>
</body>
</html>` },
  { filename: "page with invalid value 1", content: `<!DOCTYPE html>
<html lang="de--1901">
<head>
    <title>Page with language and variant</title>
</head>
<body>
    <h1>Page with language and variant</h1>

</body>
</html>` },
  { filename: "page with invalid value 2", content: `<!DOCTYPE html>
<html lang="deasd-1901">
<head>
    <title>Page with language and variant</title>
</head>
<body>
    <h1>Page with language and variant</h1>

</body>
</html>` },
  { filename: "page with invalid value 3", content: `<!DOCTYPE html>
<html lang="de-uk-gb">
<head>
    <title>Page with language and variant</title>
</head>
<body>
    <h1>Page with language and variant</h1>

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

export default HtmlLangValidFailure;
