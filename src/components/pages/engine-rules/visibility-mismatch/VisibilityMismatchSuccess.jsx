import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const VisibilityMismatchSuccess = () => {
  const ruleId = "visibility-mismatch";
  const title = `Visible content should not be hidden from assistive technology`;
  const description = `If content remains visible on the screen but assigned aria-hidden="true", it will be excluded from the accessibility tree. As a result, screen reader users will not have access to the same information as sighted users.`;
  const helpText = `Remove aria-hidden="true" from visible elements. Make sure that the attribute is only used to hide redundant or inactive content.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "display none aria hidden", content: `<div style="display: none" aria-hidden="true">This is hidden content</div>` },
  { filename: "display none parent", content: `<div style="display: none">
  <div>This is hidden content</div>
</div>` },
  { filename: "display none", content: `<div style="display: none">This is hidden content</div>` },
  { filename: "empty styled visible div", content: `<div style="width: 20px; height: 20px; background: red"></div>` },
  { filename: "hidden dimensions aria hidden", content: `<div style="width: 0; height: 0; overflow: hidden" aria-hidden="true">This is hidden content</div>` },
  { filename: "hidden dimensions", content: `<div style="width: 0; height: 0; overflow: hidden">This is hidden content</div>` },
  { filename: "opacity zero aria hidden", content: `<div style="opacity: 0" aria-hidden="true">This is hidden content</div>` },
  { filename: "opacity zero", content: `<div style="opacity: 0">This is hidden content</div>` },
  { filename: "presentation icon no text", content: `<i role="presentation" class="sc-hABBmJ bHDvnc"
  ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.83 3.296a2.452 2.452 0 0 1 2.339 0c.36.195.665.48.882.831l7.615 12.392a2.247 2.247 0 0 1 .002 2.35 2.347 2.347 0 0 1-.882.834c-.36.196-.763.297-1.17.297H4.384c-.408 0-.811-.101-1.17-.297a2.347 2.347 0 0 1-.883-.834 2.247 2.247 0 0 1 .002-2.35L9.95 4.127c.217-.351.523-.636.882-.831ZM12 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="currentColor"
    ></path></svg
></i>` },
  { filename: "property hidden", content: `<div hidden="true" aria-hidden="true">This is hidden content</div>` },
  { filename: "visibility hidden aria hidden", content: `<div style="visibility: hidden" aria-hidden="true">This is hidden content</div>` },
  { filename: "visibility hidden", content: `<div style="visibility: hidden">This is hidden content</div>` },
  { filename: "visible text", content: `<div>This content is visible</div>` }
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

export default VisibilityMismatchSuccess;
