import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Carousels: Carousel Pagination - Success";

const CarouselPaginationSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="carousel-pagination-success-1">
          <div className="carousel">
            <div className="slide">Slide 1</div>
            <div className="slide">Slide 2</div>
            <div className="slide">Slide 3</div>
            <div className="pagination">
              <button type="button" aria-label="Carousel slide 1 of 3">
                ●
              </button>
              <button type="button" aria-label="Carousel slide 2 of 3">
                ●
              </button>
              <button type="button" aria-label="Carousel slide 3 of 3">
                ●
              </button>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-success-2">
          <div className="carousel">
            <div className="slide">Product 1</div>
            <div className="slide">Product 2</div>
            <div className="pagination">
              <button type="button">
                <span className="sr-only">Carousel slide 1 of 2</span>
                ○
              </button>
              <button type="button">
                <span className="sr-only">Carousel slide 2 of 2</span>
                ○
              </button>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-success-3">
          <div className="carousel">
            <div className="slide">Content 1</div>
            <div className="slide">Content 2</div>
            <div className="slide">Content 3</div>
            <div className="pagination">
              <button type="button" aria-label="Go to slide 1 of 3">
                1
              </button>
              <button type="button" aria-label="Go to slide 2 of 3">
                2
              </button>
              <button type="button" aria-label="Go to slide 3 of 3">
                3
              </button>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-success-4">
          <div className="carousel">
            <div className="slide">Item 1</div>
            <div className="slide">Item 2</div>
            <div className="pagination">
              <button type="button" role="button" aria-label="Carousel slide 1 of 2">
                ●
              </button>
              <button type="button" role="button" aria-label="Carousel slide 2 of 2">
                ●
              </button>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pagination-success-5">
          <div className="carousel">
            <div className="slide">Slide A</div>
            <div className="slide">Slide B</div>
            <div className="slide">Slide C</div>
            <div className="pagination">
              <button type="button">
                <span className="sr-only">View slide 1 of 3</span>
                <span aria-hidden="true">●</span>
              </button>
              <button type="button">
                <span className="sr-only">View slide 2 of 3</span>
                <span aria-hidden="true">●</span>
              </button>
              <button type="button">
                <span className="sr-only">View slide 3 of 3</span>
                <span aria-hidden="true">●</span>
              </button>
            </div>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Carousel pagination buttons should be native button elements or have role='button', and must include descriptive labels (aria-label or screen-reader-only text) indicating which slide they activate. This allows screen reader users to navigate the carousel effectively."
    bestPractices={[
      "Use native button elements for pagination indicators",
      "Add aria-label with slide number (e.g., 'Carousel slide 1 of 3')",
      "Alternatively, use screen-reader-only text with sr-only class",
      "Ensure pagination buttons are keyboard accessible",
      "Test with screen readers to verify proper announcement"
    ]}
  />
);

export default CarouselPaginationSuccess;

