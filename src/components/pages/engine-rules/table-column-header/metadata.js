// Generated metadata for table-column-header
// This file is auto-generated from index.ts to avoid module resolution issues

export const TableColumnHeader = {
  id: "table-column-header",
  title: `Table column headers should be tagged for assistive technology`,
  description: `If a column header is not marked up with the correct role or scope, screen reader users cannot determine which header applies to each cell.`,
  advice: `Use <th scope="col"> or assign role="columnheader" when building custom tables. Make sure each data cell is programmatically associated with the correct header so relationships are clear to assistive technology.`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "W3C", link: "https://www.w3.org/WAI/GL/wiki/Failure_of_Success_Criterion_1.3.1_for_not_correctly_marking_up_table_headers" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role" },
    { type: "ACT", link: "https://act-rules.github.io/rules/d0f69e" }
  ]
};
