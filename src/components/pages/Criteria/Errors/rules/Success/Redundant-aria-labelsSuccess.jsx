import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors : Redundant Aria Labels - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="redundant-aria-success-1">
          <button aria-label="Submit form">✔</button>
        </div>
        <div className="list-item" id="redundant-aria-success-2">
          <input type="text" aria-label="Search here" placeholder="Search here" />
        </div>
        <div className="list-item" id="redundant-aria-success-3">
          <a href="#" aria-label="Download document">Download</a>
        </div>
        <div className="list-item" id="redundant-aria-success-4">
          <div aria-label="Important info">Important Info Here</div>
        </div>
        <div className="list-item" id="redundant-aria-success-5">
          <button aria-label="Open menu">☰</button>
        </div>
        <div className="list-item" id="redundant-aria-success-6">
          <input type="email" aria-label="Enter email" placeholder="Enter email" />
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);