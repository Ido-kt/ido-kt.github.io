import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentCheckbox, PerceivableComponentCheckbox } from "@acsbe/core-engine-classifier";

export const CheckboxAriaChecked: Rule = {
  id: "checkbox-aria-checked",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Checked state of custom checkbox controls should be exposed to assistive technology",
  description: "If custom checkbox controls lack a defined checked state, screen reader users cannot determine which option is selected, resulting in confusion and loss of functionality.",
  advice: 'Assign \'aria-checked="true" to active checkbox controls and aria-checked="false" to other controls in the group, updating values as selection changes.',
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
    const checkboxes = classifier.getMatched([CompliantComponentCheckbox]);

    for (const checkbox of checkboxes) {
      if (checkbox.tagName === "INPUT") {
        response.passedNodes.push(checkbox);
        continue;
      }

      const hasAriaChecked = checkbox.getAttribute("aria-checked") !== null;
      if (!hasAriaChecked) {
        response.failedNodes.push(checkbox);
        continue;
      }

      response.passedNodes.push(checkbox);
    }
  },
};
