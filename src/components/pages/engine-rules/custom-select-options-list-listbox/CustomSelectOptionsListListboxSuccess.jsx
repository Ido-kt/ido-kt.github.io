import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const CustomSelectOptionsListListboxSuccess = () => {
  const ruleId = "custom-select-options-list-listbox";
  const title = `Custom select options lists should be tagged for assistive technology`;
  const description = `Native select elements automatically expose their option lists to screen readers, but custom implementations must be explicitly defined. Without exposing the correct roles and nesting them in line with established markup and accessibility standards, screen reader users may not be able to make a selection.`;
  const helpText = `Assign role="listbox" to the container element that directly holds the list options.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "role listbox", content: `<form>
    <div class="custom-select">
        <div role="combobox" class="select-selected" onclick="showMenu()">Select an option</div>
        <div role="listbox" class="select-items" style="display: none;">
            <div role="option" class="select-item" onclick="selectOption('Option 1')">Option 1</div>
            <div role="option" class="select-item" onclick="selectOption('Option 2')">Option 2</div>
            <div role="option" class="select-item" onclick="selectOption('Option 3')">Option 3</div>
        </div>
    </div>
</form>` },
  { filename: "select native", content: `<form>
    <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
    </select>
</form>` }
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

export default CustomSelectOptionsListListboxSuccess;
