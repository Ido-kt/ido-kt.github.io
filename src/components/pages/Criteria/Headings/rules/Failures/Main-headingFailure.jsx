import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Headings: Main Headings - Failure Examples (Not Triggering Multiple Main Headings Rule)";

export default () => (
  <IssueFailure
    itemContent={
      <>
        {/* Failure Example 1: Non-semantic tag used instead of <h4> */}
        <div className="list-item" id="mainHeading-failure-1-non-semantic">
          <main>
            <div>Main Heading: Welcome to Our Website</div>
          </main>
        </div>

        {/* Failure Example 2: No heading tag at all */}
        <div className="list-item" id="mainHeading-failure-2-missing-heading">
          <main>
            <p>This is the main content, but there is no main heading defined.</p>
          </main>
        </div>

        {/* Failure Example 3: Heading hidden with CSS */}
        <div className="list-item" id="mainHeading-failure-3-hidden-heading">
          <main>
            <h4 style={{ display: "none" }}>Contact Information</h4>
          </main>
        </div>

        {/* Failure Example 4: Decorative <h4> with no meaningful content */}
        <div className="list-item" id="mainHeading-failure-4-decorative-h4">
          <main>
            <h4 aria-hidden="true">---###---</h4>
          </main>
        </div>

        {/* Failure Example 5: Misuse of ARIA roles */}
        <div className="list-item" id="mainHeading-failure-5-wrong-role">
          <main>
            <div role="button" aria-level="1">Our Services</div>
          </main>
        </div>

        {/* Failure Example 6: Using <h4> for styling rather than as a heading */}
        <div className="list-item" id="mainHeading-failure-6-styling-h4">
          <main>
            <h4 style={{ fontSize: "12px", color: "gray" }}>This text is styled, not a true heading</h4>
          </main>
        </div>

        {/* Failure Example 7: Misusing ARIA attributes */}
        <div className="list-item" id="mainHeading-failure-7-wrong-aria">
          <main>
            <div role="heading" aria-level="2">FAQs</div>
          </main>
        </div>

        {/* Failure Example 8: Placeholder text as the main heading */}
        <div className="list-item" id="mainHeading-failure-8-placeholder-text">
          <main>
            <h4>Insert Main Heading Here</h4>
          </main>
        </div>

        {/* Failure Example 9: Main heading is part of a non-primary section */}
        <div className="list-item" id="mainHeading-failure-9-secondary-section">
          <aside>
            <h4>Latest News</h4>
          </aside>
        </div>

        {/* Failure Example 10: Non-unique `id` attribute on main heading */}
        <div className="list-item" id="mainHeading-failure-10-non-unique-id">
          <main>
            <h4 id="duplicate-id">Welcome</h4>
            <section>
              <h2 id="duplicate-id">About Us</h2>
            </section>
          </main>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);