import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitDirectText, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";

export const TextSpacingLineHeight: Rule = {
  id: "text-spacing-line-height",
  metadata: {
    category: "Lists",
    profile: "Vision Impaired",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Line height should scale to at least 1.5 times the font size without loss of content or functionality",
  description: "When line height is increased to 1.5 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed heights, fixed widths, hidden overflow, or absolute positioning prevent proper reflow",
  advice: "Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to make sure content remains readable when line spacing is scaled to 1.5 times the font size.",
  associatedDetectors: [PerceivableTraitDirectText, PerceivableTraitVisible],
  refs: [
    {
      type: "WCAG",
      id: "1.4.12",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html",
    },
    {
      type: "ACT",
      ruleId: "78fd32",
      link: "https://act-rules.github.io/rules/78fd32",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const candidates = classifier.getMatched([PerceivableTraitVisible, PerceivableTraitDirectText]);

    for (const candidate of candidates) {
      const { typographyInfo } = classifier.getOperations(candidate);
      if (typographyInfo.lineHeight < 1.5 * typographyInfo.fontSize) {
        response.failedNodes.push(candidate);
      } else {
        response.passedNodes.push(candidate);
      }
    }
  },
};
