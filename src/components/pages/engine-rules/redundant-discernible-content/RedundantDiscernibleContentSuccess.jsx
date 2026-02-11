import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RedundantDiscernibleContentSuccess = () => {
  const ruleId = "redundant-discernible-content";
  const title = `Assigned label should not be redundant`;
  const description = `Providing the same text as the visible label in an aria-label is redundant and risky, as content may change over time or be translated into other languages, which may result in the label no longer matching the element.`;
  const helpText = `Remove the aria-label from the failing element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "anchor without content and with aria label", content: `<a aria-label="SoMe CoNtEnT"><i class="icon"></i></a>` },
  { filename: "button with content and without aria label", content: `<button>SoMe CoNtEnT</button>` },
  { filename: "button with different content and aria label arabic", content: `<button aria-label="شكرًا لك">وداعًا</button>` },
  { filename: "button with different content and aria label", content: `<button aria-label="some content">some other content<i class="icon"></i></button>` },
  { filename: "button with different content and aria labelledby element", content: `<button aria-labelledby="btn-label">some other content<i class="icon"></i></button>
<label id="btn-label">some content</label>` }
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

export default RedundantDiscernibleContentSuccess;
