import { CompliantComponentTabPanel, PerceivableComponentTabPanel } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const TabPanelMismatch: Rule = {
  id: "tab-panel-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentTabPanel, PerceivableComponentTabPanel],
  impact: "serious",
  title: "Tab panels should be tagged for assistive technology",
  description: 'The role="tabpanel" identifies an element as the content region of a tab interface. Without this role, panels are exposed only by their native role (such as a generic div or a named section) and screen reader users may not perceive them as part of the tab structure.',
  advice: 'Apply role="tabpanel" to each container that is exposed when selecting a tab.',
  refs: [
    {
      type: "Non-Standard",
      link: "https://www.digitala11y.com/tabpanel-role/",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([PerceivableComponentTabPanel]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentTabPanel)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
