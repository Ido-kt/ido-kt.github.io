import { PerceivableTraitDiscernibleText, PerceivableComponentUserRating } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const UserRatingDiscernible: Rule = {
  id: "user-rating-discernible",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "User ratings should be tagged and labeled for assistive technology",
  description: "When a static star rating is presented using unlabeled icons, screen readers cannot interpret the symbols as meaningful content. Assigning a role and text alternative ensures the rating value is conveyed clearly, allowing non-visual users to understand the information.",
  advice: 'Assign role="img" with an aria-label such as “4 out of 5 stars,” either directly on a single image or SVG, or on a container that holds the star elements.',
  associatedDetectors: [PerceivableTraitDiscernibleText, PerceivableComponentUserRating],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio-rating/",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/forms/custom-controls/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([PerceivableComponentUserRating]);
    for (const element of elements) {
      const discernibleElements = classifier.getMatchedInclusive([PerceivableTraitDiscernibleText], element);
      if (!discernibleElements.length) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
