import { PerceivableComponentMainNavigation } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const MainNavigationDiscernible: Rule = {
  id: "main-navigation-discernible",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Main navigation should be labelled properly",
  description: "Main navigation elements should have text available for screen readers explaining that it is the main navigation.",
  advice: "Add an aria-label to the main navigation elements",
  associatedDetectors: [PerceivableComponentMainNavigation],
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
    const mainNavs = await classifier.getMatched([PerceivableComponentMainNavigation]);

    for (const mainNav of mainNavs) {
      const { accessibleName } = classifier.getOperations(mainNav).contentInfo;
      if (accessibleName) {
        response.passedNodes.push(mainNav);
        continue;
      }

      response.failedNodes.push(mainNav);
    }
  },
};
