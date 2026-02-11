import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Carousels: Carousel Pausing - Failure";

const CarouselPausingFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="carousel-pausing-failure-1">
          <div className="carousel" autoPlay>
            <div className="slide">Slide 1</div>
            <div className="slide">Slide 2</div>
            <div className="slide">Slide 3</div>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-failure-2">
          <div className="carousel">
            <div className="slide">Product 1</div>
            <div className="slide">Product 2</div>
            <div className="slide">Product 3</div>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-failure-3">
          <div className="carousel" data-autoplay="true">
            <div className="slide">Content 1</div>
            <div className="slide">Content 2</div>
            <div className="slide">Content 3</div>
            <button>Stop</button>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-failure-4">
          <div className="carousel">
            <div className="slide">Item 1</div>
            <div className="slide">Item 2</div>
            <div className="slide">Item 3</div>
            <div className="controls">
              <span>Pause</span>
            </div>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-failure-5">
          <div className="carousel">
            <div className="slide">Slide A</div>
            <div className="slide">Slide B</div>
            <div className="slide">Slide C</div>
            <a href="#">Pause Carousel</a>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Auto-playing carousels must include a keyboard-accessible pause button with proper labeling. Without a pause control, carousel animations can interfere with assistive technology and cause disorientation for keyboard navigation users."
    fixSteps={[
      "Add a keyboard-accessible pause button to auto-playing carousels",
      "Ensure the pause button is properly labeled (visible or screen-reader-only)",
      "Make the button keyboard focusable and operable",
      "Button can be hidden visually but must be accessible on focus",
      "Test with keyboard navigation to verify pause functionality works"
    ]}
  />
);

export default CarouselPausingFailure;

