import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context: Tab Panel Tagging - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="tabpanel-tagging-success-1">
          <div role="tablist" aria-label="Tab Example">
            <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Tab 1</button>
            <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">Tab 2</button>
          </div>
          <div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
          <div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>
        </div>

        <div className="list-item" id="tabpanel-tagging-success-2">
          <div role="tablist" aria-label="Settings Tabs">
            <button role="tab" aria-selected="true" aria-controls="settings-panel1" id="settings-tab1">General</button>
            <button role="tab" aria-selected="false" aria-controls="settings-panel2" id="settings-tab2">Advanced</button>
          </div>
          <div role="tabpanel" id="settings-panel1" aria-labelledby="settings-tab1">General settings content.</div>
          <div role="tabpanel" id="settings-panel2" aria-labelledby="settings-tab2" hidden>Advanced settings content.</div>
        </div>

        <div className="list-item" id="tabpanel-tagging-success-3">
          <div role="tablist" aria-label="Profile Tabs">
            <button role="tab" aria-selected="true" aria-controls="profile-panel1" id="profile-tab1">Overview</button>
            <button role="tab" aria-selected="false" aria-controls="profile-panel2" id="profile-tab2">Details</button>
          </div>
          <div role="tabpanel" id="profile-panel1" aria-labelledby="profile-tab1">Overview content.</div>
          <div role="tabpanel" id="profile-panel2" aria-labelledby="profile-tab2" hidden>Details content.</div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
