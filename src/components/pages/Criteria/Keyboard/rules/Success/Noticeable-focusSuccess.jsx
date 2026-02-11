import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard: Noticeable Focus - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="keyboard-success-1">
          <button style={{ outline: "solid 2px #6495ED", outlineOffset: "5px" }}>Button with noticeable focus</button>
        </div>
        <div className="list-item" id="keyboard-success-2">
          <a href="#" style={{ outline: "solid 2px #6495ED", outlineOffset: "5px" }}>Link with keyboard focus</a>
        </div>
        <div className="list-item" id="keyboard-success-3">
          <input type="text" style={{ outline: "solid 2px #6495ED", outlineOffset: "5px" }} placeholder="Input field focus" />
        </div>
        <div className="list-item" id="keyboard-success-4">
          <textarea style={{ outline: "solid 2px #6495ED", outlineOffset: "5px" }} placeholder="Textarea with focus"></textarea>
        </div>
        <div className="list-item" id="keyboard-success-5">
          <select style={{ outline: "solid 2px #6495ED", outlineOffset: "5px" }}>
            <option>Dropdown with focus</option>
          </select>
        </div>
        <div className="list-item" id="keyboard-success-6">
          <div
            tabIndex={0}
            style={{ outline: "solid 2px #6495ED", outlineOffset: "5px" }}
          >
            Div element with focus
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);