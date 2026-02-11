// Generated metadata for menu-trigger-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const MenuTriggerMisuse = {
  id: "menu-trigger-misuse",
  title: `Menu trigger buttons/links that aren't perceived as menu trigger should lose the \`aria-haspopup\` attribute and the \`aria-expanded\` attribute`,
  description: `Using menu trigger attributes for buttons/links that aren't menu triggers can confuse screen readers and other assistive technologies. This can lead to a poor user experience for people with disabilities.`,
  advice: `Remove the \`aria-haspopup\` attribute and the \`aria-expanded\` attribute from the element.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#name-role-value" },
    { type: "WAI", link: "https://www.w3.org/TR/wai-aria/states_and_properties#aria-haspopup" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links" },
    { type: "W3C", link: "https://w3c.github.io/aria/#aria-haspopup" },
    { type: "W3C", link: "https://w3c.github.io/aria/#aria-expanded" }
  ]
};
