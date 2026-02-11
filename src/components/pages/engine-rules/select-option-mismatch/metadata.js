// Generated metadata for select-option-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const SelectOptionMismatch = {
  id: "select-option-mismatch",
  title: `Custom select options should be tagged for assistive technology`,
  description: `Native select elements automatically expose each option to screen readers, however roles for custom components must be explicitly defined. If custom option elements are not given the correct ARIA role and nested according to markup and accessibility guidelines, assistive technology may not recognize or interact with them.`,
  advice: `Assign role="option" to each custom select option.\\nEnsure that each option is directly contained in an element with role="listbox"`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role" }
  ]
};
