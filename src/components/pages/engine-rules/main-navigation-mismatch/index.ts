import { PerceivableComponentMainNavigation, CompliantComponentNavigation } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const MainNavigationMismatch: Rule = {
  id: "main-navigation-mismatch",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Main navigation should have role navigation",
  description: "Main navigation elements should have role navigation to ensure that screen readers can identify them as navigation regions.",
  advice: "Add role=navigation to the main navigation elements",
  associatedDetectors: [PerceivableComponentMainNavigation, CompliantComponentNavigation],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const mainNav = (await classifier.getMatched([PerceivableComponentMainNavigation]))[0];
    if (mainNav && mainNav.parentElement) {
      if (classifier.assert(mainNav.parentElement, CompliantComponentNavigation)) {
        // The parent of the main navigation should be a compliant navigation element
        response.passedNodes.push(mainNav.parentElement);
      } else {
        response.failedNodes.push(mainNav.parentElement);
      }
    }
  },
};
