import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Headings: Multiple Main Headings - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="multipleMainHeadings-failure-1-multiple-h1">
          <main>
            <h1>Welcome to Our Website</h1>
            <h1>About Us</h1>
          </main>
        </div>
        <div className="list-item" id="multipleMainHeadings-failure-2-multiple-main">
          <main>
            <h1>Services</h1>
          </main>
          <main>
            <h1 aria-level="1">Contact Information</h1>
          </main>
        </div>
        <div className="list-item" id="multipleMainHeadings-failure-3-duplicate-aria-level">
          <main>
            <h1 aria-level="1">FAQs</h1>
            <h1 aria-level="1">More FAQs</h1>
          </main>
        </div>
        <div className="list-item" id="multipleMainHeadings-failure-4-duplicate-headings">
          <main>
            <h1>History</h1>
            <h1>Team</h1>
          </main>
        </div>
        <div className="list-item" id="multipleMainHeadings-failure-5-duplicate-main-h1">
          <main>
            <h1 aria-level="1">First Heading</h1>
            <h1 aria-level="1">Duplicate Heading</h1>
          </main>
        </div>
        <div className="list-item" id="multipleMainHeadings-failure-6-invisible-h1">
          <main>
            <h1>Welcome</h1>
            <h1>Overview</h1>
          </main>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);