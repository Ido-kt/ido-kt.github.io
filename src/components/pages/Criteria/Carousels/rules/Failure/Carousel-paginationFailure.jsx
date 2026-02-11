import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Carousels: Carousel Pagination - Failure";

const CarouselPaginationFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="carousel-pagination-failure-1">
          <div className="carousel">
            <div className="slide">Slide 1</div>
            <div className="slide">Slide 2</div>
            <div className="slide">Slide 3</div>
            <div className="pagination">
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-failure-2">
          <div className="carousel">
            <div className="slide">Product 1</div>
            <div className="slide">Product 2</div>
            <div className="pagination">
              <div>○</div>
              <div>○</div>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-failure-3">
          <div className="carousel">
            <div className="slide">Content 1</div>
            <div className="slide">Content 2</div>
            <div className="slide">Content 3</div>
            <div className="pagination">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-failure-4">
          <div className="carousel">
            <div className="slide">Item 1</div>
            <div className="slide">Item 2</div>
            <div className="pagination">
              <span role="button">●</span>
              <span role="button">●</span>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-failure-5">
          <div className="carousel">
            <div className="slide">Slide A</div>
            <div className="slide">Slide B</div>
            <div className="slide">Slide C</div>
            <div className="pagination">
              <button>●</button>
              <button>●</button>
              <button>●</button>
            </div>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Carousel pagination buttons (dots/indicators) must be properly tagged as buttons and labeled for assistive technology. Without proper labeling, screen reader users cannot identify which slide each button activates."
    fixSteps={[
      "Convert pagination indicators to button elements or add role='button'",
      "Add aria-label describing the slide number (e.g., 'Carousel slide 1 of 3')",
      "Alternatively, use screen-reader-only text with sr-only class",
      "Ensure pagination buttons are keyboard accessible",
      "Test with screen readers to verify pagination buttons are properly announced"
    ]}
  />
);

export default CarouselPaginationFailure;

