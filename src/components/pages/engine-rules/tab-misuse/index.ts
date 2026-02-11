import { CompliantComponentTab, PerceivableComponentTab } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const TabMisuse: Rule = {
  id: "tab-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentTab, PerceivableComponentTab],
  impact: "serious",
  title: 'Only elements that function as tabs should receive role="tab"',
  description: 'Applying role="tab" to an element that is not part of a functioning tab interface misleads screen reader users by presenting it as a tab without a corresponding panel.',
  advice: 'Remove role="tab" from the failing element.',
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
    const elements = classifier.getMatched([CompliantComponentTab]);

    for (const element of elements) {
      if (classifier.assert(element, PerceivableComponentTab)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
