import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentFooter, CompliantComponentFooter } from "@acsbe/core-engine-classifier";

export const RegionFooterMisuse: Rule = {
  id: "region-footer-misuse",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Footer region should be correctly marked up",
  description: "Ensure that the footer region is correctly marked up.",
  advice: "Add a <footer> element to define the footer of the document.",
  associatedDetectors: [PerceivableComponentFooter, CompliantComponentFooter],
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
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const footers = classifier.getMatched([CompliantComponentFooter]);

    for (const footer of footers) {
      if (await classifier.assert(footer, PerceivableComponentFooter)) {
        response.passedNodes.push(footer);
      } else {
        response.failedNodes.push(footer);
      }
    }
  },
};
