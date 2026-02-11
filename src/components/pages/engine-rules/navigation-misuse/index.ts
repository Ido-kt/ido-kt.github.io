import { CompliantComponentNavigation, PerceivableComponentNavigation, PerceivableComponentBreadcrumb, PerceivableComponentMainNavigation } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const NavigationMisuse: Rule = {
  id: "navigation-misuse",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentNavigation, PerceivableComponentNavigation, PerceivableComponentBreadcrumb, PerceivableComponentMainNavigation],
  impact: "serious",
  title: "An element without navigation links is tagged as a navigation landmark",
  description: "Screen readers rely on accurate tagging and labeling to provide necessary context. If an element that does not contain navigation links is tagged as a navigation landmark, screen reader users may lose orientation and find the page's structure difficult to understand.",
  advice: "Add role=presentation to the incorrect <nav> element or remove role=navigation if a different element is used.",
  refs: [
    {
      type: "WCAG",
      id: "1.4.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    // Getting all compliant navigation elements (<nav> tag and [role=navigation] and whatever else is considered a nav compliant element)
    const elements = classifier.getMatched([CompliantComponentNavigation]);
    const mainNavigation = (await classifier.getMatched([PerceivableComponentMainNavigation]))[0];
    for (const element of elements) {
      const isElementPerceivedAsNavigation = classifier.assert(element, PerceivableComponentNavigation);
      if (!isElementPerceivedAsNavigation) {
        if (classifier.assert(element, PerceivableComponentBreadcrumb) || (mainNavigation && mainNavigation.parentElement === element)) {
          // To avoid conflicts with the BreadcrumbsNav and MainNavigationMismatch rules, we will not mark it as failed
          response.inapplicableNodes.push(element);
        } else {
          response.failedNodes.push(element);
        }
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
