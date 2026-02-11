// Generated metadata for redundant-discernible-content
// This file is auto-generated from index.ts to avoid module resolution issues

export const RedundantDiscernibleContent = {
  id: "redundant-discernible-content",
  title: `Assigned label should not be redundant`,
  description: `Providing the same text as the visible label in an aria-label is redundant and risky, as content may change over time or be translated into other languages, which may result in the label no longer matching the element.`,
  advice: `Remove the aria-label from the failing element.`,
  impact: "minor",
  refs: [
    { type: "WCAG", id: "2.5.3", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#label-in-name" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby" }
  ]
};
