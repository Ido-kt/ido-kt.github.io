import { CompliantComponentTabList, PerceivableComponentTabList } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const TabListMisuse: Rule = {
  id: "tab-list-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentTabList, PerceivableComponentTabList],
  impact: "serious",
  title: 'Only elements that function as tablists should receive role="tablist"',
  description: 'Applying role="tablist" to an element without tabs misleads screen reader users by suggesting a group of tabs that does not exist.',
  advice: 'Remove role="tablist" from the failing element.',
  refs: [
    {
      type: "Non-Standard",
      link: "https://www.digitala11y.com/tablist-role/",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([CompliantComponentTabList]);

    for (const element of elements) {
      if (classifier.assert(element, PerceivableComponentTabList)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
