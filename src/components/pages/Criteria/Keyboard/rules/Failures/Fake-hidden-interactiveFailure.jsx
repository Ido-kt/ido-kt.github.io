import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard : Fake Hidden Interactive - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="fake-hidden-failure-1">
          <button style={{ opacity: 0 }}>Invisible Button</button>
        </div>
        <div className="list-item" id="fake-hidden-failure-2">
          <button style={{ position: 'absolute', left: '-9999px' }}>
            Off-Screen Button
          </button>
        </div>
        <div className="list-item" id="fake-hidden-failure-3">
          <div style={{ height: 0, overflow: 'hidden' }}>
            <button>Visually Hidden but Focusable</button>
          </div>
        </div>
        <div className="list-item" id="fake-hidden-failure-4">
          <div style={{ clip: 'rect(0 0 0 0)', position: 'absolute' }}>
            <button>Clipped Button</button>
          </div>
        </div>
        <div className="list-item" id="fake-hidden-failure-5">
          <input
            type="text"
            style={{ opacity: 0, position: 'absolute' }}
            defaultValue="Invisible Input"
          />
        </div>
        <div className="list-item" id="fake-hidden-failure-6">
          <select style={{ position: 'absolute', left: '-9999px' }}>
            <option>Option 1</option>
          </select>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);