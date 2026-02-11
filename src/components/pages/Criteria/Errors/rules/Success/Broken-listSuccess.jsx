import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "{Errors}: Broken List - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="broken-list-success-1">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
        <div className="list-item" id="broken-list-success-2">
          <ol>
            <li>Step 1</li>
            <li>Step 2</li>
          </ol>
        </div>
        <div className="list-item" id="broken-list-success-3">
          <ul>
            <li>
              Fruits
              <ul>
                <li>Apple</li>
                <li>Banana</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="list-item" id="broken-list-success-4">
          <ol>
            <li>Introduction</li>
            <li>Body</li>
            <li>Conclusion</li>
          </ol>
        </div>
        <div className="list-item" id="broken-list-success-5">
          <ul>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
          </ul>
        </div>
        <div className="list-item" id="broken-list-success-6">
          <ol>
            <li>First Step</li>
            <li>Second Step</li>
          </ol>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);