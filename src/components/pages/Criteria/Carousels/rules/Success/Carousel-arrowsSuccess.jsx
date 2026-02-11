import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Carousels: Carousel Arrows - Success";

const SuccessCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "Slide 1: Accessible Example 1",
    "Slide 2: Accessible Example 2",
    "Slide 3: Accessible Example 3",
    "Slide 4: Accessible Example 4",
    "Slide 5: Accessible Example 5",
    "Slide 6: Accessible Example 6",
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <IssueSuccess
      itemContent={
        <>
          <div className="carousel">
            <button
              aria-label="Go to the previous slide"
              onClick={prevSlide}
              className="carousel-button"
            >
              Previous
            </button>
            <div className="carousel-slide">{slides[currentSlide]}</div>
            <button
              aria-label="Go to the next slide"
              onClick={nextSlide}
              className="carousel-button"
            >
              Next
            </button>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};

export default SuccessCarousel;