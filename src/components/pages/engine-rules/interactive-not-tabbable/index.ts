import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantTraitInteractable, PerceivableTraitClickable, PerceivableTraitTabbable, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";

export const InteractiveNotTabbable: Rule = {
  id: "interactive-not-tabbable",
  metadata: {
    category: "Lists",
    profile: "Motor Impaired",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "serious",
  title: "Interactive elements should be keyboard navigable",
  description: "Interactive elements should be keyboard navigable. If a custom interactive element is not keyboard navigable, keyboard users will not be able to interact with it.",
  advice: 'Add tabindex="0" to the custom interactive element.',
  associatedDetectors: [PerceivableTraitTabbable, CompliantTraitInteractable, PerceivableTraitClickable, PerceivableTraitVisible],
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
    {
      type: "ACT",
      ruleId: "46ca7f",
      link: "https://act-rules.github.io/rules/46ca7f",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const interactables = new Set(classifier.getMatched([CompliantTraitInteractable]).concat(classifier.getMatched([PerceivableTraitClickable])));

    for (const interactable of interactables) {
      if (!classifier.assert(interactable, PerceivableTraitVisible)) {
        response.inapplicableNodes.push(interactable);
        continue;
      }

      // If an element has a clickable parent, it is considered inapplicable because
      // the parent likely handles the interaction, making the child redundant for accessibility purposes.
      const hasParentClickable = classifier.getParent(interactable, CompliantTraitInteractable) ?? classifier.getParent(interactable, PerceivableTraitClickable);
      if (hasParentClickable) {
        response.inapplicableNodes.push(interactable);
        continue;
      }

      const isTabbable = classifier.assert(interactable, PerceivableTraitTabbable);

      if (isTabbable) {
        response.passedNodes.push(interactable);
      } else {
        response.failedNodes.push(interactable);
      }
    }
  },
};
