import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const VisibilityMisuseFailure = () => {
  const ruleId = "visibility-misuse";
  const title = `Visibly hidden content should not be exposed to assistive technology`;
  const description = `When elements are visually hidden but still exposed to assistive technology, screen reader users may encounter content that should not be available in the current interface. This can obscure the current state of the page and lead to confusion about what information or controls are available.`;
  const helpText = `Use aria-hidden="true" to remove elements from the accessibility tree when they should not be exposed to assistive technology. Consider using CSS techniques, such as display:none or visibility:hidden when the content should be hidden from all users.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div height 0 overflow hidden", content: `<div style="height: 0; overflow: hidden">Hidden content</div>` },
  { filename: "div opacity 0", content: `<div style="opacity: 0">This is visually hidden</div>` },
  { filename: "div text indent negative 9999px", content: `<div style="text-indent: -9999px">Hidden text</div>` },
  { filename: "div width 0 height 0 overflow hidden", content: `<div style="width: 0; height: 0; overflow: hidden">Hidden visually</div>` },
  { filename: "nested invisible elements", content: `<!-- This test is skipped because the span is perceivable visible (even though it shouldn't be) -->

<div style="height: 0.5px; width: 0.5px; overflow: hidden">
    <div id="test-subject">
        This text is still visible to
        <span class="should not appear in the failed nodes array as it's a child of a failed node">screen reader</span>
    </div>
</div>` },
  { filename: "zero opacity element", content: `<div style="opacity: 0">This text is still visible to screen reader</div>` }
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

export default VisibilityMisuseFailure;
