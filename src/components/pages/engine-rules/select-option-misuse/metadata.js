// Generated metadata for select-option-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const SelectOptionMisuse = {
  id: "select-option-misuse",
  title: `Only elements that function as select options should be tagged as option`,
  description: `Assigning role="option" outside the required listbox structure causes screen readers to ignore the role, leaving users without the intended semantics of the original element. This can obscure key information and make the content harder for users to interpret.`,
  advice: `Remove role="option" from the failing element.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role" }
  ]
};
