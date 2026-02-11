import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context: Active Tab - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="rule-success-1">
          <button role="tab" aria-selected="true">Tab 1</button>
          <button role="tab" aria-selected="false">Tab 2</button>
          <button role="tab" aria-selected="false">Tab 3</button>
        </li>
        <li className="list-item" id="rule-success-2">
          <div role="tablist">
            <div role="tab" aria-selected="true">Overview</div>
            <div role="tab" aria-selected="false">Details</div>
            <div role="tab" aria-selected="false">Reviews</div>
          </div>
        </li>
        <li className="list-item" id="rule-success-3">
          <button role="tab" aria-selected="false">Home</button>
          <button role="tab" aria-selected="true">Profile</button>
          <button role="tab" aria-selected="false">Settings</button>
        </li>
        <li className="list-item" id="rule-success-4">
          <div role="tablist">
            <button role="tab" aria-selected="true">Tab A</button>
            <button role="tab" aria-selected="false">Tab B</button>
          </div>
        </li>
        <li className="list-item" id="rule-success-5">
          <div role="tablist">
            <button role="tab" aria-selected="false">First</button>
            <button role="tab" aria-selected="true">Second</button>
          </div>
        </li>
        <li className="list-item" id="rule-success-6">
          <div role="tablist">
            <button role="tab" aria-selected="false">Dashboard</button>
            <button role="tab" aria-selected="true">Reports</button>
            <button role="tab" aria-selected="false">Settings</button>
          </div>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
