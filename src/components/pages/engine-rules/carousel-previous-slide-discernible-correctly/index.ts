import { PerceivableComponentCarouselArrowPrevious, PerceivableTraitDiscernibleText } from "@acsbe/core-engine-classifier";
import { textContainsWord } from "@acsbe/core-engine-dictionary";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

const EXPECTED_CONTROL_WORDS = ["previous", "back"] as const;

export const CarouselPreviousSlideDiscernibleCorrectly: Rule = {
  id: "carousel-previous-slide-discernible-correctly",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Carousel Previous pagination control should have an accurate and descriptive label",
  description: "If the Previous control (often marked up using an arrow symbol) in a carousel is not given a descriptive label, screen reader users may not understand that the control activates the previous slide or set of slides in the carousel.",
  advice: 'Assign aria-label="Previous" to the Previous carousel pagination control.',
  associatedDetectors: [PerceivableComponentCarouselArrowPrevious, PerceivableTraitDiscernibleText],
  refs: [
    {
      type: "WCAG",
      id: "2.4.6",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#headings-and-labels",
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
      /**
       * Non-discernible buttons are handled in a different rule (carousel-previous-slide-discernible)
       */
      if (!classifier.assert(button, PerceivableTraitDiscernibleText)) {
        continue;
      }

      const {
        contentInfo: { allText },
      } = classifier.getOperations(button);
      const hasCorrectDescriptiveWord = EXPECTED_CONTROL_WORDS.some((word) => textContainsWord(allText.toLowerCase(), word));
      if (!hasCorrectDescriptiveWord) {
        response.failedNodes.push(button);
      } else {
        response.passedNodes.push(button);
      }
    }
  },
};
