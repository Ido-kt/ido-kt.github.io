import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkNavigationAmbiguousFailure = () => {
  const ruleId = "link-navigation-ambiguous";
  const title = `Ambiguous links should include additional screen-reader description`;
  const description = `Ambiguous links like "Learn More", "Shop Now" and "Start Here" are often used as a call to action. However, screen-reader users, while using link navigation, do not interact with content above or below the link and therefore don\\\\`;
  const helpText = `Add a screen-reader only text which gives additional context to the destination of the link. You can use the \\`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "link short content", content: `<a href="http://localhost/">Go</a>` },
  { filename: "link with ambiguous content and ambiguous aria label", content: `<a href="/homepage" aria-label="show more">click here</a>` },
  { filename: "link with ambiguous content", content: `<a href="/homepage">click here</a>` },
  { filename: "link with image content with ambiguous alt", content: `<a href="/homepage"><img alt="click here" /></a>` },
  { filename: "link with numeric characters only", content: `<a href="http://localhost/" aria-label="123 12">1234 5</a>` },
  { filename: "link with special characters only", content: `<a href="http://localhost/" aria-label="---">?!?!?!</a>` }
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

export default LinkNavigationAmbiguousFailure;
