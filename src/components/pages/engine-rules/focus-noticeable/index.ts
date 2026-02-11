import { PerceivableTraitTabbable } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const FocusNoticeable: Rule = {
  id: "focus-noticeable",
  metadata: {
    category: "Lists",
    profile: "Vision Impaired",
    wcagVersion: "2.0",
    wcagLevel: "AA",
  },
  isBackendOnly: true,
  impact: "serious",
  title: "Focusable elements should have a visible focus indicator",
  description: "All focusable elements must have a visible focus indicator when they receive keyboard focus.",
  advice: "Add a CSS outline or other visual indicator to focusable elements to ensure the currently focused element can be visibly distinguished.",
  associatedDetectors: [PerceivableTraitTabbable],
  refs: [
    {
      type: "WCAG",
      id: "2.4.7",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/WCAG21/#focus-visible",
    },
    {
      type: "ACT",
      ruleId: "oj04fd",
      link: "https://act-rules.github.io/rules/oj04fd",
    },
    {
      type: "ACT",
      ruleId: "80af7b",
      link: "https://act-rules.github.io/rules/80af7b",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const focusableElements = classifier.getMatched([PerceivableTraitTabbable]);
    if (focusableElements.length === 0) {
      return;
    }

    const cachedActiveElement = document.activeElement as HTMLElement;
    const cachedScroll = [window.scrollX, window.scrollY];
    let cleanupFunction = null;

    for (const element of focusableElements) {
      // TODO: Use improved operation after operations enhancement
      const {
        stateStyleInfo: { focusStyle, cleanup },
      } = classifier.getOperations(element);

      if (!cleanupFunction) {
        cleanupFunction = cleanup;
      }
      if (Object.keys(focusStyle).length === 0) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }

    // If provided, running the cleanup function to cleanup any side effects of the operation
    if (cleanupFunction) {
      cleanupFunction(cachedActiveElement, cachedScroll);
    }
  },
};
