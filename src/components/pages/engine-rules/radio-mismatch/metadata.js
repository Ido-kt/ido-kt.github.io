// Generated metadata for radio-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const RadioMismatch = {
  id: "radio-mismatch",
  title: `Custom radio controls should be tagged for assistive technology`,
  description: `Screen readers have built-in mechanisms to handle radio components. By default, assistive technology does not support custom radio controls and using them without exposing the appropriate role may prevent screen reader users from interacting as expected with the component.`,
  advice: `Assign role="radio" to the custom radio control.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role" }
  ]
};
