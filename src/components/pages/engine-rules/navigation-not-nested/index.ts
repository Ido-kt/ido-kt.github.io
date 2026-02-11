import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentNavigation } from "@acsbe/core-engine-classifier";

export const NavigationNotNested: Rule = {
  id: "navigation-not-nested",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Avoid using nested navigation structure",
  description: "Complex navigation components can be difficult for screen readers to handle. This is especially true if submenus or other complex structures exist. Nesting navigation regions makes it harder for screen reader users to understand a page's structure and disrupts orientation.",
  advice: 'If the failing element is a custom navigation region, remove role="navigation". If the failing element is coded using a HTML <nav> tag, apply role="presentation" or a role that is suitable for the function of the element.',
  associatedDetectors: [CompliantComponentNavigation],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/menus/structure/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const navs = classifier.getMatched([CompliantComponentNavigation]);
    for (const nav of navs) {
      if (classifier.getParent(nav, CompliantComponentNavigation)) {
        response.failedNodes.push(nav);
      } else {
        response.passedNodes.push(nav);
      }
    }
  },
};
