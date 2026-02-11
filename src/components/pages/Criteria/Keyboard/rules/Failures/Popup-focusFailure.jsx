import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard : Popup Focus - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <li id="popupFocus-failure-1">
          <button>Open Modal</button>
          <div role="dialog">
            <h2>Modal Without Focus</h2>
            <p>No focus moves to this modal, making it inaccessible to keyboard users.</p>
            <button>Close</button>
          </div>
        </li>

        <li id="popupFocus-failure-2">
          <button>Open Popup</button>
          <div role="dialog">
            <input type="text" placeholder="Focusable element" />
            <button>Submit</button>
            <button>Close</button>
          </div>
          <a href="#">Link outside popup (focus escapes)</a>
        </li>

        <li id="popupFocus-failure-3">
          <button>Trigger Help</button>
          <div>
            <h2>Help Popup</h2>
            <p>No ARIA roles or focus management applied.</p>
            <button>Close</button>
          </div>
        </li>

        <li id="popupFocus-failure-4">
          <button>Open Notification</button>
          <div>
            <p>Notification popup appears, but there is no way to access it with the keyboard.</p>
            <button>Dismiss</button>
          </div>
        </li>

        <li id="popupFocus-failure-5">
          <button>Show Dialog</button>
          <div role="dialog">
            <h2>Dialog Without Focus Trap</h2>
            <p>Focus is not trapped within the dialog and escapes to other page elements.</p>
            <button>Close</button>
          </div>
        </li>

        <li id="popupFocus-failure-6">
          <button>Open Info Popup</button>
          <div>
            <h2>Information Popup</h2>
            <p>This popup is not accessible because it lacks focus management and ARIA roles.</p>
          </div>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);