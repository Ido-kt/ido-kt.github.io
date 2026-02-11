import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitTabbable, CompliantTraitVisible } from "@acsbe/core-engine-classifier";

export const SRHiddenTabbable: Rule = {
  id: "sr-hidden-tabbable",
  metadata: {
    category: "Tabs",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Elements hidden from screen-reader must not contain tabbable elements.",
  description: "although the elements are hidden from assistive technologies, users can still navigate to any focusable child elements using the keyboard, but their content is inaccessible to people who use assistive technologies.",
  advice: "Remove the tabindex attribute from the non-interactive element or set it to -1. This will prevent the element from being focused on by keyboard users.",
  associatedDetectors: [PerceivableTraitTabbable, CompliantTraitVisible],
  refs: [
    {
      type: "Non-Standard",
      link: "https://dequeuniversity.com/rules/axe/4.1/aria-hidden-focus",
    },
    {
      type: "Non-Standard",
      link: "https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/hidden/#does-not-work-on-focusable-elements/",
    },
    {
      type: "Non-Standard",
      link: "https://accessibilityinsights.io/info-examples/web/aria-hidden-focus/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const tabbables = classifier.getMatched([PerceivableTraitTabbable]);

    for (const tabbable of tabbables) {
      const isCompliantVisible = classifier.assert(tabbable, CompliantTraitVisible);

      if (isCompliantVisible) {
        response.passedNodes.push(tabbable);
      } else {
        response.failedNodes.push(tabbable);
      }
    }
  },
};
