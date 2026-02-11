import { CompliantComponentEmphasis, PerceivableComponentEmphasis, CompliantTraitGeneric } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const EmphasisMismatch: Rule = {
  id: "emphasis-mismatch",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentEmphasis, PerceivableComponentEmphasis, CompliantTraitGeneric],
  impact: "serious",
  title: "Emphasis should be tagged properly for assistive technology",
  description: "Elements with emphasis importance should have the emphasis role. If not, screen reader users may not understand the emphasis of the text.",
  advice: "Add role=emphasis to the elements that are perceived as emphasis importance.",
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG21/Techniques/html/H49",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG21/Techniques/general/G115",
    },
    {
      type: "Non-Standard",
      link: "https://help.siteimprove.com/support/solutions/articles/80000448460-accessibility-the-use-of-emphasis-in-text",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em",
    },
    {
      type: "W3C",
      link: "https://www.w3schools.com/tags/tag_em.asp",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([PerceivableComponentEmphasis]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantTraitGeneric)) {
        response.failedNodes.push(element);
      } else if (classifier.assert(element, CompliantComponentEmphasis)) {
        response.passedNodes.push(element);
      } else {
        response.inapplicableNodes.push(element);
      }
    }
  },
};
