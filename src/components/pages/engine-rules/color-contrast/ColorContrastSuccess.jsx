import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ColorContrastSuccess = () => {
  const ruleId = "color-contrast";
  const title = `The color contrast ratio between text and its background should provide a readable experience`;
  const description = `The color contrast between foreground text and its background must be at lease at least 4.5:1 for normal text. Large-scale text, equal to or greater than 24px font size, or bold text that is equal to or greater than 18px, may meet a lower ratio of 3:1. However, it is recommended to meet the ratio 4.5:1 in all cases for readability.`;
  const helpText = `Work with the website's designers to choose colors that properly meet the minimum contrast ratio requirements. To check color contrast with different potential colors, use Webaim's contrast checker at https://webaim.org/resources/contrastchecker`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "div with background black and color white", content: `<div style="background-color: black; color: white">Content</div>` },
  { filename: "div with background transparent and color black and parent non transparent", content: `<div style="background-color: white">
  <div style="background-color: transparent; color: black">Content</div>
</div>` },
  { filename: "div with background transparent and color black", content: `<div style="background-color: transparent; color: black">Content</div>` },
  { filename: "div with background white and color black", content: `<div style="background-color: white; color: black">Content</div>` },
  { filename: "div with font size 16px with ratio bigger than 4.5", content: `<div style="font-size: 16px; color: #824040; background-color: #CCCCCC;">Text Contrast Ratio 4.74:1</div>` },
  { filename: "div with font size 26px with ratio smaller than 4.5", content: `<div style="font-size: 26px; color:  #000000; background-color: #C80909;">Text Contrast Ratio 3.49:1</div>` },
  { filename: "muliple div with font size 16px with ratio bigger than 4.5", content: `<div style="font-size: 16px; color: #824040; background-color: #CCCCCC;"></div>
<div style="font-size: 16px; color: #824040; background-color: #CCCCCC;">Text Contrast Ratio 4.74:1</div>
<div style="font-size: 16px; color: #824040; background-color: #CCCCCC;">Text Contrast Ratio 4.74:1</div>
<div style="font-size: 16px; color: #824040; background-color: #CCCCCC;">Text Contrast Ratio 4.74:1</div>` }
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

export default ColorContrastSuccess;
