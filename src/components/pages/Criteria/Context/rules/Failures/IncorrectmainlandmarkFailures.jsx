import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context: Incorrect Main Landmark - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="incorrect-main-landmark-failure-1">
          <main role="presentation">
            <p>Content starts here...</p>
          </main>
        </div>
        
        <div className="list-item" id="incorrect-main-landmark-failure-2">
          <div>
            <main>
              <h1>Improper Main Usage</h1>
              <p>Main content misplaced...</p>
            </main>
          </div>
        </div>
        
        <div className="list-item" id="incorrect-main-landmark-failure-3">
          <main>
            <header>
              <h1>Header inside main</h1>
            </header>
            <p>Content here...</p>
          </main>
        </div>

        <div className="list-item" id="incorrect-main-landmark-failure-4">
          <footer>
            <main>
              <h2>Footer Main Misuse</h2>
              <p>Content misplaced...</p>
            </main>
          </footer>
        </div>

        <div className="list-item" id="incorrect-main-landmark-failure-5">
          <header>
            <h1>Page Title</h1>
          </header>
          <main>
            <div>
              <h2>Improper Wrapping</h2>
              <p>Main content begins here...</p>
            </div>
          </main>
        </div>

        <div className="list-item" id="incorrect-main-landmark-failure-6">
          <main>
            <p>Main role is incorrectly applied to the whole page...</p>
          </main>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
