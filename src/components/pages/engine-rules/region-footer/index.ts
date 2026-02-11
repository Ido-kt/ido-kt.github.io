import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentFooter } from "@acsbe/core-engine-classifier";

export const RegionFooter: Rule = {
  id: "region-footer",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Footer region should be correctly marked up",
  description: "Ensure that the footer region is correctly marked up.",
  advice: "Add a footer element or use role=contentInfo to define the footer of the document.",
  associatedDetectors: [CompliantComponentFooter],
  refs: [
    {
      id: "WCAG-1.1.1",
      type: "WCAG",
      level: "A",
      link: "https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/page-structure/regions/",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/contentinfo.html",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role/",
    },
    {
      type: "Non-Standard",
      link: "https://www.digitala11y.com/contentinfo-role/",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, classifier }) {
    const footer = classifier.getMatched([CompliantComponentFooter])[0];

    if (footer) {
      response.passedNodes.push(footer);
    }
  },
};
