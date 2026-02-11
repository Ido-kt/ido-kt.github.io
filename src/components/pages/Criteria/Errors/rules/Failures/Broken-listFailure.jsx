import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "{Errors}: Broken List - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="broken-list-failure-1">
          <li>Item 1</li>
          <li>Item 2</li>
        </div>
        <div className="list-item" id="broken-list-failure-2">
          <li>Step 1</li>
          <li>Step 2</li>
        </div>
        <div className="list-item" id="broken-list-failure-3">
          <li>
            Fruits
            <li>Apple</li>
            <li>Banana</li>
          </li>
        </div>
        <div className="list-item" id="broken-list-failure-4">
          <li>Introduction</li>
          <li>Body</li>
          <li>Conclusion</li>
        </div>
        <div className="list-item" id="broken-list-failure-5">
          <li>First Item</li>
          <li>Second Item</li>
          <li>Third Item</li>
        </div>
        <div className="list-item" id="broken-list-failure-6">
          <li>First Step</li>
          <li>Second Step</li>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);