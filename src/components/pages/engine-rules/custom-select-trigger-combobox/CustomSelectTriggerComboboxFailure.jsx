import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CustomSelectTriggerComboboxFailure = () => {
  const ruleId = "custom-select-trigger-combobox";
  const title = `Custom select triggers should be tagged for assistive technology`;
  const description = `Screen readers provide built-in support for native select triggers, but custom triggers are not automatically recognized. Without assigning the appropriate ARIA role and ensuring the element is structured in accordance with accessibility standards, assistive technology may fail to announce or activate the trigger, preventing screen reader users from opening and interacting with the select component.`;
  const helpText = `Assign role="combobox" to the custom select trigger.`;
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

export default CustomSelectTriggerComboboxFailure;
