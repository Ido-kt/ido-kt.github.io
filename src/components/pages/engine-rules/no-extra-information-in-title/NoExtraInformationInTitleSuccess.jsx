import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NoExtraInformationInTitleSuccess = () => {
  const ruleId = "no-extra-information-in-title";
  const title = `The title attribute should not be the only method used of providing information`;
  const description = `The title attribute is announced inconsistently across screen readers and browsers, making it unreliable for labeling interactive controls. Because many users may never hear the content, reliance on the attribute risks loss of information. Instead, it should be used to provide extra help text in addition to a valid label.`;
  const helpText = `Make sure that the title attribute is not the only means of providing a label by assigning an aria-label or aria-labelledby attribute to the interactive control.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "i srVisibleText contains the title", content: `<i title="Search"><span class="anything">Search 123</span></i>` },
  { filename: "img with alt contains the title", content: `<html>
  <head> </head>
  <body>
    <img alt="A beautiful beach with clear blue water | info" title="info" />
  </body>
</html>` },
  { filename: "img with title and alt aria hidden true", content: `<html>
  <head> </head>
  <body>
    <img alt="A beautiful beach with clear blue water" title="info" aria-hidden="true" />
  </body>
</html>` },
  { filename: "img with title and empty alt", content: `<html>
  <head> </head>
  <body>
    <img alt="" title="info" />
  </body>
</html>` },
  { filename: "img with title without alt", content: `<html>
  <head> </head>
  <body>
    <img title="info" />
  </body>
</html>` },
  { filename: "input with aria label contains the title", content: `<html>
  <head> </head>
  <body>
    <input title="info" aria-label="Search | info" />
  </body>
</html>` },
  { filename: "input with title with empty aria label", content: `<html>
  <head> </head>
  <body>
    <input title="info" aria-label="" />
  </body>
</html>` },
  { filename: "input with title without aria label", content: `<html>
  <head> </head>
  <body>
    <input title="info" />
  </body>
</html>` },
  { filename: "srVisibleText contains the trim title", content: `<html>
  <head> </head>
  <body>
    <img alt="Moshe-Ivgy" title=" Ivgy" />
  </body>
</html>` },
  { filename: "title and alt content are the same", content: `<html>
<head>
</head>
<body>
<img title="info" alt="info"/>
</body>
</html>` },
  { filename: "title content is empty", content: `<html>
<head>
</head>
<body>
<div title="">First</div>
<div title="   ">Second</div>
<div title>Third</div>
</body>
</html>` },
  { filename: "title has content no children with sr only", content: `<html>
  <head> </head>
  <body>
    <div title="info">
        <span data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important;">info</span>
    </div>
    </div>
  </body>
</html>` },
  { filename: "title has content with children with sr only", content: `<html>
  <head> </head>
  <body>
    <div title="info">
        <div>Hi 1</div>
        <div>Hi 2</div>
        <span data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important;">info</span>
    </div>
    </div>
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

export default NoExtraInformationInTitleSuccess;
