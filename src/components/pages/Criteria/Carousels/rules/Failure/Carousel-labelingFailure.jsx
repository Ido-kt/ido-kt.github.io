import React, { useState } from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Carousels: Carousel Labeling - Failure";

const CarousellabelingFailure = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "Slide 1: Inaccessible Example 1",
    "Slide 2: Inaccessible Example 2",
    "Slide 3: Inaccessible Example 3",
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <IssueFailure
      itemContent={
        <>
          <div className="carousel">
            <button onClick={prevSlide} className="carousel-button">
              Previous
            </button>
            <div className="carousel-slide">{slides[currentSlide]}</div>
            <button onClick={nextSlide} className="carousel-button">
              Next
            </button>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};

export default CarousellabelingFailure;