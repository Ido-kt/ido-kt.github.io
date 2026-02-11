import { PerceivableComponentMenuTrigger, CompliantComponentMenuTrigger } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const MenuTriggerMismatch: Rule = {
  id: "menu-trigger-mismatch",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Menu trigger buttons/links should be tagged properly",
  description: "Menu trigger buttons/links should have `aria-haspopup=true` or `aria-haspopup=menu` attribute",
  advice:
    "Use the `aria-haspopup` attribute with value `true` or `menu` to indicate a menu trigger, and the `aria-expanded=true` to indicate expanded menus and `aria-expanded=false` to indicate collapsed menus. Make sure to switch between true and false dynamically as users interact, open and close menus.\nNote: the aria-expanded attribute must be placed on the link or button menu items only. Otherwise, they won't work.",
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
      type: "WAI",
      link: "https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20161214/examples/menu-button/menu-button-1/menu-button-1.html",
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
    const elements = classifier.getMatched([PerceivableComponentMenuTrigger]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentMenuTrigger)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
