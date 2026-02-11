import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors : Empty List - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="empty-list-failure-1">
          <ul>
            {/* Empty list with list role still active */}
          </ul>
        </div>
        <div className="list-item" id="empty-list-failure-2">
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="list-item" id="empty-list-failure-3">
          <ol>
            {/* Ordered list role active with no items */}
          </ol>
        </div>
        <div className="list-item" id="empty-list-failure-4">
          <ul>
            <li aria-hidden="true"></li>
          </ul>
        </div>
        <div className="list-item" id="empty-list-failure-5">
          <ul aria-label="List with items">
            {/* Misleading label on an empty list */}
          </ul>
        </div>
        <div className="list-item" id="empty-list-failure-6">
          <ul>
            <li style={{ display: "none" }}></li>
          </ul>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);