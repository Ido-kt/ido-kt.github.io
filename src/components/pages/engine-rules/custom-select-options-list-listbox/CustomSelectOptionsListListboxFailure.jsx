import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CustomSelectOptionsListListboxFailure = () => {
  const ruleId = "custom-select-options-list-listbox";
  const title = `Custom select options lists should be tagged for assistive technology`;
  const description = `Native select elements automatically expose their option lists to screen readers, but custom implementations must be explicitly defined. Without exposing the correct roles and nesting them in line with established markup and accessibility standards, screen reader users may not be able to make a selection.`;
  const helpText = `Assign role="listbox" to the container element that directly holds the list options.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "no role", content: `<form>
    <div class="custom-select">
        <div class="select-selected" onclick="showMenu()">Select an option</div>
        <div class="select-items" style="display: none;">
            <div class="select-item" onclick="selectOption('Option 1')">Option 1</div>
            <div class="select-item" onclick="selectOption('Option 2')">Option 2</div>
            <div class="select-item" onclick="selectOption('Option 3')">Option 3</div>
        </div>
    </div>
</form>` }
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

export default CustomSelectOptionsListListboxFailure;
