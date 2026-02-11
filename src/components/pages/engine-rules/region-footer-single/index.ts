import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentFooter } from "@acsbe/core-engine-classifier";

export const RegionFooterSingle: Rule = {
  id: "region-footer-single",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Each page should include at most one global contentinfo landmark (footer)",
  description: "Each page should normally include only one contentinfo landmark (usually the site footer) to keep landmark navigation simple and predictable. Additional contentinfo landmarks are permitted when clearly justified, but they must each have a unique accessible label.",
  advice: 'Make sure each page has only one top-level contentinfo landmark for the global footer. For additional footer-like blocks, nest them inside sectioning elements, or use role="region" with a label instead of contentinfo.',
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
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const footers = classifier.getMatched([CompliantComponentFooter]);

    if (footers.length > 1) {
      response.failedNodes.push(...footers.slice(1));
    }
  },
};
