import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard : Fake Hidden Interactive - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="fake-hidden-success-1">
          <button style={{ display: 'none' }}>Hidden Button</button>
        </div>
        <div className="list-item" id="fake-hidden-success-2">
          <button style={{ visibility: 'hidden' }}>Hidden Button</button>
        </div>
        <div className="list-item" id="fake-hidden-success-3">
          <div aria-hidden="true">
            <button>Visually Hidden, Not Focusable</button>
          </div>
        </div>
        <div className="list-item" id="fake-hidden-success-4">
          <button tabIndex="-1">Hidden via tabindex</button>
        </div>
        <div className="list-item" id="fake-hidden-success-5">
          <input type="text" style={{ display: 'none' }} />
        </div>
        <div className="list-item" id="fake-hidden-success-6">
          <select style={{ visibility: 'hidden' }}>
            <option>Option 1</option>
          </select>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
