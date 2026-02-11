import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors : Redundant Aria Labels - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="redundant-aria-failure-1">
          <button aria-label="Submit">Submit</button>
        </div>
        <div className="list-item" id="redundant-aria-failure-2">
          <input type="text" aria-label="Search here" placeholder="Search here" />
        </div>
        <div className="list-item" id="redundant-aria-failure-3">
          <a href="#" aria-label="Download">Download</a>
        </div>
        <div className="list-item" id="redundant-aria-failure-4">
          <div aria-label="Important info">Important info</div>
        </div>
        <div className="list-item" id="redundant-aria-failure-5">
          <button aria-label="Open menu">☰ Open Menu</button>
        </div>
        <div className="list-item" id="redundant-aria-failure-6">
          <input type="email" aria-label="Enter your email" placeholder="Enter your email" />
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);