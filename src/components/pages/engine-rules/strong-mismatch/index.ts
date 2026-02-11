import { CompliantComponentStrong, PerceivableComponentStrong, CompliantTraitGeneric } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const StrongMismatch: Rule = {
  id: "strong-mismatch",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [CompliantComponentStrong, PerceivableComponentStrong, CompliantTraitGeneric],
  impact: "serious",
  title: "Strong should be tagged properly for assistive technology",
  description: "Elements with strong importance should have the strong role. If not, screen reader users may not understand the importance of the text.",
  advice: "Add role=strong to the elements that are perceived as strong importance.",
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
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong",
    },
    {
      type: "W3C",
      link: "https://www.w3schools.com/tags/tag_strong.asp",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([PerceivableComponentStrong]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantTraitGeneric)) {
        response.failedNodes.push(element);
      } else if (classifier.assert(element, CompliantComponentStrong)) {
        response.passedNodes.push(element);
      } else {
        response.inapplicableNodes.push(element);
      }
    }
  },
};
