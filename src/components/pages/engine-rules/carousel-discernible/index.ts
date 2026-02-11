import { CompliantComponentCarousel } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const CarouselDiscernible: Rule = {
  id: "carousel-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Carousels should have a descriptive label",
  description: "Carousels need a label so assistive technology announces them with a clear name, such as “Featured products carousel”. This ensures screen reader users know the widget’s purpose and can differentiate it from other carousels on the page.",
  advice: "Provide a clear label for the carousel using aria-labelledby to reference a visible heading or assign aria-label to the carousel container.",
  associatedDetectors: [CompliantComponentCarousel],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/carousels/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([CompliantComponentCarousel]);

    for (const element of elements) {
      /**
       * Carousels should have a label or aria-label describing them.
       * Since the word "carousel" should already be present via the role description,
       * the label should be more descriptive and NOT contain the word carousel.
       */
      const { relatedText } = classifier.getOperations(element).contentInfo;
      if (!relatedText) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
