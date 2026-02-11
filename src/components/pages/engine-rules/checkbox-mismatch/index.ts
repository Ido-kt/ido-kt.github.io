import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentCheckbox, PerceivableComponentCheckbox } from "@acsbe/core-engine-classifier";

export const CheckboxMismatch: Rule = {
  id: "checkbox-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Custom checkbox controls should be tagged for assistive technology",
  description: "Screen readers have built-in mechanisms to handle checkbox components. By default, screen reades don't support custom checkboxes and using them without exposing the appropriate role may prevent screen reader users from interacting as expected with the component.",
  advice: 'Assign role="checkbox" to the custom checkbox element.',
  associatedDetectors: [CompliantComponentCheckbox, PerceivableComponentCheckbox],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const checkboxes = classifier.getMatched([PerceivableComponentCheckbox]);

    for (const checkbox of checkboxes) {
      const isCompliant = classifier.assert(checkbox, CompliantComponentCheckbox);

      if (isCompliant) {
        response.passedNodes.push(checkbox);
      } else {
        response.failedNodes.push(checkbox);
      }
    }
  },
};
