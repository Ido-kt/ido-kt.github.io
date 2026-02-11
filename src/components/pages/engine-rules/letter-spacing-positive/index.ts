import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitDirectText, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";

export const LetterSpacingPositive: Rule = {
  id: "letter-spacing-positive",
  metadata: {
    category: "Lists",
    profile: "Vision Impaired",
    wcagVersion: "2.1",
    wcagLevel: "AA",
  },
  impact: "critical",
  title: "Letter spacing should scale to at least 0.12 times the font size without loss of content or functionality",
  description: "When letter spacing is increased to 0.12 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed widths, fixed heights, hidden overflow, or forced no-wrap prevent proper reflow.",
  advice: "Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to ensure text remains readable when letter spacing is scaled to 0.12 times the font size.",
  associatedDetectors: [PerceivableTraitDirectText, PerceivableTraitVisible],
  refs: [
    {
      type: "WCAG",
      id: "1.4.12",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C211%2C1412#text-spacing",
    },
    {
      type: "ACT",
      ruleId: "24afc2",
      link: "https://act-rules.github.io/rules/24afc2",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const candidates = classifier.getMatched([PerceivableTraitVisible, PerceivableTraitDirectText]);

    for (const candidate of candidates) {
      const { typographyInfo } = classifier.getOperations(candidate);
      if (typographyInfo.letterSpacing < -1) {
        response.failedNodes.push(candidate);
      } else {
        response.passedNodes.push(candidate);
      }
    }
  },
};
