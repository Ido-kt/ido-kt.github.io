import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RegionMainContentMisuseFailure = () => {
  const ruleId = "region-main-content-misuse";
  const title = `An element without main content is tagged as a main landmark`;
  const description = `Incorrectly tagging the main landmark may cause screen reader users to misunderstand where the primary content begins or ends, leading to confusion and inefficient navigation.`;
  const helpText = `If the failing element is a custom main landmark, remove role="main". If the failing element is coded using a HTML <main> tag, change the tag to a <div> or an element with a suitable role.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "full page main", content: `<!DOCTYPE html>
<html>
  <body style="margin: 0">
    <div role="main" style="height: 100vh">Full page content block</div>
  </body>
</html>` },
  { filename: "incorrect main", content: `<!DOCTYPE html>
<html>
  <body>
    <header>Header content</header>
    <main style="height: 300px">Smaller div</main>
    <div id="larger" style="height: 700px">Larger div</div>
    <footer>Footer content</footer>
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

export default RegionMainContentMisuseFailure;
