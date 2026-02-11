import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context : Tabs Tagging - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="tabs-success-1">
          <div role="tablist" aria-label="Example Tabs">
            <button role="tab" aria-selected="true" aria-controls="tab1" id="tab1-trigger">Tab 1</button>
            <button role="tab" aria-selected="false" aria-controls="tab2" id="tab2-trigger">Tab 2</button>
          </div>
          <div id="tab1" role="tabpanel" aria-labelledby="tab1-trigger">Content for Tab 1</div>
          <div id="tab2" role="tabpanel" aria-labelledby="tab2-trigger">Content for Tab 2</div>
        </div>
        <div className="list-item" id="tabs-success-2">
          <div role="tablist" aria-label="Settings Tabs">
            <button role="tab" aria-selected="true" aria-controls="settings-tab1" id="settings-tab1-trigger">General</button>
            <button role="tab" aria-selected="false" aria-controls="settings-tab2" id="settings-tab2-trigger">Privacy</button>
          </div>
          <div id="settings-tab1" role="tabpanel" aria-labelledby="settings-tab1-trigger">General Settings Content</div>
          <div id="settings-tab2" role="tabpanel" aria-labelledby="settings-tab2-trigger">Privacy Settings Content</div>
        </div>
        <div className="list-item" id="tabs-success-3">
          <div role="tablist" aria-label="Profile Tabs">
            <button role="tab" aria-selected="true" aria-controls="profile-tab1" id="profile-tab1-trigger">Overview</button>
            <button role="tab" aria-selected="false" aria-controls="profile-tab2" id="profile-tab2-trigger">Details</button>
          </div>
          <div id="profile-tab1" role="tabpanel" aria-labelledby="profile-tab1-trigger">Profile Overview</div>
          <div id="profile-tab2" role="tabpanel" aria-labelledby="profile-tab2-trigger">Profile Details</div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
