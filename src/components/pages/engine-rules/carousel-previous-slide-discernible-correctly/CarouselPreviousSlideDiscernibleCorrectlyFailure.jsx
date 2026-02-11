import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CarouselPreviousSlideDiscernibleCorrectlyFailure = () => {
  const ruleId = "carousel-previous-slide-discernible-correctly";
  const title = `Carousel Previous pagination control should have an accurate and descriptive label`;
  const description = `If the Previous control (often marked up using an arrow symbol) in a carousel is not given a descriptive label, screen reader users may not understand that the control activates the previous slide or set of slides in the carousel.`;
  const helpText = `Assign aria-label="Previous" to the Previous carousel pagination control.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "carousel controls labelled wrongly", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel" aria-label="News feed">
  <button class="control prev" aria-label="some button">&lt;</button>
  <ul class="carousel__slides-container">
    <li class="slide">slide 1</li>
    <li class="slide">slide 2</li>
    <li class="slide">slide 3</li>
  </ul>
  <button class="control next" aria-label="some other button">&gt;</button>
</div>` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default CarouselPreviousSlideDiscernibleCorrectlyFailure;
