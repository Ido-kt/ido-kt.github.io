import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkPdfWarningSuccess = () => {
  const ruleId = "link-pdf-warning";
  const title = `Warning a user when a link triggers a PDF file is recommended`;
  const description = `It's good practice to warn users about the expected behavior when activating a link triggers a PDF reader.`;
  const helpText = `Add a visibly hidden text element that contains 'Opens PDF reader'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "link pdf acsb sr element", content: `<a href="aaa.pdf" id="pdf-link">
  link
  <span data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important">this link Opens PDF</span>
</a>` },
  { filename: "link pdf sr element", content: `<style>
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
<p>
  <a href="file.pdf" id="pdf-link"
    > view
  <span id="pdf-desc" class="sr-only">PDF</span>
</a>
</p>` },
  { filename: "link pdf with aria describedby", content: `<p>
  <a href="file.pdf" id="pdf-link" aria-describedby="pdf-desc">link</a>
</p>
<p id="pdf-desc">Opens PDF</p>` },
  { filename: "link pdf with aria label", content: `<p>
  <a href="pdf-file.pdf" aria-label="downloads pdf file">Open</a>
</p>` },
  { filename: "link pdf with aria labelledby", content: `<p>
  <a href=".pdf" id="pdf-link" aria-labelledby="pdf-desc">Opens</a>
  <span id="pdf-desc">This link opens pdf application.</span>
</p>` },
  { filename: "non pdf link", content: `<a href="malware.zip" id="pdf-link">
  Please click here
</a>` }
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

export default LinkPdfWarningSuccess;
