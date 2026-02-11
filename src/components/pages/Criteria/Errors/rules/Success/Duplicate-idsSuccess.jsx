import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors : Duplicate IDs - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="duplicate-ids-success-1">
          <input type="text" id="unique-id-1" name="username" />
          <label htmlFor="unique-id-1">Username</label>
        </div>
        <div className="list-item" id="duplicate-ids-success-2">
          <input type="text" id="unique-id-2" name="email" />
          <label htmlFor="unique-id-2">Email</label>
        </div>
        <div className="list-item" id="duplicate-ids-success-3">
          <button id="unique-id-3">Click Me</button>
        </div>
        <div className="list-item" id="duplicate-ids-success-4">
          <section id="unique-id-4">Section Content</section>
        </div>
        <div className="list-item" id="duplicate-ids-success-5">
          <form id="unique-id-5">
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="list-item" id="duplicate-ids-success-6">
          <nav id="unique-id-6">
            <ul>
              <li><a href="#unique-id-4">Go to Section</a></li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);