import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Interactive Elements: Enter Clickability - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="enter-clickability-success-1">
          <button>Click Me</button>
        </div>
        <div className="list-item" id="enter-clickability-success-2">
          <a href="https://example.com">Visit Example</a>
        </div>
        <div className="list-item" id="enter-clickability-success-3">
          <input type="button" value="Submit" />
        </div>
        <div className="list-item" id="enter-clickability-success-4">
          <textarea aria-label="Editable Text Area">Editable Content</textarea>
        </div>
        <div className="list-item" id="enter-clickability-success-5">
          <div role="button" tabIndex={0} onClick={() => alert("Action performed")}>
            Custom Button
          </div>
        </div>
        <div className="list-item" id="enter-clickability-success-6">
          <select aria-label="Dropdown Options">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);