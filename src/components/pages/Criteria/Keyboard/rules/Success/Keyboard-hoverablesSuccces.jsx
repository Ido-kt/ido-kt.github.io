import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard : Keyboard Hoverables - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="keyboardHoverables-success-1">
          <button
            className="hoverable-button"
            onFocus={() => console.log("Button focused")}
            onBlur={() => console.log("Focus removed")}
          >
            Button 1
          </button>
        </div>

        <div className="list-item" id="keyboardHoverables-success-2">
          <div
            tabIndex="0"
            className="hoverable-div"
            onFocus={() => console.log("Hover effect triggered")}
            onBlur={() => console.log("Focus removed")}
          >
            Hoverable Div 1
          </div>
        </div>

        <div className="list-item" id="keyboardHoverables-success-3">
          <a
            href="#"
            className="hoverable-link"
            onFocus={() => console.log("Link focused")}
            onBlur={() => console.log("Focus removed")}
          >
            Focusable Link
          </a>
        </div>

        <div className="list-item" id="keyboardHoverables-success-4">
          <div
            tabIndex="0"
            className="menu-item"
            onFocus={() => console.log("Menu focused")}
            onBlur={() => console.log("Focus removed")}
          >
            Menu Item 1
          </div>
        </div>

        <div className="list-item" id="keyboardHoverables-success-5">
          <button
            className="action-button"
            onFocus={() => console.log("Button focused")}
            onBlur={() => console.log("Focus removed")}
          >
            Action Button
          </button>
        </div>

        <div className="list-item" id="keyboardHoverables-success-6">
          <div
            tabIndex="0"
            className="hoverable-item"
            onFocus={() => console.log("Focused")}
            onBlur={() => console.log("Focus removed")}
          >
            Hoverable Div 2
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);