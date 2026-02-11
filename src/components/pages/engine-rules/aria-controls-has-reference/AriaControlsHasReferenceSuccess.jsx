import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const AriaControlsHasReferenceSuccess = () => {
  const ruleId = "aria-controls-has-reference";
  const title = `aria-controls should reference a valid element id`;
  const description = `The element’s aria-controls points to an id that does not exist, or is not valid, breaking the link between the controlling element and the content it manages.`;
  const helpText = `Make the value of aria-controls exactly match an existing, unique id of an element on the page. Remove or update the attribute if the target element is missing or no longer relevant.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "aria controls exists", content: `<span
    role="tab"
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
    tabindex="0">
First Tab
</span>
<div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
</div>` },
  { filename: "aria controls mulitple references for the same controller", content: `<span
    role="tab"
    aria-selected="true"
    aria-controls="panel-1 panel-2"
    id="tab-1"
    tabindex="0">
First Tab
</span>
<div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
</div>
<div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2">
    <p>Content for the first panel</p>
</div>` },
  { filename: "multi aria controls references", content: `<div class="tab-interface">
    <div role="tablist" aria-label="Sample Tabs">
      <span
        role="tab"
        aria-selected="true"
        aria-controls="panel-1"
        id="tab-1"
        tabindex="0">
        First Tab
      </span>
      <span
        role="tab"
        aria-selected="false"
        aria-controls="panel-2"
        id="tab-2"
        tabindex="-1">
        Second Tab
      </span>
      <span
        role="tab"
        aria-selected="false"
        aria-controls="panel-3"
        id="tab-3"
        tabindex="-1">
        Third Tab
      </span>
    </div>
    <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
      <p>Content for the first panel</p>
    </div>
    <div
      id="panel-2"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-2"
      class="display-none">
      <p>Content for the second panel</p>
    </div>
    <div
      id="panel-3"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-3"
      class="display-none">
      <p>Content for the third panel</p>
    </div>
  </div>` },
  { filename: "no aria controls", content: `<span
    role="tab"
    aria-selected="true"
    id="tab-1"
    tabindex="0">
First Tab
</span>
<div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
</div>` }
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

export default AriaControlsHasReferenceSuccess;
