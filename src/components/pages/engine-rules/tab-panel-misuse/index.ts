import { CompliantComponentTabPanel, PerceivableComponentTabPanel } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const TabPanelMisuse: Rule = {
  id: "tab-panel-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentTabPanel, PerceivableComponentTabPanel],
  impact: "serious",
  title: 'Only elements that function as tab panels should receive role="tabpanel"',
  description: 'Applying role="tabpanel" to an element without a corresponding tab misleads screen reader users by announcing it as tab content, even though no controlling tab exists.',
  advice: 'Remove role="tabpanel" from the failing element.',
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
    const elements = classifier.getMatched([CompliantComponentTabPanel]);

    for (const element of elements) {
      if (classifier.assert(element, PerceivableComponentTabPanel)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
