import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const RedundantDiscernibleContentFailure = () => {
  const ruleId = "redundant-discernible-content";
  const title = `Assigned label should not be redundant`;
  const description = `Providing the same text as the visible label in an aria-label is redundant and risky, as content may change over time or be translated into other languages, which may result in the label no longer matching the element.`;
  const helpText = `Remove the aria-label from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "anchor with same content and aria label", content: `<a target="_blank" aria-label="Home" class="btn-new silent compensate-left e16fm13v0 e1of9yu15 css-6x6bk e1figufi0"
    href="/home"><span class="silent css-17qgsod e1of9yu11">Home</span></a>` },
  { filename: "anchor with same diff case content and aria label", content: `<a aria-label="sOmE cOnTeNt">SoMe CoNtEnT<i class="icon"></i></a>` },
  { filename: "button with aria label child with same content", content: `<button aria-label="some content"><span>some content</span>&nbsp;<i class="icon"></i></button>` },
  { filename: "button with same content after icon and aria label", content: `<button aria-label="some content"><i class="icon"></i>some content</button>` },
  { filename: "button with same content and aria label arabic", content: `<button aria-label="شكرًا لك">شكرًا لك</button>` },
  { filename: "button with same content and aria label", content: `<button aria-label="some content">some content<i class="icon"></i></button>` },
  { filename: "button with same content and aria labelled by", content: `<button aria-labelledby="btn-label">some content<i class="icon"></i></button>
<label id="btn-label">some content</label>` },
  { filename: "button with same content with whitespace", content: `<button aria-label="  some other content                ">some other content<i class="icon"></i></button>` }
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

export default RedundantDiscernibleContentFailure;
