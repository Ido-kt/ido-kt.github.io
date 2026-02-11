import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Carousels: Carousel Pausing - Success";

const CarouselPausingSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="carousel-pausing-success-1">
          <div className="carousel" autoPlay>
            <div className="slide">Slide 1</div>
            <div className="slide">Slide 2</div>
            <div className="slide">Slide 3</div>
            <button type="button" className="pause-button">
              Pause
            </button>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-success-2">
          <div className="carousel">
            <div className="slide">Product 1</div>
            <div className="slide">Product 2</div>
            <div className="slide">Product 3</div>
            <button type="button" aria-label="Pause carousel">
              Pause
            </button>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-success-3">
          <div className="carousel" data-autoplay="true">
            <div className="slide">Content 1</div>
            <div className="slide">Content 2</div>
            <div className="slide">Content 3</div>
            <button
              type="button"
              className="pause-button"
              style={{ opacity: 0 }}
              onFocus={(e) => (e.target.style.opacity = 1)}
              onBlur={(e) => (e.target.style.opacity = 0)}
            >
              Pause Carousel
            </button>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-success-4">
          <div className="carousel">
            <div className="slide">Item 1</div>
            <div className="slide">Item 2</div>
            <div className="slide">Item 3</div>
            <button type="button" role="button">
              <span className="sr-only">Pause</span>
              <span aria-hidden="true">⏸</span>
            </button>
          </div>
        </div>
        <div className="list-item" id="carousel-pausing-success-5">
          <div className="carousel">
            <div className="slide">Slide A</div>
            <div className="slide">Slide B</div>
            <div className="slide">Slide C</div>
            <button
              type="button"
              className="pause-button"
              style={{
                position: "absolute",
                opacity: 0,
                clip: "rect(0, 0, 0, 0)",
              }}
              onFocus={(e) => {
                e.target.style.opacity = 1;
                e.target.style.clip = "auto";
              }}
            >
              Pause Carousel
            </button>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Auto-playing carousels must include a keyboard-accessible pause button. The button should be properly labeled and can be hidden visually but must be accessible when focused. This allows users to stop carousel animations that may interfere with assistive technology."
    bestPractices={[
      "Include a keyboard-accessible pause button for auto-playing carousels",
      "Label the button clearly (visible text or aria-label)",
      "Button can be visually hidden but must be focusable",
      "Use opacity: 0 and show on focus for hidden buttons",
      "Test with keyboard navigation to verify pause functionality"
    ]}
  />
);

export default CarouselPausingSuccess;

