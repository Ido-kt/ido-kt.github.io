import { PerceivableTraitScreenReaderOnly, PerceivableTraitTabbable, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const TabbableVisible: Rule = {
  id: "tabbable-visible",
  metadata: {
    category: "Tabs",
    profile: "Vision Impaired",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Use tabindex attribute correctly to manage docus for custom interactive elements",
  description: "When interactive elements remain focusable while they are visually hidden, keyboard users may encounter controls that they cannot see and that should not be available in the current interface.",
  advice:
    'Apply tabindex="0" to custom interactive elements so they follow the natural tab sequence, and tabindex="-1" when an element should only be reachable programmatically. Avoid positive numbers such as tabindex="1" or higher, do not use invalid values such as letters or decimals, and ensure tabindex is not applied to static elements.Use tabindex="-1" to remove elements from the tab order when they are offscreen. Consider using CSS techniques, such as display:none or visibility:hidden when content should be hidden from all users.',
  associatedDetectors: [PerceivableTraitTabbable, PerceivableTraitVisible, PerceivableTraitScreenReaderOnly],
  refs: [
    {
      type: "Non-Standard",
      link: "https://docs.deque.com/issue-help/1.0.0/en/focus-on-hidden-item",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([PerceivableTraitTabbable]);

    for (const element of elements) {
      // Asserting PerceivableTraitScreenReaderOnly is too general and can lead to false positives, but asserting PerceivableComponentSkipLink causes unwanted element focus calls.
      const isSkipLink = classifier.assert(element, PerceivableTraitScreenReaderOnly);

      // skip link is expected to behave like that - to be hidden and tabbable
      if (isSkipLink) {
        response.passedNodes.push(element);
        continue;
      }

      const isHidden = !classifier.assert(element, PerceivableTraitVisible);
      if (isHidden) {
        response.failedNodes.push(element);
        continue;
      }

      response.passedNodes.push(element);
    }
  },
};
