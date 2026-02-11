import { PerceivableComponentCarouselArrowPrevious, PerceivableTraitDiscernibleText } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const CarouselPreviousSlideDiscernible: Rule = {
  id: "carousel-previous-slide-discernible",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Carousel navigation previous arrows should be labelled for assistive technology",
  description: "Carousel arrow buttons are essential for operating carousels. By design, carousels are difficult for assistive technology to handle. If the navigation arrows aren't accessible, carousels may be impossible for blind users to operate.",
  advice: `When using arrow button to change the carousel slide to the previous in order, include an "aria-label" or a screen-reader-only text noting this button will show the previous slide.`,
  associatedDetectors: [PerceivableComponentCarouselArrowPrevious, PerceivableTraitDiscernibleText],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/carousels/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const buttons = classifier.getMatched([PerceivableComponentCarouselArrowPrevious]);
    for (const button of buttons) {
      if (!classifier.assert(button, PerceivableTraitDiscernibleText)) {
        response.failedNodes.push(button);
      } else {
        response.passedNodes.push(button);
      }
    }
  },
};
