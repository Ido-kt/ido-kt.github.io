import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context: Incorrect Main Landmark - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="incorrect-main-landmark-success-1">
          <main>
            <h1>Welcome to Our Website</h1>
            <p>Main content starts here...</p>
          </main>
        </div>
        
        <div className="list-item" id="incorrect-main-landmark-success-2">
          <header>
            <h1>Site Header</h1>
          </header>
          <main>
            <h2>About Us</h2>
            <p>Details about our mission...</p>
          </main>
        </div>
        
        <div className="list-item" id="incorrect-main-landmark-success-3">
          <main>
            <article>
              <h2>Latest News</h2>
              <p>Breaking news content here...</p>
            </article>
          </main>
        </div>

        <div className="list-item" id="incorrect-main-landmark-success-4">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </nav>
          <main>
            <h2>Services</h2>
            <p>Description of services...</p>
          </main>
        </div>

        <div className="list-item" id="incorrect-main-landmark-success-5">
          <header>
            <h1>Company Header</h1>
          </header>
          <main>
            <section>
              <h2>Features</h2>
              <p>Details about features...</p>
            </section>
          </main>
        </div>

        <div className="list-item" id="incorrect-main-landmark-success-6">
          <main>
            <h1>Introduction</h1>
            <p>Beginning of main content here...</p>
          </main>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
