import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard: Noticeable Focus - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="keyboard-failure-1">
          <button>Button without focus styling</button>
        </div>
        <div className="list-item" id="keyboard-failure-2">
          <a href="#">Link without focus styling</a>
        </div>
        <div className="list-item" id="keyboard-failure-3">
          <input type="text" placeholder="Input field no focus" />
        </div>
        <div className="list-item" id="keyboard-failure-4">
          <textarea placeholder="Textarea without focus"></textarea>
        </div>
        <div className="list-item" id="keyboard-failure-5">
          <select>
            <option>Dropdown without focus</option>
          </select>
        </div>
        <div className="list-item" id="keyboard-failure-6">
          <div tabIndex={0}>Div element without focus</div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);