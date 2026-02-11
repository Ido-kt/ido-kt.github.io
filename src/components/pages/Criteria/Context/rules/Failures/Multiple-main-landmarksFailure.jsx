import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context : Multiple Main Landmarks - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="multiple-main-failure-1">
          <main>
            <h1>Main Content</h1>
          </main>
          <main>
            <h1>Additional Main Content</h1>
          </main>
        </div>
        <div className="list-item" id="multiple-main-failure-2">
          <main>
            <h1>Page Main Content</h1>
          </main>
          <main>
            <h1>Extra Main Section</h1>
          </main>
        </div>
        <div className="list-item" id="multiple-main-failure-3">
          <main>
            <h1>First Primary Content</h1>
          </main>
          <main>
            <h1>Another Main Content</h1>
          </main>
        </div>
        <div className="list-item" id="multiple-main-failure-4">
          <main>
            <h1>Main Section 1</h1>
          </main>
          <main>
            <h1>Main Section 2</h1>
          </main>
        </div>
        <div className="list-item" id="multiple-main-failure-5">
          <main>
            <h1>Primary Section</h1>
          </main>
          <main>
            <h1>Redundant Main Section</h1>
          </main>
        </div>
        <div className="list-item" id="multiple-main-failure-6">
          <main>
            <h1>Main Area 1</h1>
          </main>
          <main>
            <h1>Main Area 2</h1>
          </main>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
