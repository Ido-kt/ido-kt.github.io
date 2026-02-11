// Generated metadata for aria-invalid-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const AriaInvalidMisuse = {
  id: "aria-invalid-misuse",
  title: `Fields must indicate validation errors to assistive technology`,
  description: `Screen reader users rely on properly coded field validation status and associated validation messages. Otherwise, users would have to browse around and try to pick up clues on the page as to why their submission attempt did not work.`,
  advice: `Include the aria-invalid=true attribute when the field validation shows on the page. Screen readers will pick that up and inform the user that this field is invalid. Make sure to change the aria-invalid to false when the field value becomes valid.`,
  impact: "serious",
  refs: [
    { type: "WAI", link: "https://www.w3.org/TR/wai-aria/#aria-invalid" },
    { type: "WCAG", id: "3.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#error-identification" },
    { type: "WCAG", id: "3.3.3", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#error-suggestion" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid" }
  ]
};
