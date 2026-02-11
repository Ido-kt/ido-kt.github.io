// Generated metadata for visibility-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const VisibilityMisuse = {
  id: "visibility-misuse",
  title: `Visibly hidden content should not be exposed to assistive technology`,
  description: `When elements are visually hidden but still exposed to assistive technology, screen reader users may encounter content that should not be available in the current interface. This can obscure the current state of the page and lead to confusion about what information or controls are available.`,
  advice: `Use aria-hidden="true" to remove elements from the accessibility tree when they should not be exposed to assistive technology. Consider using CSS techniques, such as display:none or visibility:hidden when the content should be hidden from all users.`,
  impact: "serious",
  refs: [
    {
      type: "Non-Standard",
      id: "",
      level: "",
      link: "https://guides.18f.gov/accessibility/hidden-content/#:~:text=Hiding%20content%20is%20very%20useful,can%20hide%20content%20from%20both.",
    },
    {
      type: "Non-Standard",
      id: "",
      level: "",
      link: "https://a11y-guidelines.orange.com/en/articles/accessible-hiding/",
    },
    {
      type: "Non-Standard",
      id: "",
      level: "",
      link: "https://www.tpgi.com/html5-accessibility-chops-hidden-and-aria-hidden/",
    },
    {
      type: "ACT",
      id: "6cfa84",
      level: "",
      link: "https://act-rules.github.io/rules/6cfa84",
    },
  ],
};
