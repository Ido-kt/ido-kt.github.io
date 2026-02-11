// Generated metadata for toggle-button-correct-state
// This file is auto-generated from index.ts to avoid module resolution issues

export const ToggleButtonCorrectState = {
  id: "toggle-button-correct-state",
  title: `The state of toggle buttons should be accurate`,
  description: `If the exposed state of a toggle button is not accurate, screen reader users may not know whether it is active or inactive, leading to confusion and unintended actions.`,
  advice: `Make sure the value of aria-pressed represents the visible state of the control.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html" },
    { type: "W3C", link: "https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/ARIA/apg/patterns/button/" },
    { type: "Non-Standard", link: "https://www.digitala11y.com/aria-pressed-state/" }
  ]
};
