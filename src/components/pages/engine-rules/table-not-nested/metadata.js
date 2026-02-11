// Generated metadata for table-not-nested
// This file is auto-generated from index.ts to avoid module resolution issues

export const TableNotNested = {
  id: "table-not-nested",
  title: `Tables should not be nested`,
  description: `Nested tables are often misinterpreted by screen readers, making it hard for users to follow the intended structure and meaning of the data.`,
  advice: `Avoid nesting tables. Use separate tables with clear headings, and if tables are used for layout, assign  role="presentation" or role="none" to each table element.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#nesting_tables" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/WCAG20-TECHS/F49.html" }
  ]
};
