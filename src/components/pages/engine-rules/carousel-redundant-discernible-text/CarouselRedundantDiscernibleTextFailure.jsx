import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CarouselRedundantDiscernibleTextFailure = () => {
  const ruleId = "carousel-redundant-discernible-text";
  const title = `Carousels should be labelled properly without redundancy`;
  const description = `Unlabeled carousel areas are difficult for screen reader users because content gets hidden and shown unexpectedly. However, when labelled, the label should not be redundant.`;
  const helpText = `When using the "aria-label" or "aria-labelledby" element to describe the contents of the carouse, do not use the word "carousel" in it, as it is redundant when used with the "role" and "aria-roledescription" attributes. Using all three of these attributes, assistive technology users will understand that this is a carousel region and what it contains.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "carousel element aria label with carousel", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel" aria-label="Awesome carousel">
    <ul class="carousel__slides-container">
        <li class="slide">slide 1</li>
        <li class="slide">slide 2</li>
        <li class="slide">slide 3</li>
    </ul>
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

export default CarouselRedundantDiscernibleTextFailure;
