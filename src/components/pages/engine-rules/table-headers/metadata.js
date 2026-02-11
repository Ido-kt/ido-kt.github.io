// Generated metadata for table-headers
// This file is auto-generated from index.ts to avoid module resolution issues

export const TableHeaders = {
  id: "table-headers",
  title: `Tables should include table header tags`,
  description: `Screen readers can't match columns and cells without properly coded table header tags (TH). Without table headers, screen readers won't announce the table's content properly to users, leaving them unable to consume information.`,
  advice: `Add a THEAD element to indicate a table heading section, and include TH elements for every column, describing the purpose of that table column.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "WAI", link: "https://www.w3.org/WAI/tutorials/tables/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role" },
    { type: "ACT", link: "https://act-rules.github.io/rules/d0f69e" }
  ]
};
