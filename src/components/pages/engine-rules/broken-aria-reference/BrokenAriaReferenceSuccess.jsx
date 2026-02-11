import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const BrokenAriaReferenceSuccess = () => {
  const ruleId = "broken-aria-references";
  const title = `Aria describedby/labelledby must point to a valid, existing element ID`;
  const description = `Screen readers rely on the HTML to provide explicit references between elements in order to parse the content and announce it to screen readers correctly. If the HTML includes broken ARIA references, screen reader users may not be able to browse properly.`;
  const helpText = `Make sure that aria-describedby and aria-labeledby attributes point to an existing, screen-reader-visible element on the screen with proper text content.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "input both valid aria labelledby and valid aria describedby", content: `<input aria-labelledby="label" aria-describedby="description" />
<div id="label">Some label</div>
<div id="description">Some label</div>` },
  { filename: "input with aria describedby and matching element", content: `<input aria-describedby="description" />
<div id="description">Some description</div>` },
  { filename: "input with aria labelledby and matching element", content: `<input aria-labelledby="label" />
<div id="label">Some label</div>` },
  { filename: "input without aria references", content: `<input aria-label="label" />` },
  { filename: "multiple inputs with labelledby and describedby with matching element", content: `<input id="describedby-by" aria-describedby="description" />
<div id="description">Some description</div>
<input id="labelled-by" aria-labelledby="label" />
<div id="label">Some label</div>` }
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

export default BrokenAriaReferenceSuccess;
