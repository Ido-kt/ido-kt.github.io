import { CompliantComponentCarousel } from "@acsbe/core-engine-classifier";
import { textContainsWord } from "@acsbe/core-engine-dictionary";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const CarouselRedundantDiscernibleText: Rule = {
  id: "carousel-redundant-discernible-text",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Carousels should be labelled properly without redundancy",
  description: "Unlabeled carousel areas are difficult for screen reader users because content gets hidden and shown unexpectedly. However, when labelled, the label should not be redundant.",
  advice: `When using the "aria-label" or "aria-labelledby" element to describe the contents of the carouse, do not use the word "carousel" in it, as it is redundant when used with the "role" and "aria-roledescription" attributes. Using all three of these attributes, assistive technology users will understand that this is a carousel region and what it contains.`,
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
      if (relatedText && textContainsWord(relatedText, "carousel")) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
