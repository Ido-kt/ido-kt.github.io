import { CompliantComponentTabList, PerceivableComponentTabList } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const TabListMisMatch: Rule = {
  id: "tab-list-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  associatedDetectors: [CompliantComponentTabList, PerceivableComponentTabList],
  impact: "serious",
  title: "Tablists should be tagged for assistive technology",
  description: 'A tablist without role="tablist" is not announced as a group of related tabs, which prevents screen reader users from recognizing the structure and purpose of the component. This makes it harder to navigate between tabs and understand that the controls belong to a single set.',
  advice: 'Apply role="tablist" to the container element that directly holds the tabs.',
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
    const elements = classifier.getMatched([PerceivableComponentTabList]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentTabList)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
