import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard : Skip Links - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="skipLinks-failure-1">
          <a className="skip-link" tabIndex="-1">
            Skip to content
          </a>
        </div>
        <div className="list-item" id="skipLinks-failure-2">
          <a href="#content">Skip to content</a>
        </div>
        <div className="list-item" id="skipLinks-failure-3">
          <a href="#invalidId" className="skip-link" tabIndex="0">
            Skip to non-existent section
          </a>
        </div>
        <div className="list-item" id="skipLinks-failure-4">
          <a href="#main-content" className="skip-link" style={{ opacity: "0" }}>
            Skip to main content
          </a>
        </div>
        <div className="list-item" id="skipLinks-failure-5">
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
        </div>
        <div className="list-item" id="skipLinks-failure-6">
          <a href="#" className="skip-link" tabIndex="0">
            Broken Skip Link
          </a>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);