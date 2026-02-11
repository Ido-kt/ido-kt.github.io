import { CompliantComponentNavigation } from "@acsbe/core-engine-classifier";
import { textContainsWord } from "@acsbe/core-engine-dictionary";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const NavigationRedundantDiscernibleText: Rule = {
  id: "navigation-redundant-discernible-text",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Navigation elements should have a label that doesn't contain the word navigation",
  description: "Screen readers announce when a user encounters a navigation region, which is why including the word 'navigation' in a label is redundant.",
  advice: "Remove the word 'navigation' from assigned labels.",
  associatedDetectors: [CompliantComponentNavigation],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/page-structure/labels/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const navElements = classifier.getMatched([CompliantComponentNavigation]);

    for (const navElement of navElements) {
      const {
        contentInfo: { relatedText },
      } = classifier.getOperations(navElement);

      /**
       * We want to ignore the case where the related text is empty as it's being covered by another rule `navigation-discernible`
       */
      if (!relatedText) {
        continue;
      }

      if (textContainsWord(relatedText, "navigation")) {
        response.failedNodes.push(navElement);
      } else {
        response.passedNodes.push(navElement);
      }
    }
  },
};
