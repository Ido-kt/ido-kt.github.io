import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CarouselNextSlideDiscernibleFailure = () => {
  const ruleId = "carousel-next-slide-discernible";
  const title = `Carousel navigation next arrow should be labelled for assistive technology`;
  const description = `Carousel arrow buttons are essential for operating carousels. By design, carousels are difficult for assistive technology to handle. If the navigation arrows aren't accessible, carousels may be impossible for blind users to operate.`;
  const helpText = `When using arrow button to change the carousel slide to the next in order, include an "aria-label" or a screen-reader-only text noting this button will show the next slide.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "carousel controls not labelled", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel" aria-label="News feed">
  <button class="control prev">&lt;</button>
  <ul class="carousel__slides-container">
    <li class="slide">slide 1</li>
    <li class="slide">slide 2</li>
    <li class="slide">slide 3</li>
  </ul>
  <button class="control next"></button>
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

export default CarouselNextSlideDiscernibleFailure;
