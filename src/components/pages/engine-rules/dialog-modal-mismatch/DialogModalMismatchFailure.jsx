import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const DialogModalMismatchFailure = () => {
  const ruleId = "dialog-modal-mismatch";
  const title = `Modal dialogs should be tagged for assistive technology`;
  const description = `Content behind active modal dialogs should not be navigable, otherwise screen reader users may still encounter hidden or unrelated content, disrupting the intended workflow and making it harder to focus on the dialog’s purpose.`;
  const helpText = `Add aria-modal="true" alongside role="dialog" to indicate to screen readers that the dialog is modal and that content outside of it should be treated as inactive. Screen readers will recognize this and adjust their behavior to keep the user’s focus inside the dialog, providing a clearer and more predictable experience.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "70 precents height backdrop", content: `<html lang="en">
<head>
    <meta name="aceWebsite" content="accessibe.com">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      /* Backdrop styles */
      .backdrop {
        display: block; /* Visible by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 70%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      }
    
      /* Modal styles */
      .modal {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 40%; /* Width */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        position: relative; /* For positioning the close button */
      }
    
      /* The Close Button */
      .close {
        color: #aaa;
        position: absolute;
        top: 10px;
        right: 25px;
        font-size: 30px;
        font-weight: bold;
      }
    
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    
      /* Button styles inside the modal */
      .modal-button {
        padding: 10px 20px;
        margin: 10px;
        background-color: #008CBA; /* Blue */
        color: white;
        border: none;
        cursor: pointer;
        outline: none;
      }
    
      .modal-button:hover {
        background-color: #005f73;
      }
    
    </style>
    </head>
    <body>
    
      <div>
        <!-- Trigger/Open The Modal Button -->
        <button id="myBtn">Open Modal</button>
        
        <!-- The Modal -->
        <div id="myModal" class="backdrop">
        
          <!-- Modal content -->
          <div class="modal">
            <span class="close">&times;</span>
            <p>Some text in the Modal...</p>
            <button class="modal-button">Button 1</button>
            <button class="modal-button">Button 2</button>
            <button class="modal-button">Button 3</button>
          </div>
        
        </div>
      </div>

</body>
</html>` },
  { filename: "modal no attributes", content: `<body style="margin: 0; height: 100%">
  <div class="ant-modal-mask" style="background-color: rgba(0, 0, 0, 0.45); box-sizing: border-box; height: 100vh; pointer-events: none; position: fixed; z-index: 1000"></div>
  <div tabindex="-1" class="ant-modal-wrap" style="height: 100vh; width: 100vw; overflow: auto; position: fixed; z-index: 1000; background-color: rgba(165, 165, 165, 0.2)">
    <div class="ant-modal" style="position: relative; transform: translate(-50%, -50%); top: 50%; left: 50%; width: 502px; z-index: 900">
      <div tabindex="-1" style="outline: none; block-size: 182px; height: 182px; inline-size: 520px; list-style-type: none; perspective-origin: 260px 91px; pointer-events: none; transform-origin: 260px 91px; width: 520px">
        <div
          class="ant-modal-content"
          style="
            background-clip: padding-box;
            background-color: rgb(255, 255, 255);
            block-size: 182px;
            border-radius: 8px;
            border-end-end-radius: 8px;
            border-end-start-radius: 8px;
            border-start-end-radius: 8px;
            border-start-start-radius: 8px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
            box-sizing: border-box;
            height: 182px;
            inline-size: 520px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            padding-block: 20px;
            padding: 20px 24px;
            padding-inline: 24px;
            perspective-origin: 260px 91px;
            position: relative;
            transform-origin: 260px 91px;
            width: 520px;
          "
        >
          <button
            type="button"
            aria-label="Close"
            class="ant-modal-close"
            style="
              background-color: rgba(0, 0, 0, 0);
              block-size: 32px;
              border-block: 0px none rgba(0, 0, 0, 0.45);
              border-color: rgba(0, 0, 0, 0.45);
              border-radius: 4px;
              border-style: none;
              border-width: 0px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 0px none rgba(0, 0, 0, 0.45);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              inset: 12px 12px 138px 476px;
              caret-color: rgba(0, 0, 0, 0.45);
              color: rgba(0, 0, 0, 0.45);
              column-rule-color: rgba(0, 0, 0, 0.45);
              cursor: pointer;
              display: block;
              font-weight: 600;
              height: 32px;
              inline-size: 32px;
              inset-block: 12px 138px;
              inset-inline: 476px 12px;
              line-height: 13.3333px;
              list-style-type: none;
              outline-color: rgba(0, 0, 0, 0.45);
              perspective-origin: 16px 16px;
              position: absolute;
              text-decoration: none solid rgba(0, 0, 0, 0.45);
              text-emphasis-color: rgba(0, 0, 0, 0.45);
              transform-origin: 16px 16px;
              transition: color 0.2s, background-color 0.2s;
              width: 32px;
              z-index: 1010;
              -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
              -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
            "
          >
            <span
              class="ant-modal-close-x"
              style="
                block-size: 16px;
                border-block-color: rgba(0, 0, 0, 0.45);
                border-color: rgba(0, 0, 0, 0.45);
                border-inline-color: rgba(0, 0, 0, 0.45);
                box-sizing: border-box;
                caret-color: rgba(0, 0, 0, 0.45);
                color: rgba(0, 0, 0, 0.45);
                column-rule-color: rgba(0, 0, 0, 0.45);
                cursor: pointer;
                display: flex;
                font-family: Arial;
                font-size: 16px;
                font-weight: 600;
                height: 16px;
                inline-size: 32px;
                justify-content: center;
                line-height: 32px;
                list-style-type: none;
                outline-color: rgba(0, 0, 0, 0.45);
                perspective-origin: 16px 8px;
                text-align: center;
                text-decoration: none solid rgba(0, 0, 0, 0.45);
                text-emphasis-color: rgba(0, 0, 0, 0.45);
                transform-origin: 16px 8px;
                width: 32px;
                -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
              "
              ><span
                role="img"
                aria-label="close"
                class="anticon anticon-close ant-modal-close-icon"
                style="
                  align-items: center;
                  block-size: 16px;
                  border-block-color: rgba(0, 0, 0, 0.45);
                  border-color: rgba(0, 0, 0, 0.45);
                  border-inline-color: rgba(0, 0, 0, 0.45);
                  box-sizing: border-box;
                  caret-color: rgba(0, 0, 0, 0.45);
                  color: rgba(0, 0, 0, 0.45);
                  column-rule-color: rgba(0, 0, 0, 0.45);
                  cursor: pointer;
                  display: flex;
                  font-family: Arial;
                  font-size: 16px;
                  font-weight: 600;
                  height: 16px;
                  inline-size: 16px;
                  line-height: 0px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  outline-color: rgba(0, 0, 0, 0.45);
                  perspective-origin: 8px 8px;
                  text-align: center;
                  text-decoration: none solid rgba(0, 0, 0, 0.45);
                  text-emphasis-color: rgba(0, 0, 0, 0.45);
                  text-rendering: optimizelegibility;
                  transform-origin: 8px 8px;
                  vertical-align: -2px;
                  width: 16px;
                  -webkit-font-smoothing: antialiased;
                  -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                  -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
                "
                ><svg
                  fill-rule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style="
                    block-size: 16px;
                    border-block-color: rgba(0, 0, 0, 0.45);
                    border-color: rgba(0, 0, 0, 0.45);
                    border-inline-color: rgba(0, 0, 0, 0.45);
                    caret-color: rgba(0, 0, 0, 0.45);
                    color: rgba(0, 0, 0, 0.45);
                    column-rule-color: rgba(0, 0, 0, 0.45);
                    cursor: pointer;
                    display: block;
                    fill: rgba(0, 0, 0, 0.45);
                    fill-rule: evenodd;
                    font-family: Arial;
                    font-size: 16px;
                    font-weight: 600;
                    height: 16px;
                    inline-size: 16px;
                    line-height: 16px;
                    list-style-type: none;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgba(0, 0, 0, 0.45);
                    overflow-clip-margin: content-box;
                    overflow: hidden;
                    perspective-origin: 8px 8px;
                    text-align: center;
                    text-decoration: none solid rgba(0, 0, 0, 0.45);
                    text-emphasis-color: rgba(0, 0, 0, 0.45);
                    text-rendering: optimizelegibility;
                    transform-origin: 8px 8px;
                    width: 16px;
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                    -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
                  "
                >
                  <path
                    d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
                  ></path></svg></span
            ></span>
          </button>
          <div
            class="ant-modal-header"
            style="
              background-color: rgb(255, 255, 255);
              block-size: 24px;
              border-start-end-radius: 8px;
              border-start-start-radius: 8px;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
              box-sizing: border-box;
              height: 24px;
              inline-size: 472px;
              list-style-type: none;
              margin-block-end: 8px;
              margin-bottom: 8px;
              perspective-origin: 236px 12px;
              transform-origin: 236px 12px;
              width: 472px;
            "
          >
            <div class="ant-modal-title" id=":rf:" style="block-size: 24px; box-sizing: border-box; font-size: 16px; font-weight: 600; height: 24px; inline-size: 472px; line-height: 24px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 12px; scroll-margin-block-start: 80px; transform-origin: 236px 12px; width: 472px">
              Basic Modal
            </div>
          </div>
          <div class="ant-modal-body" style="block-size: 66px; box-sizing: border-box; height: 66px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 33px; transform-origin: 236px 33px; width: 472px">
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
          </div>
          <div class="ant-modal-footer" style="block-size: 32px; box-sizing: border-box; height: 32px; inline-size: 472px; list-style-type: none; margin-block-start: 12px; margin-top: 12px; perspective-origin: 236px 16px; text-align: end; transform-origin: 236px 16px; width: 472px">
            <button
              type="button"
              class="ant-btn css-var-R2albtj5cma ant-btn-default"
              style="
                align-items: center;
                background-color: rgb(255, 255, 255);
                block-size: 32px;
                border-block: 1px solid rgb(217, 217, 217);
                border-color: rgb(217, 217, 217);
                border-radius: 6px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 6px;
                border-end-start-radius: 6px;
                border-inline: 1px solid rgb(217, 217, 217);
                border-start-end-radius: 6px;
                border-start-start-radius: 6px;
                inset: 0px;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px 0px;
                caret-color: rgba(0, 0, 0, 0.88);
                color: rgba(0, 0, 0, 0.88);
                gap: 8px;
                column-rule-color: rgba(0, 0, 0, 0.88);
                cursor: pointer;
                display: inline-flex;
                font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                font-size: 14px;
                height: 32px;
                inline-size: 76.375px;
                inset-block: 0px;
                inset-inline: 0px;
                justify-content: center;
                line-height: 22px;
                list-style-type: none;
                outline-color: rgba(0, 0, 0, 0.88);
                padding-block: 4px;
                padding: 4px 15px;
                padding-inline: 15px;
                perspective-origin: 38.1875px 16px;
                position: relative;
                text-decoration: none solid rgba(0, 0, 0, 0.88);
                text-emphasis-color: rgba(0, 0, 0, 0.88);
                text-wrap: nowrap;
                touch-action: manipulation;
                transform-origin: 38.1875px 16px;
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
                width: 76.375px;
                -webkit-text-fill-color: rgba(0, 0, 0, 0.88);
                -webkit-text-stroke-color: rgba(0, 0, 0, 0.88);
              "
            >
              <span
                style="
                  block-size: 22px;
                  cursor: pointer;
                  display: block;
                  height: 22px;
                  inline-size: 44.3906px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  perspective-origin: 22.1875px 11px;
                  text-align: center;
                  text-wrap: nowrap;
                  transform-origin: 22.1953px 11px;
                  user-select: none;
                  width: 44.3906px;
                "
                >Cancel</span
              ></button
            ><button
              type="button"
              class="ant-btn css-var-R2albtj5cma ant-btn-primary"
              style="
                align-items: center;
                background-color: rgb(22, 119, 255);
                block-size: 32px;
                border-block: 1px solid rgba(0, 0, 0, 0);
                border-color: rgba(0, 0, 0, 0);
                border-radius: 6px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 6px;
                border-end-start-radius: 6px;
                border-inline: 1px solid rgba(0, 0, 0, 0);
                border-start-end-radius: 6px;
                border-start-start-radius: 6px;
                inset: 0px;
                box-shadow: rgba(5, 145, 255, 0.1) 0px 2px 0px 0px;
                caret-color: rgb(255, 255, 255);
                color: rgb(255, 255, 255);
                gap: 8px;
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: inline-flex;
                font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                font-size: 14px;
                height: 32px;
                inline-size: 51.7344px;
                inset-block: 0px;
                inset-inline: 0px;
                justify-content: center;
                line-height: 22px;
                list-style-type: none;
                margin-inline-start: 8px;
                margin-left: 8px;
                outline-color: rgb(255, 255, 255);
                padding-block: 4px;
                padding: 4px 15px;
                padding-inline: 15px;
                perspective-origin: 25.8594px 16px;
                position: relative;
                text-decoration: none solid rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                text-wrap: nowrap;
                touch-action: manipulation;
                transform-origin: 25.8672px 16px;
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
                width: 51.7344px;
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
            >
              <span
                style="
                  block-size: 22px;
                  border-block-color: rgb(255, 255, 255);
                  border-color: rgb(255, 255, 255);
                  border-inline-color: rgb(255, 255, 255);
                  caret-color: rgb(255, 255, 255);
                  color: rgb(255, 255, 255);
                  column-rule-color: rgb(255, 255, 255);
                  cursor: pointer;
                  display: block;
                  height: 22px;
                  inline-size: 19.7344px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  outline-color: rgb(255, 255, 255);
                  perspective-origin: 9.85938px 11px;
                  text-align: center;
                  text-decoration: none solid rgb(255, 255, 255);
                  text-emphasis-color: rgb(255, 255, 255);
                  text-wrap: nowrap;
                  transform-origin: 9.86719px 11px;
                  user-select: none;
                  width: 19.7344px;
                  -webkit-text-fill-color: rgb(255, 255, 255);
                  -webkit-text-stroke-color: rgb(255, 255, 255);
                "
                >OK</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>` },
  { filename: "popup no aria modal", content: `<body style="margin: 0; height: 100%">
  <div class="ant-modal-mask" style="background-color: rgba(0, 0, 0, 0.45); box-sizing: border-box; height: 100vh; pointer-events: none; position: fixed; z-index: 1000"></div>
  <div tabindex="-1" class="ant-modal-wrap" style="height: 100vh; width: 100vw; overflow: auto; position: fixed; z-index: 1000; background-color: rgba(165, 165, 165, 0.2)">
    <div role="dialog" class="ant-modal" style="position: relative; transform: translate(-50%, -50%); top: 50%; left: 50%; width: 502px; z-index: 900">
      <div tabindex="-1" style="outline: none; block-size: 182px; height: 182px; inline-size: 520px; list-style-type: none; perspective-origin: 260px 91px; pointer-events: none; transform-origin: 260px 91px; width: 520px">
        <div
          class="ant-modal-content"
          style="
            background-clip: padding-box;
            background-color: rgb(255, 255, 255);
            block-size: 182px;
            border-radius: 8px;
            border-end-end-radius: 8px;
            border-end-start-radius: 8px;
            border-start-end-radius: 8px;
            border-start-start-radius: 8px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
            box-sizing: border-box;
            height: 182px;
            inline-size: 520px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            padding-block: 20px;
            padding: 20px 24px;
            padding-inline: 24px;
            perspective-origin: 260px 91px;
            position: relative;
            transform-origin: 260px 91px;
            width: 520px;
          "
        >
          <button
            type="button"
            aria-label="Close"
            class="ant-modal-close"
            style="
              background-color: rgba(0, 0, 0, 0);
              block-size: 32px;
              border-block: 0px none rgba(0, 0, 0, 0.45);
              border-color: rgba(0, 0, 0, 0.45);
              border-radius: 4px;
              border-style: none;
              border-width: 0px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 0px none rgba(0, 0, 0, 0.45);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              inset: 12px 12px 138px 476px;
              caret-color: rgba(0, 0, 0, 0.45);
              color: rgba(0, 0, 0, 0.45);
              column-rule-color: rgba(0, 0, 0, 0.45);
              cursor: pointer;
              display: block;
              font-weight: 600;
              height: 32px;
              inline-size: 32px;
              inset-block: 12px 138px;
              inset-inline: 476px 12px;
              line-height: 13.3333px;
              list-style-type: none;
              outline-color: rgba(0, 0, 0, 0.45);
              perspective-origin: 16px 16px;
              position: absolute;
              text-decoration: none solid rgba(0, 0, 0, 0.45);
              text-emphasis-color: rgba(0, 0, 0, 0.45);
              transform-origin: 16px 16px;
              transition: color 0.2s, background-color 0.2s;
              width: 32px;
              z-index: 1010;
              -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
              -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
            "
          >
            <span
              class="ant-modal-close-x"
              style="
                block-size: 16px;
                border-block-color: rgba(0, 0, 0, 0.45);
                border-color: rgba(0, 0, 0, 0.45);
                border-inline-color: rgba(0, 0, 0, 0.45);
                box-sizing: border-box;
                caret-color: rgba(0, 0, 0, 0.45);
                color: rgba(0, 0, 0, 0.45);
                column-rule-color: rgba(0, 0, 0, 0.45);
                cursor: pointer;
                display: flex;
                font-family: Arial;
                font-size: 16px;
                font-weight: 600;
                height: 16px;
                inline-size: 32px;
                justify-content: center;
                line-height: 32px;
                list-style-type: none;
                outline-color: rgba(0, 0, 0, 0.45);
                perspective-origin: 16px 8px;
                text-align: center;
                text-decoration: none solid rgba(0, 0, 0, 0.45);
                text-emphasis-color: rgba(0, 0, 0, 0.45);
                transform-origin: 16px 8px;
                width: 32px;
                -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
              "
              ><span
                role="img"
                aria-label="close"
                class="anticon anticon-close ant-modal-close-icon"
                style="
                  align-items: center;
                  block-size: 16px;
                  border-block-color: rgba(0, 0, 0, 0.45);
                  border-color: rgba(0, 0, 0, 0.45);
                  border-inline-color: rgba(0, 0, 0, 0.45);
                  box-sizing: border-box;
                  caret-color: rgba(0, 0, 0, 0.45);
                  color: rgba(0, 0, 0, 0.45);
                  column-rule-color: rgba(0, 0, 0, 0.45);
                  cursor: pointer;
                  display: flex;
                  font-family: Arial;
                  font-size: 16px;
                  font-weight: 600;
                  height: 16px;
                  inline-size: 16px;
                  line-height: 0px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  outline-color: rgba(0, 0, 0, 0.45);
                  perspective-origin: 8px 8px;
                  text-align: center;
                  text-decoration: none solid rgba(0, 0, 0, 0.45);
                  text-emphasis-color: rgba(0, 0, 0, 0.45);
                  text-rendering: optimizelegibility;
                  transform-origin: 8px 8px;
                  vertical-align: -2px;
                  width: 16px;
                  -webkit-font-smoothing: antialiased;
                  -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                  -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
                "
                ><svg
                  fill-rule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style="
                    block-size: 16px;
                    border-block-color: rgba(0, 0, 0, 0.45);
                    border-color: rgba(0, 0, 0, 0.45);
                    border-inline-color: rgba(0, 0, 0, 0.45);
                    caret-color: rgba(0, 0, 0, 0.45);
                    color: rgba(0, 0, 0, 0.45);
                    column-rule-color: rgba(0, 0, 0, 0.45);
                    cursor: pointer;
                    display: block;
                    fill: rgba(0, 0, 0, 0.45);
                    fill-rule: evenodd;
                    font-family: Arial;
                    font-size: 16px;
                    font-weight: 600;
                    height: 16px;
                    inline-size: 16px;
                    line-height: 16px;
                    list-style-type: none;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgba(0, 0, 0, 0.45);
                    overflow-clip-margin: content-box;
                    overflow: hidden;
                    perspective-origin: 8px 8px;
                    text-align: center;
                    text-decoration: none solid rgba(0, 0, 0, 0.45);
                    text-emphasis-color: rgba(0, 0, 0, 0.45);
                    text-rendering: optimizelegibility;
                    transform-origin: 8px 8px;
                    width: 16px;
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                    -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
                  "
                >
                  <path
                    d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
                  ></path></svg></span
            ></span>
          </button>
          <div
            class="ant-modal-header"
            style="
              background-color: rgb(255, 255, 255);
              block-size: 24px;
              border-start-end-radius: 8px;
              border-start-start-radius: 8px;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
              box-sizing: border-box;
              height: 24px;
              inline-size: 472px;
              list-style-type: none;
              margin-block-end: 8px;
              margin-bottom: 8px;
              perspective-origin: 236px 12px;
              transform-origin: 236px 12px;
              width: 472px;
            "
          >
            <div class="ant-modal-title" id=":rf:" style="block-size: 24px; box-sizing: border-box; font-size: 16px; font-weight: 600; height: 24px; inline-size: 472px; line-height: 24px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 12px; scroll-margin-block-start: 80px; transform-origin: 236px 12px; width: 472px">
              Basic Modal
            </div>
          </div>
          <div class="ant-modal-body" style="block-size: 66px; box-sizing: border-box; height: 66px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 33px; transform-origin: 236px 33px; width: 472px">
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
          </div>
          <div class="ant-modal-footer" style="block-size: 32px; box-sizing: border-box; height: 32px; inline-size: 472px; list-style-type: none; margin-block-start: 12px; margin-top: 12px; perspective-origin: 236px 16px; text-align: end; transform-origin: 236px 16px; width: 472px">
            <button
              type="button"
              class="ant-btn css-var-R2albtj5cma ant-btn-default"
              style="
                align-items: center;
                background-color: rgb(255, 255, 255);
                block-size: 32px;
                border-block: 1px solid rgb(217, 217, 217);
                border-color: rgb(217, 217, 217);
                border-radius: 6px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 6px;
                border-end-start-radius: 6px;
                border-inline: 1px solid rgb(217, 217, 217);
                border-start-end-radius: 6px;
                border-start-start-radius: 6px;
                inset: 0px;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px 0px;
                caret-color: rgba(0, 0, 0, 0.88);
                color: rgba(0, 0, 0, 0.88);
                gap: 8px;
                column-rule-color: rgba(0, 0, 0, 0.88);
                cursor: pointer;
                display: inline-flex;
                font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                font-size: 14px;
                height: 32px;
                inline-size: 76.375px;
                inset-block: 0px;
                inset-inline: 0px;
                justify-content: center;
                line-height: 22px;
                list-style-type: none;
                outline-color: rgba(0, 0, 0, 0.88);
                padding-block: 4px;
                padding: 4px 15px;
                padding-inline: 15px;
                perspective-origin: 38.1875px 16px;
                position: relative;
                text-decoration: none solid rgba(0, 0, 0, 0.88);
                text-emphasis-color: rgba(0, 0, 0, 0.88);
                text-wrap: nowrap;
                touch-action: manipulation;
                transform-origin: 38.1875px 16px;
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
                width: 76.375px;
                -webkit-text-fill-color: rgba(0, 0, 0, 0.88);
                -webkit-text-stroke-color: rgba(0, 0, 0, 0.88);
              "
            >
              <span
                style="
                  block-size: 22px;
                  cursor: pointer;
                  display: block;
                  height: 22px;
                  inline-size: 44.3906px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  perspective-origin: 22.1875px 11px;
                  text-align: center;
                  text-wrap: nowrap;
                  transform-origin: 22.1953px 11px;
                  user-select: none;
                  width: 44.3906px;
                "
                >Cancel</span
              ></button
            ><button
              type="button"
              class="ant-btn css-var-R2albtj5cma ant-btn-primary"
              style="
                align-items: center;
                background-color: rgb(22, 119, 255);
                block-size: 32px;
                border-block: 1px solid rgba(0, 0, 0, 0);
                border-color: rgba(0, 0, 0, 0);
                border-radius: 6px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 6px;
                border-end-start-radius: 6px;
                border-inline: 1px solid rgba(0, 0, 0, 0);
                border-start-end-radius: 6px;
                border-start-start-radius: 6px;
                inset: 0px;
                box-shadow: rgba(5, 145, 255, 0.1) 0px 2px 0px 0px;
                caret-color: rgb(255, 255, 255);
                color: rgb(255, 255, 255);
                gap: 8px;
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: inline-flex;
                font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                font-size: 14px;
                height: 32px;
                inline-size: 51.7344px;
                inset-block: 0px;
                inset-inline: 0px;
                justify-content: center;
                line-height: 22px;
                list-style-type: none;
                margin-inline-start: 8px;
                margin-left: 8px;
                outline-color: rgb(255, 255, 255);
                padding-block: 4px;
                padding: 4px 15px;
                padding-inline: 15px;
                perspective-origin: 25.8594px 16px;
                position: relative;
                text-decoration: none solid rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                text-wrap: nowrap;
                touch-action: manipulation;
                transform-origin: 25.8672px 16px;
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
                width: 51.7344px;
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
            >
              <span
                style="
                  block-size: 22px;
                  border-block-color: rgb(255, 255, 255);
                  border-color: rgb(255, 255, 255);
                  border-inline-color: rgb(255, 255, 255);
                  caret-color: rgb(255, 255, 255);
                  color: rgb(255, 255, 255);
                  column-rule-color: rgb(255, 255, 255);
                  cursor: pointer;
                  display: block;
                  height: 22px;
                  inline-size: 19.7344px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  outline-color: rgb(255, 255, 255);
                  perspective-origin: 9.85938px 11px;
                  text-align: center;
                  text-decoration: none solid rgb(255, 255, 255);
                  text-emphasis-color: rgb(255, 255, 255);
                  text-wrap: nowrap;
                  transform-origin: 9.86719px 11px;
                  user-select: none;
                  width: 19.7344px;
                  -webkit-text-fill-color: rgb(255, 255, 255);
                  -webkit-text-stroke-color: rgb(255, 255, 255);
                "
                >OK</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>` },
  { filename: "popup no dialog role", content: `<body style="margin: 0; height: 100%">
  <div class="ant-modal-mask" style="background-color: rgba(0, 0, 0, 0.45); box-sizing: border-box; height: 100vh; pointer-events: none; position: fixed; z-index: 1000"></div>
  <div tabindex="-1" class="ant-modal-wrap" style="height: 100vh; width: 100vw; overflow: auto; position: fixed; z-index: 1000; background-color: rgba(165, 165, 165, 0.2)">
    <div aria-modal="true" class="ant-modal" style="position: relative; transform: translate(-50%, -50%); top: 50%; left: 50%; width: 502px; z-index: 900">
      <div tabindex="-1" style="outline: none; block-size: 182px; height: 182px; inline-size: 520px; list-style-type: none; perspective-origin: 260px 91px; pointer-events: none; transform-origin: 260px 91px; width: 520px">
        <div
          class="ant-modal-content"
          style="
            background-clip: padding-box;
            background-color: rgb(255, 255, 255);
            block-size: 182px;
            border-radius: 8px;
            border-end-end-radius: 8px;
            border-end-start-radius: 8px;
            border-start-end-radius: 8px;
            border-start-start-radius: 8px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
            box-sizing: border-box;
            height: 182px;
            inline-size: 520px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            padding-block: 20px;
            padding: 20px 24px;
            padding-inline: 24px;
            perspective-origin: 260px 91px;
            position: relative;
            transform-origin: 260px 91px;
            width: 520px;
          "
        >
          <button
            type="button"
            aria-label="Close"
            class="ant-modal-close"
            style="
              background-color: rgba(0, 0, 0, 0);
              block-size: 32px;
              border-block: 0px none rgba(0, 0, 0, 0.45);
              border-color: rgba(0, 0, 0, 0.45);
              border-radius: 4px;
              border-style: none;
              border-width: 0px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 0px none rgba(0, 0, 0, 0.45);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              inset: 12px 12px 138px 476px;
              caret-color: rgba(0, 0, 0, 0.45);
              color: rgba(0, 0, 0, 0.45);
              column-rule-color: rgba(0, 0, 0, 0.45);
              cursor: pointer;
              display: block;
              font-weight: 600;
              height: 32px;
              inline-size: 32px;
              inset-block: 12px 138px;
              inset-inline: 476px 12px;
              line-height: 13.3333px;
              list-style-type: none;
              outline-color: rgba(0, 0, 0, 0.45);
              perspective-origin: 16px 16px;
              position: absolute;
              text-decoration: none solid rgba(0, 0, 0, 0.45);
              text-emphasis-color: rgba(0, 0, 0, 0.45);
              transform-origin: 16px 16px;
              transition: color 0.2s, background-color 0.2s;
              width: 32px;
              z-index: 1010;
              -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
              -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
            "
          >
            <span
              class="ant-modal-close-x"
              style="
                block-size: 16px;
                border-block-color: rgba(0, 0, 0, 0.45);
                border-color: rgba(0, 0, 0, 0.45);
                border-inline-color: rgba(0, 0, 0, 0.45);
                box-sizing: border-box;
                caret-color: rgba(0, 0, 0, 0.45);
                color: rgba(0, 0, 0, 0.45);
                column-rule-color: rgba(0, 0, 0, 0.45);
                cursor: pointer;
                display: flex;
                font-family: Arial;
                font-size: 16px;
                font-weight: 600;
                height: 16px;
                inline-size: 32px;
                justify-content: center;
                line-height: 32px;
                list-style-type: none;
                outline-color: rgba(0, 0, 0, 0.45);
                perspective-origin: 16px 8px;
                text-align: center;
                text-decoration: none solid rgba(0, 0, 0, 0.45);
                text-emphasis-color: rgba(0, 0, 0, 0.45);
                transform-origin: 16px 8px;
                width: 32px;
                -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
              "
              ><span
                role="img"
                aria-label="close"
                class="anticon anticon-close ant-modal-close-icon"
                style="
                  align-items: center;
                  block-size: 16px;
                  border-block-color: rgba(0, 0, 0, 0.45);
                  border-color: rgba(0, 0, 0, 0.45);
                  border-inline-color: rgba(0, 0, 0, 0.45);
                  box-sizing: border-box;
                  caret-color: rgba(0, 0, 0, 0.45);
                  color: rgba(0, 0, 0, 0.45);
                  column-rule-color: rgba(0, 0, 0, 0.45);
                  cursor: pointer;
                  display: flex;
                  font-family: Arial;
                  font-size: 16px;
                  font-weight: 600;
                  height: 16px;
                  inline-size: 16px;
                  line-height: 0px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  outline-color: rgba(0, 0, 0, 0.45);
                  perspective-origin: 8px 8px;
                  text-align: center;
                  text-decoration: none solid rgba(0, 0, 0, 0.45);
                  text-emphasis-color: rgba(0, 0, 0, 0.45);
                  text-rendering: optimizelegibility;
                  transform-origin: 8px 8px;
                  vertical-align: -2px;
                  width: 16px;
                  -webkit-font-smoothing: antialiased;
                  -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                  -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
                "
                ><svg
                  fill-rule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style="
                    block-size: 16px;
                    border-block-color: rgba(0, 0, 0, 0.45);
                    border-color: rgba(0, 0, 0, 0.45);
                    border-inline-color: rgba(0, 0, 0, 0.45);
                    caret-color: rgba(0, 0, 0, 0.45);
                    color: rgba(0, 0, 0, 0.45);
                    column-rule-color: rgba(0, 0, 0, 0.45);
                    cursor: pointer;
                    display: block;
                    fill: rgba(0, 0, 0, 0.45);
                    fill-rule: evenodd;
                    font-family: Arial;
                    font-size: 16px;
                    font-weight: 600;
                    height: 16px;
                    inline-size: 16px;
                    line-height: 16px;
                    list-style-type: none;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgba(0, 0, 0, 0.45);
                    overflow-clip-margin: content-box;
                    overflow: hidden;
                    perspective-origin: 8px 8px;
                    text-align: center;
                    text-decoration: none solid rgba(0, 0, 0, 0.45);
                    text-emphasis-color: rgba(0, 0, 0, 0.45);
                    text-rendering: optimizelegibility;
                    transform-origin: 8px 8px;
                    width: 16px;
                    -webkit-font-smoothing: antialiased;
                    -webkit-text-fill-color: rgba(0, 0, 0, 0.45);
                    -webkit-text-stroke-color: rgba(0, 0, 0, 0.45);
                  "
                >
                  <path
                    d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"
                  ></path></svg></span
            ></span>
          </button>
          <div
            class="ant-modal-header"
            style="
              background-color: rgb(255, 255, 255);
              block-size: 24px;
              border-start-end-radius: 8px;
              border-start-start-radius: 8px;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
              box-sizing: border-box;
              height: 24px;
              inline-size: 472px;
              list-style-type: none;
              margin-block-end: 8px;
              margin-bottom: 8px;
              perspective-origin: 236px 12px;
              transform-origin: 236px 12px;
              width: 472px;
            "
          >
            <div class="ant-modal-title" id=":rf:" style="block-size: 24px; box-sizing: border-box; font-size: 16px; font-weight: 600; height: 24px; inline-size: 472px; line-height: 24px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 12px; scroll-margin-block-start: 80px; transform-origin: 236px 12px; width: 472px">
              Basic Modal
            </div>
          </div>
          <div class="ant-modal-body" style="block-size: 66px; box-sizing: border-box; height: 66px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 33px; transform-origin: 236px 33px; width: 472px">
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
            <p style="block-size: 22px; height: 22px; inline-size: 472px; list-style-type: none; overflow-wrap: break-word; perspective-origin: 236px 11px; transform-origin: 236px 11px; width: 472px">Some contents...</p>
          </div>
          <div class="ant-modal-footer" style="block-size: 32px; box-sizing: border-box; height: 32px; inline-size: 472px; list-style-type: none; margin-block-start: 12px; margin-top: 12px; perspective-origin: 236px 16px; text-align: end; transform-origin: 236px 16px; width: 472px">
            <button
              type="button"
              class="ant-btn css-var-R2albtj5cma ant-btn-default"
              style="
                align-items: center;
                background-color: rgb(255, 255, 255);
                block-size: 32px;
                border-block: 1px solid rgb(217, 217, 217);
                border-color: rgb(217, 217, 217);
                border-radius: 6px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 6px;
                border-end-start-radius: 6px;
                border-inline: 1px solid rgb(217, 217, 217);
                border-start-end-radius: 6px;
                border-start-start-radius: 6px;
                inset: 0px;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px 0px;
                caret-color: rgba(0, 0, 0, 0.88);
                color: rgba(0, 0, 0, 0.88);
                gap: 8px;
                column-rule-color: rgba(0, 0, 0, 0.88);
                cursor: pointer;
                display: inline-flex;
                font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                font-size: 14px;
                height: 32px;
                inline-size: 76.375px;
                inset-block: 0px;
                inset-inline: 0px;
                justify-content: center;
                line-height: 22px;
                list-style-type: none;
                outline-color: rgba(0, 0, 0, 0.88);
                padding-block: 4px;
                padding: 4px 15px;
                padding-inline: 15px;
                perspective-origin: 38.1875px 16px;
                position: relative;
                text-decoration: none solid rgba(0, 0, 0, 0.88);
                text-emphasis-color: rgba(0, 0, 0, 0.88);
                text-wrap: nowrap;
                touch-action: manipulation;
                transform-origin: 38.1875px 16px;
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
                width: 76.375px;
                -webkit-text-fill-color: rgba(0, 0, 0, 0.88);
                -webkit-text-stroke-color: rgba(0, 0, 0, 0.88);
              "
            >
              <span
                style="
                  block-size: 22px;
                  cursor: pointer;
                  display: block;
                  height: 22px;
                  inline-size: 44.3906px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  perspective-origin: 22.1875px 11px;
                  text-align: center;
                  text-wrap: nowrap;
                  transform-origin: 22.1953px 11px;
                  user-select: none;
                  width: 44.3906px;
                "
                >Cancel</span
              ></button
            ><button
              type="button"
              class="ant-btn css-var-R2albtj5cma ant-btn-primary"
              style="
                align-items: center;
                background-color: rgb(22, 119, 255);
                block-size: 32px;
                border-block: 1px solid rgba(0, 0, 0, 0);
                border-color: rgba(0, 0, 0, 0);
                border-radius: 6px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 6px;
                border-end-start-radius: 6px;
                border-inline: 1px solid rgba(0, 0, 0, 0);
                border-start-end-radius: 6px;
                border-start-start-radius: 6px;
                inset: 0px;
                box-shadow: rgba(5, 145, 255, 0.1) 0px 2px 0px 0px;
                caret-color: rgb(255, 255, 255);
                color: rgb(255, 255, 255);
                gap: 8px;
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: inline-flex;
                font-family: -apple-system, 'system-ui', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
                font-size: 14px;
                height: 32px;
                inline-size: 51.7344px;
                inset-block: 0px;
                inset-inline: 0px;
                justify-content: center;
                line-height: 22px;
                list-style-type: none;
                margin-inline-start: 8px;
                margin-left: 8px;
                outline-color: rgb(255, 255, 255);
                padding-block: 4px;
                padding: 4px 15px;
                padding-inline: 15px;
                perspective-origin: 25.8594px 16px;
                position: relative;
                text-decoration: none solid rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                text-wrap: nowrap;
                touch-action: manipulation;
                transform-origin: 25.8672px 16px;
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
                width: 51.7344px;
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
            >
              <span
                style="
                  block-size: 22px;
                  border-block-color: rgb(255, 255, 255);
                  border-color: rgb(255, 255, 255);
                  border-inline-color: rgb(255, 255, 255);
                  caret-color: rgb(255, 255, 255);
                  color: rgb(255, 255, 255);
                  column-rule-color: rgb(255, 255, 255);
                  cursor: pointer;
                  display: block;
                  height: 22px;
                  inline-size: 19.7344px;
                  list-style-type: none;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  outline-color: rgb(255, 255, 255);
                  perspective-origin: 9.85938px 11px;
                  text-align: center;
                  text-decoration: none solid rgb(255, 255, 255);
                  text-emphasis-color: rgb(255, 255, 255);
                  text-wrap: nowrap;
                  transform-origin: 9.86719px 11px;
                  user-select: none;
                  width: 19.7344px;
                  -webkit-text-fill-color: rgb(255, 255, 255);
                  -webkit-text-stroke-color: rgb(255, 255, 255);
                "
                >OK</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>` }
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

export default DialogModalMismatchFailure;
