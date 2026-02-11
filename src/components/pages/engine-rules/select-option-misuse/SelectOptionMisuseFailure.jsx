import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SelectOptionMisuseFailure = () => {
  const ruleId = "select-option-misuse";
  const title = `Only elements that function as select options should be tagged as option`;
  const description = `Assigning role="option" outside the required listbox structure causes screen readers to ignore the role, leaving users without the intended semantics of the original element. This can obscure key information and make the content harder for users to interpret.`;
  const helpText = `Remove role="option" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "accordion item header", content: `<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">Header 1</div>
    <div class="accordion-content">
      <div class="content">Content 1</div>
    </div>
  </div>
  <div class="accordion-item">
    <option id="test-subject" class="accordion-header">Header 2</option>
    <div class="accordion-content">
      <div class="content">Content 2</div>
    </div>
  </div>
</div>` },
  { filename: "custom select non leaf option", content: `<div class="custom-select">
  <button class="select-box">Select an option</button>
  <div class="options">
    <option id="test-subject" class="option">
      Option 1
      <div class="nested-option">Suboption 1</div>
      <div class="nested-option">Suboption 2</div>
      <div class="nested-option">Suboption 3</div>
    </option>
    <div class="option">Option 2</div>
    <div class="option">Option 3</div>
  </div>
</div>` },
  { filename: "nested option inner span", content: `<div class="list-container">
  <div>
    Item 1
    <div>
      Subitem 1
      <option id="test-subject">this is <small>(first)</small></option>
    </div>
    <div>Subitem 2</div>
    <div>Subitem 3</div>
  </div>
  <div>
    Item 2
    <div>Subitem 4</div>
  </div>
</div>` },
  { filename: "role option accordion item header", content: `<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">Header 1</div>
    <div class="accordion-content">
      <div class="content">Content 1</div>
    </div>
  </div>
  <div class="accordion-item">
    <div id="test-subject" class="accordion-header" role="option">Header 2</div>
    <div class="accordion-content">
      <div class="content">Content 2</div>
    </div>
  </div>
</div>` },
  { filename: "role option custom select non leaf option", content: `<div class="custom-select">
  <button class="select-box">Select an option</button>
  <div class="options">
    <div id="test-subject" class="option" role="option">
      Option 1
      <div class="nested-option">Suboption 1</div>
      <div class="nested-option">Suboption 2</div>
      <div class="nested-option">Suboption 3</div>
    </div>
    <div class="option">Option 2</div>
    <div class="option">Option 3</div>
  </div>
</div>` },
  { filename: "role option nested option inner span", content: `<div class="list-container">
  <div>
    Item 1
    <div>
      Subitem 1<span id="test-subject" role="option"> this is <small>(first)</small> </span>
    </div>
    <div>Subitem 2</div>
    <div>Subitem 3</div>
  </div>
  <div>
    Item 2
    <div>Subitem 4</div>
  </div>
</div>` }
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

export default SelectOptionMisuseFailure;
