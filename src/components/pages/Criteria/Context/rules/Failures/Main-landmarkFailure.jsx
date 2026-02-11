import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context : Main Landmark - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="main-landmark-failure-1">
          <div>
            <h1>Main page heading</h1>
            <p>This div lacks the role="main" attribute.</p>
          </div>
        </div>

        <div className="list-item" id="main-landmark-failure-2">
          <section>
            <h1>Welcome to Our Website</h1>
            <p>Section used instead of main or role="main".</p>
          </section>
        </div>

        <div className="list-item" id="main-landmark-failure-3">
          <div>
            <h1>Main Content Overview</h1>
            <p>No main tag or role="main" applied to this div.</p>
          </div>
        </div>

        <div className="list-item" id="main-landmark-failure-4">
          <article>
            <h1>Main Article Title</h1>
            <p>Article used without appropriate landmark tagging.</p>
          </article>
        </div>

        <div className="list-item" id="main-landmark-failure-5">
          <header>
            <h1>Main Header</h1>
            <p>Header used without a main tag or role="main".</p>
          </header>
        </div>

        <div className="list-item" id="main-landmark-failure-6">
          <section>
            <h1>Primary Content Area</h1>
            <p>Section lacks role="main" or main tag.</p>
          </section>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
