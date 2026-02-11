import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitTabbable, CompliantTraitInteractable } from "@acsbe/core-engine-classifier";

export const TabbableNonInteractive: Rule = {
  id: "tabbable-non-interactive",
  metadata: {
    category: "Tabs",
    profile: "Motor Impaired",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Non-interactive elements should not be keyboard navigable",
  description: "Allowing static content to receive keyboard focus creates unnecessary stops in the tab order, forcing users to tab through elements that provide no action and making keyboard navigation less intuitive.",
  advice: "Remove the tabindex attribute from the static element.",
  associatedDetectors: [PerceivableTraitTabbable, CompliantTraitInteractable],
  refs: [
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#accessibility_concerns",
    },
    {
      type: "Non-Standard",
      link: "https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/",
    },
    {
      type: "Non-Standard",
      link: "https://dequeuniversity.com/rules/axe/4.4/tabindex",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const tabbables = classifier.getMatched([PerceivableTraitTabbable]);

    for (const tabbable of tabbables) {
      const isInteractable = classifier.assert(tabbable, CompliantTraitInteractable);

      if (!isInteractable) {
        response.failedNodes.push(tabbable);
      } else {
        response.passedNodes.push(tabbable);
      }
    }
  },
};
