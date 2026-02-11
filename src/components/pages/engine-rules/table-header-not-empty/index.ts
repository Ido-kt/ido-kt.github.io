import { CompliantComponentTableColumnHeader, CompliantComponentTableRowHeader, CompliantTraitExposed } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const TableHeaderNotEmpty: Rule = {
  id: "table-header-not-empty",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Table header cells should not be empty",
  description: "If a table header cell is empty, screen reader users may only hear a generic label such as “column 3” or nothing at all. This makes it harder to understand what each column or row represents.",
  advice: "Provide meaningful text for all table header cells, using visible or hidden labels. If a cell is not a true header, use <td> or omit the header role.",
  associatedDetectors: [CompliantComponentTableColumnHeader, CompliantComponentTableRowHeader, CompliantTraitExposed],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "ACT",
      ruleId: "d0f69e",
      link: "https://act-rules.github.io/rules/d0f69e",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const compliantComponentTableColumnHeaders = classifier.getMatched([CompliantComponentTableColumnHeader]);
    const compliantComponentTableRowHeaders = classifier.getMatched([CompliantComponentTableRowHeader]);
    const headers = [...compliantComponentTableColumnHeaders, ...compliantComponentTableRowHeaders];

    for (const header of headers) {
      const isExposed = classifier.assert(header, CompliantTraitExposed);

      /**
       * we check for text only if the table header is visible to a screen reader, otherwise it's not applicable
       */
      if (isExposed) {
        const {
          contentInfo: { visibleText, ariaText },
        } = classifier.getOperations(header);

        if (visibleText === "" && ariaText === "") {
          response.failedNodes.push(header);
          continue;
        }
      }

      response.passedNodes.push(header);
    }
  },
};
