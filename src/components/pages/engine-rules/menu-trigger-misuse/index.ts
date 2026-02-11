import { PerceivableComponentMenuTrigger, CompliantComponentMenuTrigger } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const MenuTriggerMisuse: Rule = {
  id: "menu-trigger-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Menu trigger buttons/links that aren't perceived as menu trigger should lose the `aria-haspopup` attribute and the `aria-expanded` attribute",
  description: "Using menu trigger attributes for buttons/links that aren't menu triggers can confuse screen readers and other assistive technologies. This can lead to a poor user experience for people with disabilities.",
  advice: "Remove the `aria-haspopup` attribute and the `aria-expanded` attribute from the element.",
  associatedDetectors: [PerceivableComponentMenuTrigger, CompliantComponentMenuTrigger],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/TR/wai-aria/states_and_properties#aria-haspopup",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links",
    },
    {
      type: "W3C",
      link: "https://w3c.github.io/aria/#aria-haspopup",
    },
    {
      type: "W3C",
      link: "https://w3c.github.io/aria/#aria-expanded",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([CompliantComponentMenuTrigger]);

    for (const element of elements) {
      if (classifier.assert(element, PerceivableComponentMenuTrigger)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
