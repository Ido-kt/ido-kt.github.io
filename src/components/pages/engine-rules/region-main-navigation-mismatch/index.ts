import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentMainNavigation } from "@acsbe/core-engine-classifier";

export const RegionMainNavigation: Rule = {
  id: "region-main-navigation",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Main navigation region should be correctly marked up",
  description: "Ensure that the main navigation region is correctly marked up.",
  advice: "Add a <nav> element to define the main navigation of the document.",
  associatedDetectors: [PerceivableComponentMainNavigation],
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
  async validate({ response, root, classifier }) {
    //TODO: implement this method
    const footer = root.querySelector<HTMLElement>(`footer, [role="contentinfo"]`);
    const classifierMainNavigation = classifier.getMatched([PerceivableComponentMainNavigation]);

    if (footer !== classifierMainNavigation[0]) {
      response.failedNodes.push(footer);
    } else {
      response.passedNodes.push(footer);
    }
  },
};
