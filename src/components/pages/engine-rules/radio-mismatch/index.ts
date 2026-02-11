import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentRadioButton, PerceivableComponentRadioButton } from "@acsbe/core-engine-classifier";

export const RadioMismatch: Rule = {
  id: "radio-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Custom radio controls should be tagged for assistive technology",
  description: "Screen readers have built-in mechanisms to handle radio components. By default, assistive technology does not support custom radio controls and using them without exposing the appropriate role may prevent screen reader users from interacting as expected with the component.",
  advice: 'Assign role="radio" to the custom radio control.',
  associatedDetectors: [CompliantComponentRadioButton, PerceivableComponentRadioButton],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const radioButtons = classifier.getMatched([PerceivableComponentRadioButton]);

    for (const radio of radioButtons) {
      if (classifier.assert(radio, CompliantComponentRadioButton)) {
        response.passedNodes.push(radio);
      } else {
        response.failedNodes.push(radio);
      }
    }
  },
};
