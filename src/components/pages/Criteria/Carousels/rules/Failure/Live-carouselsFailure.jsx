import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Carousels: Live Carousels - Failure";

const LiveCarouselsFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="live-carousels-failure-1">
          <div className="carousel" aria-live="polite">
            <div className="slide">Slide 1 Content</div>
            <div className="slide">Slide 2 Content</div>
            <div className="slide">Slide 3 Content</div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-failure-2">
          <div className="carousel" aria-live="assertive">
            <div className="slide">Product 1</div>
            <div className="slide">Product 2</div>
            <div className="slide">Product 3</div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-failure-3">
          <div className="carousel" aria-live="true">
            <div className="slide">News Item 1</div>
            <div className="slide">News Item 2</div>
            <div className="slide">News Item 3</div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-failure-4">
          <div role="region" aria-live="polite" className="carousel">
            <div className="slide">Feature 1</div>
            <div className="slide">Feature 2</div>
            <div className="slide">Feature 3</div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-failure-5">
          <div className="carousel">
            <div className="slide" aria-live="polite">Slide 1</div>
            <div className="slide" aria-live="polite">Slide 2</div>
            <div className="slide" aria-live="polite">Slide 3</div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-failure-6">
          <section aria-live="assertive" className="carousel-container">
            <div className="carousel">
              <div className="slide">Content 1</div>
              <div className="slide">Content 2</div>
            </div>
          </section>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Carousels should not be tagged as live regions (aria-live). When carousels are live regions, screen readers will interrupt the user's browsing flow every time a slide changes, even if the user isn't interacting with the carousel. This causes significant disruption and loss of orientation."
    fixSteps={[
      "Remove aria-live attribute from the carousel container",
      "Remove aria-live from individual slide elements",
      "Remove aria-live from any parent containers of the carousel",
      "Ensure carousel changes are only announced when user explicitly interacts",
      "Test with screen readers to verify carousel doesn't interrupt browsing"
    ]}
  />
);

export default LiveCarouselsFailure;

