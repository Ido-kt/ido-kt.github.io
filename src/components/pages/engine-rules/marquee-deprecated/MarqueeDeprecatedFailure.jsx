import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MarqueeDeprecatedFailure = () => {
  const ruleId = "marquee-deprecated";
  const title = `<marquee> elements are deprecated`;
  const description = `<marquee> elements are obsolete and should not be used. They are not part of any HTML or WAI-ARIA specification. They are not responsive or supported by any browsers.`;
  const helpText = `Remove the <marquee> element from the page. If you need to display scrolling text, use CSS animations or JavaScript to create a similar effect.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "page with marquee", content: `<h1>Heading</h1>
<input type="text">
<marquee>Some moving content</marquee>
<button></button>` }
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

export default MarqueeDeprecatedFailure;
