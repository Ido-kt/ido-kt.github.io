import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RegionMainContentMismatchSuccess = () => {
  const ruleId = "region-main-content-mismatch";
  const title = `All of the main content on the page is contained in the main landmark`;
  const description = `The main landmark represents the primary content of a page. It should include only content unique to that page and must remain separate from repeated elements, such as navigation, header, or footer.`;
  const helpText = `Add a role='main' attribute to the main content area so that it is correctly identified by assistive technologies.`;
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
      <section style="height: 600px;">Nested main content</section>
    </div>
    <footer>Footer content</footer>
  </body>
</html>` },
  { filename: "main landmark", content: `<!DOCTYPE html>
<html>
  <body>
    <header>Header content</header>
    <div style="height: 300px;">Smaller div</div>
    <main id="larger" style="height: 700px;">Larger div</main>
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

export default RegionMainContentMismatchSuccess;
