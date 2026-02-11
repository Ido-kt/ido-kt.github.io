import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Carousels: Live Carousels - Success";

const LiveCarouselsSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="live-carousels-success-1">
          <div className="carousel">
            <div className="slide">Slide 1 Content</div>
            <div className="slide">Slide 2 Content</div>
            <div className="slide">Slide 3 Content</div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-success-2">
          <div className="carousel" role="region" aria-label="Product carousel">
            <div className="slide">Product 1</div>
            <div className="slide">Product 2</div>
            <div className="slide">Product 3</div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-success-3">
          <div className="carousel-container">
            <div className="carousel">
              <div className="slide">News Item 1</div>
              <div className="slide">News Item 2</div>
              <div className="slide">News Item 3</div>
            </div>
          </div>
        </div>
        <div className="list-item" id="live-carousels-success-4">
          <section className="carousel-section">
            <div className="carousel">
              <div className="slide">Feature 1</div>
              <div className="slide">Feature 2</div>
              <div className="slide">Feature 3</div>
            </div>
          </section>
        </div>
        <div className="list-item" id="live-carousels-success-5">
          <div className="carousel" aria-label="Image gallery">
            <div className="slide">Image 1</div>
            <div className="slide">Image 2</div>
            <div className="slide">Image 3</div>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Carousels should not use aria-live attributes. Carousel content should only be announced when users explicitly interact with navigation controls, not automatically when slides change. This prevents screen readers from interrupting the user's browsing flow."
    bestPractices={[
      "Never use aria-live on carousel containers or slides",
      "Use role='region' with aria-label for carousel identification if needed",
      "Ensure carousel navigation is keyboard accessible",
      "Only announce slide changes when user explicitly navigates",
      "Test with screen readers to verify no automatic interruptions"
    ]}
  />
);

export default LiveCarouselsSuccess;

