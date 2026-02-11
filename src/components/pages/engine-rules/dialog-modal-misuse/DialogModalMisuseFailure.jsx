import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const DialogModalMisuseFailure = () => {
  const ruleId = "dialog-modal-misuse";
  const title = `Only elements that function as dialogs should be tagged as dialog`;
  const description = `Marking up elements as dialogs without actual dialog behavior causes screen readers to announce a dialog, misleading users into expecting modal interaction and restricted reading order that do not occur.`;
  const helpText = `Remove role="dialog" from the non-dialog element or add role="presentation" if the HTML DIALOG element is used.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "simple div role dialog modal", content: `<div role="dialog" aria-modal="true">Dialog</div>` }
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

export default DialogModalMisuseFailure;
