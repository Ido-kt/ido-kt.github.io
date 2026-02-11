import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkMailtoWarningSuccess = () => {
  const ruleId = "link-mailto-warning";
  const title = `Warning a user when a link triggers a mail application is recommended`;
  const description = `It's good practice to warn users about the expected behavior when activating a link triggers a mail application.`;
  const helpText = `Add a visibly hidden text element that contains 'Opens mail application'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "link mailto acsb sr element", content: `<a href="mailto:someone@example.com" id="email-link">
  Send email
  <span data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important"> | Opens Email</span>
</a>` },
  { filename: "link mailto sr element", content: `<style>
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
  <a href="mailto:someone@example.com" id="email-link"
    >Send email
    <span id="email-desc" class="sr-only">Composes Email</span>
  </a>
</p>` },
  { filename: "link mailto with aria describedby", content: `<p>
  <a href="mailto:someone@example.com" id="email-link" aria-describedby="email-desc">Send email</a>
</p>
<p id="email-desc">Launches Email</p>` },
  { filename: "link mailto with aria label", content: `<p>
  <a href="mailto:someone@example.com" aria-label="Send email, opens email application">Send email</a>
</p>` },
  { filename: "link mailto with aria labelledby", content: `<style>
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
  <a href="mailto:someone@example.com" id="email-link" aria-labelledby="email-desc">Send email</a>
  <span id="email-desc" class="sr-only">This link launches email application.</span>
</p>` }
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

export default LinkMailtoWarningSuccess;
