import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentTableRowHeader, PerceivableComponentTableRowHeader } from "@acsbe/core-engine-classifier";

export const TableRowHeader: Rule = {
  id: "table-row-header",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Table row headers should be tagged for assistive technology",
  description: "If a table row header is not marked up with the correct role or scope, screen reader users cannot determine which header applies to each cell.",
  advice: 'Use <th scope="row"> or assign role="rowheader" when building custom tables. Make sure each data cell is programmatically associated with the correct header so relationships are clear to assistive technology.',
  associatedDetectors: [CompliantComponentTableRowHeader, PerceivableComponentTableRowHeader],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/GL/wiki/Failure_of_Success_Criterion_1.3.1_for_not_correctly_marking_up_table_headers",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_Role",
    },
    {
      type: "ACT",
      ruleId: "d0f69e",
      link: "https://act-rules.github.io/rules/d0f69e",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([PerceivableComponentTableRowHeader]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentTableRowHeader)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
