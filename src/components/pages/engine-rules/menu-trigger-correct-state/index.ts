import { CompliantComponentMenuTrigger, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const MenuTriggerCorrectState: Rule = {
  id: "menu-trigger-correct-state",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Menu open/close states should be indicated to assistive technology",
  description: "Screen readers require properly coded states for interactive elements. Menus can be expanded or collapsed, and their state should be indicated to screen readers. Otherwise, users will lose orientation and get confused while browsing the menu.",
  advice: `When a button is a menu trigger, you should connected it to the menu it toggles using the "aria-controls" attribute on the button, where the value is the "id" of the menu. Use the the "aria-expanded" attribute to indicate whether the menu controlled by a menu-trigger button is expanded or collapsed (if it is visible or not). Set the value to dynamically to "true" when the menu is visible and "false" when it is not. Note: the aria-expanded attribute must be placed on the link or button menu items only. Otherwise, they won't work.`,
  associatedDetectors: [CompliantComponentMenuTrigger, PerceivableTraitVisible],
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
  async validate({ classifier, response, document }) {
    const elements = classifier.getMatched([CompliantComponentMenuTrigger]);

    for (const element of elements) {
      const ariaControls = element.getAttribute("aria-controls");
      /**
       * We cannot determine the state of the related element if the aria-controls attribute is not present.
       * Since aria-controls is not a required attribute for menu-triggers, we do not push this element to failed nodes
       */
      if (!ariaControls) {
        continue;
      }

      const connectedMenu = document.getElementById(ariaControls);
      /**
       * The controlled element does not exist, so we cannot determine the state of the menu.
       * If this is a failure, we should make this a separate rule, as remediation for this failure is different.
       */
      if (!connectedMenu) {
        continue;
      }

      const ariaExpanded = element.getAttribute("aria-expanded");
      const isAriaExpanded = ariaExpanded === "true";
      const isConnectedMenuVisible = classifier.assert(connectedMenu, PerceivableTraitVisible);
      // If the aria-expanded attribute reflects the visibility state of the connected menu correctly, the rule passes
      if (isAriaExpanded === isConnectedMenuVisible) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
