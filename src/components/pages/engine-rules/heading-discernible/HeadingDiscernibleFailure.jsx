import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingDiscernibleFailure = () => {
  const ruleId = "heading-discernible";
  const title = `Headings should not be empty`;
  const description = `Empty heading elements break the document outline, making navigation by headings less effective for screen reader users and causing confusion due to the disrupted page hierarchy.`;
  const helpText = `Remove empty HTML heading elements or assign aria-hidden="true" to make sure that they are ignored by screen readers.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "empty heading", content: `<h4 class="f-agent__info-subtitle"></h4>` },
  { filename: "heading wtih image content and no aria label", content: `<h1><img src="path/to/graphic/cotnent" /></h1>` },
  { filename: "link no content", content: `<h1 style="width:100px;height:100px;"></h1>` }
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

export default HeadingDiscernibleFailure;
