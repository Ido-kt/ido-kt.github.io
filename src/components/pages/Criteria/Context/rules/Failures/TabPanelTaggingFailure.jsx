import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context: Tab Panel Tagging - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="tabpanel-tagging-failure-1">
          <div role="tablist" aria-label="Tab Example">
            <button role="tab" aria-selected="true">Tab 1</button>
            <button role="tab" aria-selected="false">Tab 2</button>
          </div>
          <div>Content for Tab 1</div>
          <div>Content for Tab 2</div>
        </div>

        <div className="list-item" id="tabpanel-tagging-failure-2">
          <div role="tablist" aria-label="Settings Tabs">
            <button>General</button>
            <button>Advanced</button>
          </div>
          <div>General settings content.</div>
          <div hidden>Advanced settings content.</div>
        </div>

        <div className="list-item" id="tabpanel-tagging-failure-3">
          <div aria-label="Profile Tabs">
            <button role="tab" aria-selected="true" aria-controls="profile-panel1">Overview</button>
            <button role="tab" aria-selected="false" aria-controls="profile-panel2">Details</button>
          </div>
          <div>Overview content.</div>
          <div hidden>Details content.</div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
