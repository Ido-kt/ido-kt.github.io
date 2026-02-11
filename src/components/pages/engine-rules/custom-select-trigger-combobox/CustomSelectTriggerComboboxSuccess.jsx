import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const CustomSelectTriggerComboboxSuccess = () => {
  const ruleId = "custom-select-trigger-combobox";
  const title = `Custom select triggers should be tagged for assistive technology`;
  const description = `Screen readers provide built-in support for native select triggers, but custom triggers are not automatically recognized. Without assigning the appropriate ARIA role and ensuring the element is structured in accordance with accessibility standards, assistive technology may fail to announce or activate the trigger, preventing screen reader users from opening and interacting with the select component.`;
  const helpText = `Assign role="combobox" to the custom select trigger.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "role combobox", content: `<form>
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
</form>` },
  { filename: "style element under select", content: `<form>
    <div class="custom-select">
        <div role="combobox" class="select-selected" onclick="showMenu()">Select an option</div>
        <style></style>
        <div role="listbox" class="select-items" style="display: none;">
            <div role="option" class="select-item" onclick="selectOption('Option 1')">Option 1</div>
            <div role="option" class="select-item" onclick="selectOption('Option 2')">Option 2</div>
            <div role="option" class="select-item" onclick="selectOption('Option 3')">Option 3</div>
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

export default CustomSelectTriggerComboboxSuccess;
