import { PerceivableTraitVisible, PerceivableTraitDiscernibleText } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const RedundantDiscernibleContent: Rule = {
  id: "redundant-discernible-content",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.1",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Assigned label should not be redundant",
  description: "Providing the same text as the visible label in an aria-label is redundant and risky, as content may change over time or be translated into other languages, which may result in the label no longer matching the element.",
  advice: "Remove the aria-label from the failing element.",
  associatedDetectors: [PerceivableTraitVisible, PerceivableTraitDiscernibleText],
  refs: [
    {
      type: "WCAG",
      id: "2.5.3",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#label-in-name",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([PerceivableTraitVisible, PerceivableTraitDiscernibleText]);
    for (const element of elements) {
      const {
        contentInfo: { visibleText, ariaText },
      } = classifier.getOperations(element);

      if (visibleText && ariaText && visibleText.localeCompare(ariaText, "en", { sensitivity: "base" }) === 0) {
        response.failedNodes.push(element);
      }
    }
  },
};
