import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors : Duplicate IDs - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="duplicate-ids-failure-1">
          <input type="text" id="duplicate-id" name="username" />
          <label htmlFor="duplicate-id">Username</label>
          <input type="text" id="duplicate-id" name="email" />
          <label htmlFor="duplicate-id">Email</label>
        </div>
        <div className="list-item" id="duplicate-ids-failure-2">
          <button id="duplicate-id">Button 1</button>
          <button id="duplicate-id">Button 2</button>
        </div>
        <div className="list-item" id="duplicate-ids-failure-3">
          <section id="duplicate-id">Section 1</section>
          <section id="duplicate-id">Section 2</section>
        </div>
        <div className="list-item" id="duplicate-ids-failure-4">
          <form id="duplicate-id">
            <input type="text" name="field1" />
          </form>
          <form id="duplicate-id">
            <input type="text" name="field2" />
          </form>
        </div>
        <div className="list-item" id="duplicate-ids-failure-5">
          <nav id="duplicate-id">
            <ul>
              <li>Item 1</li>
            </ul>
          </nav>
          <footer id="duplicate-id">
            Footer Content
          </footer>
        </div>
        <div className="list-item" id="duplicate-ids-failure-6">
          <div id="duplicate-id">
            Nested Div 1
          </div>
          <div id="duplicate-id">
            Nested Div 2
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);