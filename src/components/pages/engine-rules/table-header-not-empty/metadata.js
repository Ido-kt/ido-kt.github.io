// Generated metadata for table-header-not-empty
// This file is auto-generated from index.ts to avoid module resolution issues

export const TableHeaderNotEmpty = {
  id: "table-header-not-empty",
  title: `Table header cells should not be empty`,
  description: `If a table header cell is empty, screen reader users may only hear a generic label such as "column 3" or nothing at all. This makes it harder to understand what each column or row represents.`,
  advice: `Provide meaningful text for all table header cells, using visible or hidden labels. If a cell is not a true header, use <td> or omit the header role.`,
  impact: "serious",
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "ACT",
      id: "d0f69e",
      level: "",
      link: "https://act-rules.github.io/rules/d0f69e",
    },
  ],
};
