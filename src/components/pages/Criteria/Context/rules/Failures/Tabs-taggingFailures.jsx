import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context : Tabs Tagging - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="tabs-failure-1">
          <div>
            <button>Tab 1</button>
            <button>Tab 2</button>
          </div>
          <div>Content for Tab 1</div>
          <div>Content for Tab 2</div>
        </div>
        <div className="list-item" id="tabs-failure-2">
          <div>
            <a href="#">General</a>
            <a href="#">Privacy</a>
          </div>
          <div>General Settings Content</div>
          <div>Privacy Settings Content</div>
        </div>
        <div className="list-item" id="tabs-failure-3">
          <div>
            <span>Overview</span>
            <span>Details</span>
          </div>
          <div>Profile Overview</div>
          <div>Profile Details</div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
