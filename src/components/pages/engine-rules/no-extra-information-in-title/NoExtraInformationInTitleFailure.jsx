import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NoExtraInformationInTitleFailure = () => {
  const ruleId = "no-extra-information-in-title";
  const title = `The title attribute should not be the only method used of providing information`;
  const description = `The title attribute is announced inconsistently across screen readers and browsers, making it unreliable for labeling interactive controls. Because many users may never hear the content, reliance on the attribute risks loss of information. Instead, it should be used to provide extra help text in addition to a valid label.`;
  const helpText = `Make sure that the title attribute is not the only means of providing a label by assigning an aria-label or aria-labelledby attribute to the interactive control.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "h1 with srVisibleText does not contain title", content: `<h1 title="test attribute" class="test" aria-label="title 1">Title</h1>` },
  { filename: "img with title and alt", content: `<html>
  <head> </head>
  <body>
    <img alt="A beautiful beach with clear blue water" title="info" />
  </body>
</html>` },
  { filename: "input with title and aria label", content: `<html>
  <head> </head>
  <body>
    <input title="info" aria-label="Search" />
  </body>
</html>` },
  { filename: "title has content no children", content: `<html>
  <head> </head>
  <body>
    <div title="info"></div>
  </body>
</html>` },
  { filename: "title has content with children", content: `<html>
  <head> </head>
  <body>
    <div title="info">
      <div>Hi 1</div>
      <div>Hi 2</div>
    </div>
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

export default NoExtraInformationInTitleFailure;
