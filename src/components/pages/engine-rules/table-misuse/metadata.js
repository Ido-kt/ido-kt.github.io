// Generated metadata for table-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const TableMisuse = {
  id: "table-misuse",
  title: `Only elements that function as data tables should be tagged as table`,
  description: `When a layout table is marked up with HTML elements like <table> or <tr>, or assigned table ARIA roles, screen readers announce a data table structure with rows, columns, and headers, even though the table is only used for page layout.`,
  advice: `Avoid using table markup or roles for visual layout. Use CSS for page structure, and if a table must be used for layout, remove semantic roles by adding role="presentation" or role="none".`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/tables/" }
  ]
};
