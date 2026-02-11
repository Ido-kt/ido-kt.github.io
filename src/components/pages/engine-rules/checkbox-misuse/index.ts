import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentCheckbox, PerceivableComponentCheckbox } from "@acsbe/core-engine-classifier";

export const CheckboxMisuse: Rule = {
  id: "checkbox-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: 'Only elements that function as checkbox controls should receive role="checkbox"',
  description: 'Setting role="checkbox" on elements that do not function as checkbox controls can mislead screen reader users by announcing them as selectable options in a group, causing unreliable navigation and interaction.',
  advice: 'Remove role="checkbox" from the failing element.',
  associatedDetectors: [CompliantComponentCheckbox, PerceivableComponentCheckbox],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const checkboxes = classifier.getMatched([CompliantComponentCheckbox]);

    for (const checkbox of checkboxes) {
      if (classifier.assert(checkbox, PerceivableComponentCheckbox)) {
        response.passedNodes.push(checkbox);
      } else {
        response.failedNodes.push(checkbox);
      }
    }
  },
};
