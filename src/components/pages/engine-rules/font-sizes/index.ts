import { PerceivableTraitVisible, PerceivableTraitDirectText } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const FontSizes: Rule = {
  id: "font-sizes",
  metadata: {
    category: "Lists",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "AA",
  },
  impact: "moderate",
  title: "Text should be scalable to 200% without loss of content or functionality",
  description: "When text is scaled to 200%, content may be clipped, overlap, or overflow its container if styles like fixed heights, fixed widths, hidden overflow, or absolute positioning prevent proper reflow.",
  advice: "Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to ensure content remains readable when text is scaled to 200%.",
  associatedDetectors: [PerceivableTraitVisible, PerceivableTraitDirectText],
  refs: [
    {
      type: "WCAG",
      id: "1.4.4",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#resize-text",
    },
    {
      type: "Non-Standard",
      link: "https://www.section508.gov/develop/fonts-typography/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([PerceivableTraitVisible, PerceivableTraitDirectText]);
    for (const element of elements) {
      const {
        typographyInfo: { fontSize },
      } = classifier.getOperations(element);
      /**
       * History about font-size <= 1:
       * Original code contained a check for font-size <= 1 as well.
       * After researching, we found there are cases where font size is 1px, and then developers use em as 1px = 1em (so that for 16px they would use 16em).
       * This is bad practice on the developers side, but doesn't break the rule.
       * TODO: Consider creating another rule for the font-sizes unit. It is recommended to use rem/em for font-sizes for easier scaling.
       */
      if (fontSize > 11) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
