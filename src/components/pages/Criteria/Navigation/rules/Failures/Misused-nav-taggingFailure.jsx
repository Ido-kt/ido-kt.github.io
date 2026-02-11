import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation : Misused Nav Tagging - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="misused-nav-tagging-failure-1">
          <nav>
            <p>This is not navigation content.</p>
          </nav>
        </div>
        <div className="list-item" id="misused-nav-tagging-failure-2">
          <nav>
            <button onClick={() => alert('This is not a nav item.')}>
              Click Me
            </button>
          </nav>
        </div>
        <div className="list-item" id="misused-nav-tagging-failure-3">
          <nav></nav>
        </div>
        <div className="list-item" id="misused-nav-tagging-failure-4">
          <nav>
            <div>Unlabeled, non-functional div inside a nav.</div>
          </nav>
        </div>
        <div className="list-item" id="misused-nav-tagging-failure-5">
          <nav>
            <span>Random text in a nav.</span>
          </nav>
        </div>
        <div className="list-item" id="misused-nav-tagging-failure-6">
          <nav>
            <header>This header is misplaced inside a nav.</header>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);