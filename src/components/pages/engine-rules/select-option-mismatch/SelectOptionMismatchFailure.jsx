import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SelectOptionMismatchFailure = () => {
  const ruleId = "select-option-mismatch";
  const title = `Custom select options should be tagged for assistive technology`;
  const description = `Native select elements automatically expose each option to screen readers, however roles for custom components must be explicitly defined. If custom option elements are not given the correct ARIA role and nested according to markup and accessibility guidelines, assistive technology may not recognize or interact with them.`;
  const helpText = `Assign role="option" to each custom select option.\\\\nEnsure that each option is directly contained in an element with role="listbox"`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "accordion", content: `<div class="custom-select">
  <button class="select-box">Select an option</button>
  <div class="accordion">
    <div role="option" class="accordion-item">
      <div class="accordion-header">Header 1</div>
      <div class="accordion-content">
        <div class="content">Content 1</div>
      </div>
    </div>
    <div id="test-subject" class="accordion-item">
      <div class="accordion-header">Header 2</div>
      <div class="accordion-content">
        <div class="content">Content 2</div>
      </div>
    </div>
  </div>
</div>` },
  { filename: "custom select with nested options", content: `<div class="custom-select">
  <button class="select-box">Select an option</button>
  <div class="options">
    <div class="option">Option 1
      <div class="nested-option" role="option" class="nested-option">Suboption 1</div>
      <div class="nested-option" id="test-subject" class="nested-option">Suboption 2</div>
      <div class="nested-option" role="option" class="nested-option">Suboption 3</div>
    </div>
    <div class="option" role="option" class="option">Option 2</div>
    <div class="option" role="option" class="option">Option 3</div>
  </div>
</div>` },
  { filename: "option no role", content: `<form>
    <div class="custom-select">
        <div class="select-selected" onclick="showMenu()">Select an option</div>
        <div class="select-items" style="display: none">
            <div role="option" class="select-item" onclick="selectOption('Option 1')">Option 1</div>
            <div role="option" class="select-item" onclick="selectOption('Option 2')">Option 2</div>
            <div id="test-subject" class="select-item" onclick="selectOption('Option 3')">Option 3</div>
        </div>
    </div>
</form>` },
  { filename: "options list under div for styling missing role option", content: `<form>
    <div class="custom-select">
        <button role="combobox">Select an option...</button>
        <div role="listbox">
            <div class="option" role="option" onclick="">Option 1</div>
            <div class="option" role="option" onclick="">Option 2</div>
            <div class="option" role="option" onclick="">Option 3</div>
            <div class="option">
                Sub-options
                    <div class="nested-option" role="option" onclick="">Sub-option 1</div>
                    <div class="nested-option" id="test-subject" onclick="">Sub-option 2</div>
                    <div class="nested-option" role="option" onclick="">Sub-option 3</div>
            </div>
        </div>
    </div>
</form>` },
  { filename: "sub option no role", content: `<form>
    <div class="custom-select">
        <button role="combobox">Select an option...</button>
        <div role="listbox" style="opacity: 0">
            <div role="option" onclick="">Option 1</div>
            <div role="option" onclick="">Option 2</div>
            <div role="option" onclick="">Option 3</div>
            <div>
                Sub-options
                <div role="option" onclick="">Sub-option 1</div>
                <div id="test-subject" onclick="">Sub-option 2</div>
                <div role="option" onclick="">Sub-option 3</div>
            </div>
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

export default SelectOptionMismatchFailure;
