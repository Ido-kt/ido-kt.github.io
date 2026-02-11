import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentTable, CompliantComponentTableColumnHeader, CompliantComponentTableRowHeader } from "@acsbe/core-engine-classifier";

export const TableHeaders: Rule = {
  id: "table-headers",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Tables should include table header tags",
  description: "Screen readers can't match columns and cells without properly coded table header tags (TH). Without table headers, screen readers won't announce the table's content properly to users, leaving them unable to consume information.",
  advice: "Add a THEAD element to indicate a table heading section, and include TH elements for every column, describing the purpose of that table column.",
  associatedDetectors: [CompliantComponentTable, CompliantComponentTableColumnHeader, CompliantComponentTableRowHeader],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/tables/",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role",
    },
    {
      type: "ACT",
      ruleId: "d0f69e",
      link: "https://act-rules.github.io/rules/d0f69e",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const tables = classifier.getMatched([CompliantComponentTable]);
    for (const table of tables) {
      const columnHeaders = classifier.getMatched([CompliantComponentTableColumnHeader], table);
      const rowHeaders = classifier.getMatched([CompliantComponentTableRowHeader], table);
      if (!columnHeaders.length && !rowHeaders.length) {
        response.failedNodes.push(table);
      } else {
        response.passedNodes.push(table);
      }
    }
  },
};
