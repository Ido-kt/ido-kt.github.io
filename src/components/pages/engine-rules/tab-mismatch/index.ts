import { CompliantComponentTab, PerceivableComponentTab } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const TabMismatch: Rule = {
  id: "tab-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentTab, PerceivableComponentTab],
  impact: "serious",
  title: "Tab controls should be tagged for assistive technology",
  description: 'Custom tabs must be explicitly defined for screen readers since there are no native HTML tab elements. Without assigning role="tab" to the interactive elements, assistive technology will not identify them as tabs, preventing users from understanding their function or navigating them as part of a tab interface.',
  advice: 'Apply role="tab" to each tab control.',
  refs: [
    {
      type: "Non-Standard",
      link: "https://www.digitala11y.com/tab-role/",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([PerceivableComponentTab]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentTab)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
