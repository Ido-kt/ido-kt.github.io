import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors : Empty List - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="empty-list-success-1">
          <div role="none">
            {/* The list role is removed to ensure no empty list is present */}
          </div>
        </div>
        <div className="list-item" id="empty-list-success-2">
          <ul aria-hidden="true">
            {/* The empty list is hidden from screen readers */}
          </ul>
        </div>
        <div className="list-item" id="empty-list-success-3">
          <div role="none" aria-label="No items available">
            {/* Explanation provided instead of an empty list */}
          </div>
        </div>
        <div className="list-item" id="empty-list-success-4">
          <div aria-hidden="true">
            {/* Placeholder message for empty content */}
          </div>
        </div>
        <div className="list-item" id="empty-list-success-5">
          <div role="none" tabIndex="-1">
            {/* Removed interaction with an empty list */}
          </div>
        </div>
        <div className="list-item" id="empty-list-success-6">
          <div aria-hidden="true">
            {/* Hidden content indicating no list */}
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);