import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const MarqueeDeprecatedSuccess = () => {
  const ruleId = "marquee-deprecated";
  const title = `<marquee> elements are deprecated`;
  const description = `<marquee> elements are obsolete and should not be used. They are not part of any HTML or WAI-ARIA specification. They are not responsive or supported by any browsers.`;
  const helpText = `Remove the <marquee> element from the page. If you need to display scrolling text, use CSS animations or JavaScript to create a similar effect.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "page no marquee", content: `<h1>Heading</h1>
<input type="text">
<button></button>` }
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

export default MarqueeDeprecatedSuccess;
