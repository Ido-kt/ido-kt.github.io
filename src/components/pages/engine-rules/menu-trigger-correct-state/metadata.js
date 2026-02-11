// Generated metadata for menu-trigger-correct-state
// This file is auto-generated from index.ts to avoid module resolution issues

export const MenuTriggerCorrectState = {
  id: "menu-trigger-correct-state",
  title: `Menu open/close states should be indicated to assistive technology`,
  description: `Screen readers require properly coded states for interactive elements. Menus can be expanded or collapsed, and their state should be indicated to screen readers. Otherwise, users will lose orientation and get confused while browsing the menu.`,
  advice: `When a button is a menu trigger, you should connected it to the menu it toggles using the "aria-controls" attribute on the button, where the value is the "id" of the menu. Use the the "aria-expanded" attribute to indicate whether the menu controlled by a menu-trigger button is expanded or collapsed (if it is visible or not). Set the value to dynamically to "true" when the menu is visible and "false" when it is not. Note: the aria-expanded attribute must be placed on the link or button menu items only. Otherwise, they won't work.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup" },
    { type: "Non-Standard", link: "https://dequeuniversity.com/rules/axe/4.3/aria-required-attr" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls" }
  ]
};
