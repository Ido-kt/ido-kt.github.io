import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentTable, PerceivableComponentTable } from "@acsbe/core-engine-classifier";

export const TableMisuse: Rule = {
  id: "table-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Only elements that function as data tables should be tagged as table",
  description: "When a layout table is marked up with HTML elements like <table> or <tr>, or assigned table ARIA roles, screen readers announce a data table structure with rows, columns, and headers, even though the table is only used for page layout.",
  advice: 'Avoid using table markup or roles for visual layout. Use CSS for page structure, and if a table must be used for layout, remove semantic roles by adding role="presentation" or role="none".',
  associatedDetectors: [PerceivableComponentTable, CompliantComponentTable],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/tables/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const tables = classifier.getMatched([CompliantComponentTable]);
    for (const table of tables) {
      if (classifier.assert(table, PerceivableComponentTable)) {
        response.passedNodes.push(table);
      } else {
        response.failedNodes.push(table);
      }
    }
  },
};
