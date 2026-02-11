import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RegionMainContentMisuseSuccess = () => {
  const ruleId = "region-main-content-misuse";
  const title = `An element without main content is tagged as a main landmark`;
  const description = `Incorrectly tagging the main landmark may cause screen reader users to misunderstand where the primary content begins or ends, leading to confusion and inefficient navigation.`;
  const helpText = `If the failing element is a custom main landmark, remove role="main". If the failing element is coded using a HTML <main> tag, change the tag to a <div> or an element with a suitable role.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "main landmark by role main", content: `<!DOCTYPE html>
<html>
  <body>
    <header>Header content</header>
    <div role="main">
      <section style="height: 600px">Nested main content</section>
    </div>
    <footer>Footer content</footer>
  </body>
</html>` },
  { filename: "main landmark", content: `<!DOCTYPE html>
<html>
  <body>
    <header>Header content</header>
    <div style="height: 300px">Smaller div</div>
    <main id="larger" style="height: 700px">Larger div</main>
    <footer>Footer content</footer>
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

export default RegionMainContentMisuseSuccess;
