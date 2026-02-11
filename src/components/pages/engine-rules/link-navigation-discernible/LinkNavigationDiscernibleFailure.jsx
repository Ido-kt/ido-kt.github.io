import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkNavigationDiscernibleFailure = () => {
  const ruleId = "link-navigation-discernible";
  const title = `Link navigation discernible text`;
  const description = `Links need discernible text that tells visitors where the link takes them.`;
  const helpText = `Add discernible text to the button`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "link no content", content: `<a href="path/to/page" style="width: 100px; height: 100px"></a>` },
  { filename: "link svg icon", content: `<a id="test-subject" href="/search">
  <svg style="width:100px;height:100px;" >
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>
</a>` },
  { filename: "link wtih image content and no aria label", content: `<a href="path/to/page"><img src="path/to/graphic/cotnent" /></a>` }
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

export default LinkNavigationDiscernibleFailure;
