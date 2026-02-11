import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ColorContrastFailure = () => {
  const ruleId = "color-contrast";
  const title = `The color contrast ratio between text and its background should provide a readable experience`;
  const description = `The color contrast between foreground text and its background must be at lease at least 4.5:1 for normal text. Large-scale text, equal to or greater than 24px font size, or bold text that is equal to or greater than 18px, may meet a lower ratio of 3:1. However, it is recommended to meet the ratio 4.5:1 in all cases for readability.`;
  const helpText = `Work with the website's designers to choose colors that properly meet the minimum contrast ratio requirements. To check color contrast with different potential colors, use Webaim's contrast checker at https://webaim.org/resources/contrastchecker`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div with background black and color black", content: `<div style="background-color: black; color: black">Content</div>` },
  { filename: "div with background transparent and color white and parent transparent", content: `<div style="background-color: transparent">
  <div id="test-subject" style="background-color: transparent; color: white">Content</div>
</div>` },
  { filename: "div with background transparent and color white", content: `<div style="background-color: transparent; color: white">Content</div>` },
  { filename: "div with background white and color white", content: `<div style="background-color: white; color: white">Content</div>` },
  { filename: "div with font size 16px with ratio 3.5", content: `<div style="font-size: 16px; color: #000000; background-color: #C80909;">Text Contrast Ratio 3.49:1</div>` }
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

export default ColorContrastFailure;
