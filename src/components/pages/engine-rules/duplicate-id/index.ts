import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const DuplicateId: Rule = {
  id: "duplicate-id",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "The id attribute should have a unique value",
  description: "The id attribute is a unique identifier in the DOM, and using the same value more than once creates ambiguity. This can cause styles and scripts to behave unpredictably, and may also disrupt label or ARIA references that depend on unique IDs.",
  advice: "Make sure all id attributes on a page have unique values.",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "4.1.1",
      level: "A",
      link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-parses",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/WCAG20-TECHS/F77.html",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/WCAG20-TECHS/H93.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, root }) {
    const nodesById = new Map<string, HTMLElement[]>();
    const candidates = root.querySelectorAll<HTMLElement>("[id]");

    for (const el of candidates) {
      if (el instanceof HTMLElement && el.id) {
        if (nodesById.has(el.id)) {
          nodesById.get(el.id).push(el);
        } else {
          nodesById.set(el.id, [el]);
        }
      }
    }

    for (const elements of nodesById.values()) {
      if (elements.length > 1) {
        response.failedNodes.push(...elements);
      } else {
        response.passedNodes.push(...elements);
      }
    }
  },
};
