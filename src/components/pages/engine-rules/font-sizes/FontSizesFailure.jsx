import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const FontSizesFailure = () => {
  const ruleId = "font-sizes";
  const title = `Text should be scalable to 200% without loss of content or functionality`;
  const description = `When text is scaled to 200%, content may be clipped, overlap, or overflow its container if styles like fixed heights, fixed widths, hidden overflow, or absolute positioning prevent proper reflow.`;
  const helpText = `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to ensure content remains readable when text is scaled to 200%.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div with bad font size in style attribute", content: `<div style="font-size: 10px">Some text content</div>` },
  { filename: "nested with bad font size in css class", content: `<style>
  .bad-font-size {
    font-size: 10px;
  }
</style>
<div>
  <div id="div1" style="font-size: 8px">
    This is a div with font-size 8px.
    <p id="p1">
      This is a paragraph.
      <span id="span1" class="bad-font-size"> This is a span with no style or class. </span>
    </p>
  </div>
  <div id="div2" style="font-size: 12px">
    <p id="p2" style="font-size: 6px">
      This is a paragraph with font-size 14px.
      <span id="span2" class="bad-font-size">
        <!-- This is a span with no text -->
      </span>
    </p>
  </div>
</div>` },
  { filename: "paragraph with bad font size in css class", content: `<style>
.bad-font-size {
    font-size: 10px;
}
</style>
<p class="bad-font-size">Some text content</p>` },
  { filename: "paragraph with bad font size in css selector", content: `<style>
p {
    font-size: 10px;
}
</style>
<p>Some text content</p>` },
  { filename: "paragraph with bad font size in style attribute", content: `<p style="font-size: 10px;">Some text content</p>` }
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

export default FontSizesFailure;
