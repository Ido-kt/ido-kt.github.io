import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context : Main Landmark - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="main-landmark-success-1">
          <main>
            <h1>Main page heading</h1>
            <p>This is the primary content area.</p>
          </main>
        </div>

        <div className="list-item" id="main-landmark-success-2">
          <div role="main">
            <h1>Welcome to Our Website</h1>
            <p>Content focused on the main topic of the page.</p>
          </div>
        </div>

        <div className="list-item" id="main-landmark-success-3">
          <main>
            <section>
              <h1>Main Content Overview</h1>
              <p>Detailed explanation of the main topic.</p>
            </section>
          </main>
        </div>

        <div className="list-item" id="main-landmark-success-4">
          <div role="main">
            <article>
              <h1>Main Article Title</h1>
              <p>Key content for readers.</p>
            </article>
          </div>
        </div>

        <div className="list-item" id="main-landmark-success-5">
          <main>
            <header>
              <h1>Main Header</h1>
              <p>Introductory text for the primary content area.</p>
            </header>
          </main>
        </div>

        <div className="list-item" id="main-landmark-success-6">
          <div role="main">
            <h1>Primary Content Area</h1>
            <p>Main content is marked properly with role.</p>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
