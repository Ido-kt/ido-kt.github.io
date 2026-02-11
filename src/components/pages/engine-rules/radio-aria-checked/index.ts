import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentRadioButton } from "@acsbe/core-engine-classifier";

export const RadioAriaChecked: Rule = {
  id: "radio-aria-checked",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Checked state of custom radio controls should be indicated to assistive technology",
  description: "If custom radio controls lack a defined checked state, screen reader users can't determine which option is selected, resulting in confusion and loss of functionality.",
  advice: 'Assign \'aria-checked="true" to the active radio control and aria-checked="false" to other controls in the group, updating values as the selection changes.',
  associatedDetectors: [CompliantComponentRadioButton],
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
    const radioButtons = classifier.getMatched([CompliantComponentRadioButton]);

    for (const radio of radioButtons) {
      if (radio.tagName === "INPUT") {
        response.passedNodes.push(radio);
        continue;
      }

      const hasAriaChecked = radio.getAttribute("aria-checked") !== null;
      if (!hasAriaChecked) {
        response.failedNodes.push(radio);
        continue;
      }

      response.passedNodes.push(radio);
    }
  },
};
