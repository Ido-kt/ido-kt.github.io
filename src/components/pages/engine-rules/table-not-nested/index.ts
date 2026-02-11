import { CompliantComponentTable } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

/**
 * Refactoring notes:
 * ------------------
 * The aflw version of this rule is using [data-aflw-group-table] to find nested tables.
 * This group-table includes role=tree and role=grid tables, which are not necessarily nested tables.
 * We still have to determine whether the above types should be included in this rule.
 *
 * Notes about the old code:
 * -------------------------
 *  1. The aflw rule does not test for role=grid or role=tree tables.
 *
 * References:
 * -----------
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/table_role
 */
export const TableNotNested: Rule = {
  id: "table-not-nested",
  metadata: {
    category: "Tables",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Tables should not be nested",
  description: "Nested tables are often misinterpreted by screen readers, making it hard for users to follow the intended structure and meaning of the data.",
  advice: 'Avoid nesting tables. Use separate tables with clear headings, and if tables are used for layout, assign  role="presentation" or role="none" to each table element.',
  associatedDetectors: [CompliantComponentTable],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#nesting_tables",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/WCAG20-TECHS/F49.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const tables = classifier.getMatched([CompliantComponentTable]);

    for (const table of tables) {
      if (classifier.getParent(table, CompliantComponentTable)) {
        response.failedNodes.push(table);
      } else {
        response.passedNodes.push(table);
      }
    }
  },
};
