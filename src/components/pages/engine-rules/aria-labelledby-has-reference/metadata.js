// Generated metadata for aria-labelledby-has-reference
// This file is auto-generated from index.ts to avoid module resolution issues

export const AriaLabelledByHasReference = {
  id: "aria-labelledby-has-reference",
  title: `aria-labelledby should reference a valid element id`,
  description: `Since aria-labelledby relies on valid id references, screen readers can only announce the label if the target exists. If the id is missing or invalid, the label will not be conveyed, causing users to miss important context.`,
  advice: `Make sure that aria-labeledby attribute point to an existing, screen-reader-visible element on the screen with proper text content.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" },
    { type: "ACT", link: "https://act-rules.github.io/rules/in6db8" }
  ]
};
