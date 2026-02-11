import { CompliantComponentToggleButton, PerceivableComponentToggleButton } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const ToggleButtonMisuse: Rule = {
  id: "toggle-button-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentToggleButton, PerceivableComponentToggleButton],
  impact: "minor",
  title: "Only elements that function as toggle buttons should be assigned the aria-pressed attribute",
  description: 'The aria-pressed attribute is only announced by assistive technology when applied to button elements, including custom toggle controls with role="button". If it is used on elements with other roles, the attribute is ignored, leaving users unaware of any intended pressed or unpressed state.',
  advice: "Remove the aria-pressed attribute from the failing element.",
  refs: [
    {
      type: "WCAG",
      level: "A",
      id: "1.3.1",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#info-and-relationships",
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
      if (classifier.assert(element, PerceivableComponentToggleButton)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
