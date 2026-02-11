import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard: Broken Tabindex - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="broken-tabindex-success-1">
          <button tabIndex="0">Click Me</button>
        </div>
        <div className="list-item" id="broken-tabindex-success-2">
          <a href="#" tabIndex="0">Link</a>
        </div>
        <div className="list-item" id="broken-tabindex-success-3">
          <input type="text" tabIndex="0" placeholder="Enter text" />
        </div>
        <div className="list-item" id="broken-tabindex-success-4">
          <div tabIndex="-1">Non-navigable element</div>
        </div>
        <div className="list-item" id="broken-tabindex-success-5">
          <textarea tabIndex="0" placeholder="Enter description"></textarea>
        </div>
        <div className="list-item" id="broken-tabindex-success-6">
          <select tabIndex="0">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);