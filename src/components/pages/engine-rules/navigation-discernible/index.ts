import { CompliantComponentNavigation } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const NavigationDiscernible: Rule = {
  id: "navigation-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Navigation regions should have unique labels when there are multiple navigation regions",
  description: "When multiple navigation regions exist on a page, each navigation element should have a unique label so that each region can be differentiated by screen reader users.",
  advice: "Provide a unique label for each navigation region using either the aria-label or aria-labelledby attribute.",
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
      if (!relatedText) {
        response.failedNodes.push(navElement);
      } else {
        response.passedNodes.push(navElement);
      }
    }
  },
};
