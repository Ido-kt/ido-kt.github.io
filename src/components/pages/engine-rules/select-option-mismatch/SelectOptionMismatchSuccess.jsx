import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const SelectOptionMismatchSuccess = () => {
  const ruleId = "select-option-mismatch";
  const title = `Custom select options should be tagged for assistive technology`;
  const description = `Native select elements automatically expose each option to screen readers, however roles for custom components must be explicitly defined. If custom option elements are not given the correct ARIA role and nested according to markup and accessibility guidelines, assistive technology may not recognize or interact with them.`;
  const helpText = `Assign role="option" to each custom select option.\\\\nEnsure that each option is directly contained in an element with role="listbox"`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "options list under div for styling role options", content: `<form>
    <div class="custom-select">
        <button role="combobox">Select an option...</button>
        <div role="listbox">
            <div class="option" role="option" onclick="">Option 1</div>
            <div class="option" role="option" onclick="">Option 2</div>
            <div class="option" role="option" onclick="">Option 3</div>
            <div class="option">
                Sub-options
                    <div class="nested-option" role="option" onclick="">Sub-option 1</div>
                    <div class="nested-option" role="option" onclick="">Sub-option 2</div>
                    <div class="nested-option" role="option" onclick="">Sub-option 3</div>
            </div>
        </div>
    </div>
</form>` },
  { filename: "options role option", content: `<form>
  <div class="custom-select">
    <div role="combobox" class="select-selected" onclick="showMenu()">Select an option</div>
    <div role="listbox" class="select-items">
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
</form>` },
  { filename: "sub options role option", content: `<form>
  <div class="custom-select">
    <button role="combobox">Select an option...</button>
    <div role="listbox" style="opacity: 0">
      <div role="option" onclick="">Option 3</div>
      <div role="option" onclick="">Option 1</div>
      <div role="option" onclick="">Option 2</div>
      <div>
        Sub-options
        <div role="option" onclick="">Sub-option 1</div>
        <div role="option" onclick="">Sub-option 2</div>
        <div role="option" onclick="">Sub-option 3</div>
      </div>
    </div>
  </div>
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

export default SelectOptionMismatchSuccess;
