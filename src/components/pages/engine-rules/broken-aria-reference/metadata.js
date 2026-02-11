// Generated metadata for broken-aria-reference
// This file is auto-generated from index.ts to avoid module resolution issues

export const BrokenAriaReference = {
  id: "broken-aria-references",
  title: `Aria describedby/labelledby must point to a valid, existing element ID`,
  description: `Screen readers rely on the HTML to provide explicit references between elements in order to parse the content and announce it to screen readers correctly. If the HTML includes broken ARIA references, screen reader users may not be able to browse properly.`,
  advice: `Make sure that aria-describedby and aria-labeledby attributes point to an existing, screen-reader-visible element on the screen with proper text content.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" }
  ]
};
