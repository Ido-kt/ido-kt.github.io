import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context: Active Tab - Failure";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="rule-failure-1">
          <button role="tab">Tab 1</button>
          <button role="tab" aria-selected="true">Tab 2</button>
          <button role="tab">Tab 3</button>
        </li>
        <li className="list-item" id="rule-failure-2">
          <div role="tablist">
            <div role="tab" aria-label="overview">Overview</div>
            <div role="tab" aria-label="details">Details</div>
            <div role="tab" aria-label="reviews" aria-selected="true">Reviews</div>
          </div>
        </li>
        <li className="list-item" id="rule-failure-3">
          <button>Home</button>
          <button role="tab" aria-selected="true">Profile</button>
          <button role="tab">Settings</button>
        </li>
        <li className="list-item" id="rule-failure-4">
          <div role="tablist">
            <button role="tab" aria-selected="false">Tab A</button>
            <button>Tab B</button>
          </div>
        </li>
        <li className="list-item" id="rule-failure-5">
          <div role="tablist">
            <button role="tab" aria-selected="false">First</button>
            <button role="tab">Second</button>
          </div>
        </li>
        <li className="list-item" id="rule-failure-6">
          <div role="tablist">
            <button role="tab">Dashboard</button>
            <button aria-selected="true">Reports</button>
            <button role="tab">Settings</button>
          </div>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
