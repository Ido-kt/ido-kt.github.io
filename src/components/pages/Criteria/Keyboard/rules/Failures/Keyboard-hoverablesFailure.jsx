import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard : Keyboard Hoverables - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="keyboardHoverables-failure-1">
          <div className="hoverable-div">
            Only visible on mouse hover
          </div>
        </div>

        <div className="list-item" id="keyboardHoverables-failure-2">
          <button className="hoverable-button">
            No focus behavior added
          </button>
        </div>

        <div className="list-item" id="keyboardHoverables-failure-3">
          <div className="menu-item">
            Appears on hover, no keyboard support
          </div>
        </div>

        <div className="list-item" id="keyboardHoverables-failure-4">
          <a href="#" className="hoverable-link">
            No keyboard focus support
          </a>
        </div>

        <div className="list-item" id="keyboardHoverables-failure-5">
          <div className="hoverable-content">
            Requires mouse to display content
          </div>
        </div>

        <div className="list-item" id="keyboardHoverables-failure-6">
          <div className="hover-only-item">
            Cannot be accessed via keyboard
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);