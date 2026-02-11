// Generated metadata for heading-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const HeadingDiscernible = {
  id: "heading-discernible",
  title: `Headings should not be empty`,
  description: `Empty heading elements break the document outline, making navigation by headings less effective for screen reader users and causing confusion due to the disrupted page hierarchy.`,
  advice: `Remove empty HTML heading elements or assign aria-hidden="true" to make sure that they are ignored by screen readers.`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html" },
    { type: "ACT", link: "https://act-rules.github.io/rules/047fe0" },
    { type: "ACT", link: "https://act-rules.github.io/rules/ffd0e9" }
  ]
};
