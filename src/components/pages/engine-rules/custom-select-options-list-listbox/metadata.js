// Generated metadata for custom-select-options-list-listbox
// This file is auto-generated from index.ts to avoid module resolution issues

export const CustomSelectOptionsListListbox = {
  id: "custom-select-options-list-listbox",
  title: `Custom select options lists should be tagged for assistive technology`,
  description: `Native select elements automatically expose their option lists to screen readers, but custom implementations must be explicitly defined. Without exposing the correct roles and nesting them in line with established markup and accessibility standards, screen reader users may not be able to make a selection.`,
  advice: `Assign role="listbox" to the container element that directly holds the list options.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role" }
  ]
};
