import { CompliantComponentToggleButton, PerceivableComponentToggleButton } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const ToggleButtonMismatch: Rule = {
  id: "toggle-button-mismatch",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentToggleButton, PerceivableComponentToggleButton],
  impact: "serious",
  title: "Toggle buttons should expose their state to assistive technology",
  description: "When a toggle button fails to expose its pressed state, screen reader users cannot determine whether the control is active or inactive.",
  advice: 'Assign aria-pressed="true/false" to a native <button>, or an element with role="button". Make sure aria-pressed updates dynamically whenever the button is toggled.',
  refs: [
    {
      type: "WCAG",
      level: "A",
      id: "4.1.2",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    },
    {
      type: "Non-Standard",
      link: "https://www.digitala11y.com/aria-pressed-state/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([PerceivableComponentToggleButton]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentToggleButton)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
