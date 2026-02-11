import { CompliantComponentToggleButton, PerceivableComponentToggleButton } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const ToggleButtonCorrectState: Rule = {
  id: "toggle-button-correct-state",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentToggleButton, PerceivableComponentToggleButton],
  impact: "serious",
  title: "The state of toggle buttons should be accurate",
  description: "If the exposed state of a toggle button is not accurate, screen reader users may not know whether it is active or inactive, leading to confusion and unintended actions.",
  advice: "Make sure the value of aria-pressed represents the visible state of the control.",
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
    const elements = classifier.getMatched([CompliantComponentToggleButton]);

    for (const element of elements) {
      const expectedAriaPressedValue = classifier.getContextData(PerceivableComponentToggleButton).elementStore.get(element);

      const ariaPressedValue = element.getAttribute("aria-pressed");
      if (ariaPressedValue === expectedAriaPressedValue) {
        response.passedNodes.push(element);
        continue;
      }

      response.failedNodes.push(element);
    }
  },
};
