import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const DialogModalFocusFailure = () => {
  const ruleId = "dialog-modal-focus";
  const title = `Keyboard focus should move into and lock inside active dialogs`;
  const description = `Dialogs that appear on pages without receiving keyboard focus immediately on interaction often leave users navigating content behind the dialog and make it difficult or impossible for keyboard and screen reader users to access the dialog itself.`;
  const helpText = `When a dialog opens, use JavaScript to place keyboard focus on the first interactive element within the dialog. If static content, such as lists, tables, or paragraphs, appears before any interactive elements and it needs to be perceived in order to easily understand the content, tabindex="-1" can be added to a static element at the start of the content to initially focus that element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "dialog without autofocus", content: `<html>
  <head>
    <style>
      [role="dialog"] {
        position: absolute;
        z-index: 10;
        top: 2rem;
        left: 50vw;
        transform: translateX(-50%);
        min-width: calc(640px - (15px * 2));
        min-height: auto;
        box-shadow: 0 19px 38px rgb(0 0 0 / 12%), 0 15px 12px rgb(0 0 0 / 22%);
      }
    </style>
  </head>
  <body>
    <button type="button" onclick="console.log('open dialog')" aria-haspopup="dialog">Show message</button>
    <div id="dialog_layer" class="dialogs">
      <div role="dialog" id="dialog1" aria-labelledby="dialog1_label" aria-modal="true">
        <h2 id="dialog1_label" class="dialog_label">Important information</h2>
        <p class="dialog_content">some important information here that the user needs to read before continuing</p>
        <div id="dialog-actions">
          <button type="button" onclick="console.log('close dialog')">Close</button>
          <button type="button" onclick="console.log('accept')">Accept</button>
        </div>
      </div>
    </div>
  </body>
</html>` }
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

export default DialogModalFocusFailure;
