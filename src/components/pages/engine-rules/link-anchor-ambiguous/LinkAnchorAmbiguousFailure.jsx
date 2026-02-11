import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkAnchorAmbiguousFailure = () => {
  const ruleId = "link-anchor-ambiguous";
  const title = `Ambiguous links should have additional descriptions for screen readers.`;
  const description = `Ambiguous links like "Learn More", "Shop Now" and "Start Here" are often used as a call to action. However, screen-reader users, while using link navigation, do not interact with content above or below the link and therefore don\\\\`;
  const helpText = `Add a screen-reader only text which gives additional context to the destination of the link. You can use the \\`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "link with ambiguous content and ambiguous aria label", content: `<a href="#more" aria-label="show more">click here</a>


<section id="more">

</section>` },
  { filename: "link with ambiguous content", content: `<header id="top"></header>

<a href="#top">click here</a>` },
  { filename: "link with image content with ambiguous alt", content: `<a href="#info"><img alt="click here" /></a>


<section id="info"></section>` }
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

export default LinkAnchorAmbiguousFailure;
