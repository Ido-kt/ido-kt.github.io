import { CompliantComponentButton, CompliantComponentLink, CompliantComponentMenuTrigger } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const MenuTriggerClickable: Rule = {
  id: "menu-trigger-clickable",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "ARIA relationship and state attributes should only be applied to elements with appropriate roles",
  description: "Interactive elements that trigger additional content should only have relationship and state ARIA attributes, such as aria-expanded and aria-controls, if they have interactive roles, such as button, tab, combobox and in rarer cases, link.",
  advice: "Make sure relationship and state ARIA attributes are only applied to elements with interactive roles, such as button, tab, and combobox. In rare cases, aria-expanded can be applied to link elements or elements with role='link', however this should only be done when the link both navigates and expands content.",
  associatedDetectors: [CompliantComponentButton, CompliantComponentLink, CompliantComponentMenuTrigger],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup",
    },
    {
      type: "Non-Standard",
      link: "https://dequeuniversity.com/rules/axe/4.3/aria-required-attr",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([CompliantComponentMenuTrigger]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentButton) || classifier.assert(element, CompliantComponentLink)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
