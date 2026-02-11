import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentRadioButton, PerceivableComponentRadioButton } from "@acsbe/core-engine-classifier";

export const RadioMisuse: Rule = {
  id: "radio-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: 'Only elements that function as radio controls should receive role="radio"',
  description: 'Setting role="radio" on elements that do not function as radio controls can mislead screen reader users by announcing them as selectable options in a group, causing unreliable navigation and interaction.',
  advice: 'Remove role="radio" from the failing element.',
  associatedDetectors: [CompliantComponentRadioButton, PerceivableComponentRadioButton],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const checkboxes = classifier.getMatched([CompliantComponentRadioButton]);

    for (const checkbox of checkboxes) {
      if (classifier.assert(checkbox, PerceivableComponentRadioButton)) {
        response.passedNodes.push(checkbox);
      } else {
        response.failedNodes.push(checkbox);
      }
    }
  },
};
