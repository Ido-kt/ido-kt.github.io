import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const BrokenAriaReferenceFailure = () => {
  const ruleId = "broken-aria-references";
  const title = `Aria describedby/labelledby must point to a valid, existing element ID`;
  const description = `Screen readers rely on the HTML to provide explicit references between elements in order to parse the content and announce it to screen readers correctly. If the HTML includes broken ARIA references, screen reader users may not be able to browse properly.`;
  const helpText = `Make sure that aria-describedby and aria-labeledby attributes point to an existing, screen-reader-visible element on the screen with proper text content.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "input with aria describedby but no matching element id", content: `<input aria-label="Input field" aria-describedby="description" />
<div id="description-bad-id">Some description</div>` },
  { filename: "input with aria describedby but no matching element", content: `<input aria-label="Input field" aria-describedby="description" />` },
  { filename: "input with aria labelledby but no matching element id", content: `<input aria-label="Input field" aria-labelledby="label" />
<div id="label-bad-id">Some label</div>` },
  { filename: "input with aria labelledby but no matching element", content: `<input aria-label="Input field" aria-labelledby="label" />` },
  { filename: "input with valid aria describedby and invalid aria labelledby", content: `<input aria-label="Input field" aria-labelledby="label" aria-describedby="description" />
<div id="label-bad">Some label</div>
<div id="description">Some label</div>` },
  { filename: "input with valid aria labelledby and invalid aria describedby", content: `<input aria-label="Input field" aria-labelledby="label" aria-describedby="description" />
<div id="label">Some label</div>
<div id="description-bad">Some label</div>` },
  { filename: "multiple inputs with labelledby and describedby but no fitting element", content: `<input id="describedby-by" aria-label="First input" aria-describedby="description" />
<div id="description-bad-id">Some description</div>
<input id="labelled-by" aria-label="Second input" aria-labelledby="label" />
<div id="label-bad-id">Some label</div>` }
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

export default BrokenAriaReferenceFailure;
