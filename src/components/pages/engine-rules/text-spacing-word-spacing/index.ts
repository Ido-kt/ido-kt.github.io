import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitDirectText, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";

export const TextSpacingWordSpacing: Rule = {
  id: "text-spacing-word-spacing",
  metadata: {
    category: "Lists",
    profile: "Vision Impaired",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Text spacing - word spacing",
  description: "Word spacing to at least 0.16 times the font size",
  advice: "Increase the word spacing to at least 0.16 times the font size.",
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
      ruleId: "9e45ec",
      link: "https://act-rules.github.io/rules/9e45ec",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const candidates = classifier.getMatched([PerceivableTraitVisible, PerceivableTraitDirectText]);

    for (const candidate of candidates) {
      const { typographyInfo } = classifier.getOperations(candidate);
      if (typographyInfo.wordSpacing < 0.16 * typographyInfo.fontSize) {
        response.failedNodes.push(candidate);
      } else {
        response.passedNodes.push(candidate);
      }
    }
  },
};
