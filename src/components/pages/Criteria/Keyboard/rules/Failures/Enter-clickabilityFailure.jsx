import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Interactive Elements: Enter Clickability - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="enter-clickability-failure-1">
          <div onClick={() => alert("No Keyboard Access")}>Not Operable</div>
        </div>
        <div className="list-item" id="enter-clickability-failure-2">
          <span onClick={() => alert("No Keyboard Support")}>Clickable Span</span>
        </div>
        <div className="list-item" id="enter-clickability-failure-3">
          <p onClick={() => alert("No Keyboard Support")}>Clickable Paragraph</p>
        </div>
        <div className="list-item" id="enter-clickability-failure-4">
          <img src="example.png" alt="Clickable Image" onClick={() => alert("No Keyboard Access")} />
        </div>
        <div className="list-item" id="enter-clickability-failure-5">
          <div tabIndex={-1} onClick={() => alert("Not Focusable with Tab")}>Non-Focusable</div>
        </div>
        <div className="list-item" id="enter-clickability-failure-6">
          <ul onClick={() => alert("No Keyboard Access")}>
            <li>Non-Keyboard Accessible List</li>
          </ul>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);