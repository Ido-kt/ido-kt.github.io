// Generated metadata for toggle-button-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const ToggleButtonMismatch = {
  id: "toggle-button-mismatch",
  title: `Toggle buttons should expose their state to assistive technology`,
  description: `When a toggle button fails to expose its pressed state, screen reader users cannot determine whether the control is active or inactive.`,
  advice: `Assign aria-pressed="true/false" to a native <button>, or an element with role="button". Make sure aria-pressed updates dynamically whenever the button is toggled.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html" },
    { type: "W3C", link: "https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/ARIA/apg/patterns/button/" },
    { type: "Non-Standard", link: "https://www.digitala11y.com/aria-pressed-state/" }
  ]
};
