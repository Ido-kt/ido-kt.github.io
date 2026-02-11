import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentButton, CompliantComponentButton, CompliantTraitVisible, CompliantComponentMenuItem, CompliantComponentTab, CompliantComponentHeading, CompliantComponentSwitch } from "@acsbe/core-engine-classifier";

export const ButtonMismatch: Rule = {
  id: "button-mismatch",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Buttons should be tagged for assistive technology",
  description: "If interactive elements cannot be identified as buttons, screen reader users may not realize the element is actionable, which can stop them from submitting forms, opening dialogs, or performing other intended actions.",
  advice: 'Add role="button" to the custom navigation region, or use a HTML <button> element.',
  associatedDetectors: [PerceivableComponentButton, CompliantComponentButton, CompliantTraitVisible, CompliantComponentMenuItem, CompliantComponentTab, CompliantComponentSwitch],
  refs: [
    {
      type: "ACT",
      ruleId: "97a4e1",
      link: "https://act-rules.github.io/rules/97a4e1",
    },
    {
      type: "ACT",
      ruleId: "59796f",
      link: "https://act-rules.github.io/rules/59796f",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const buttons = classifier.getMatched([PerceivableComponentButton, CompliantTraitVisible]);

    for (const button of buttons) {
      /**
       * If the perceived button is a heading then it does not need to be tagged as a button but as interactable (InteractiveNotTabbable).
       */
      if (classifier.assert(button, CompliantComponentHeading)) {
        continue;
      }

      const isCompliantButtonSubtype = classifier.assert(button, CompliantComponentMenuItem) || classifier.assert(button, CompliantComponentTab) || classifier.assert(button, CompliantComponentSwitch);
      if (isCompliantButtonSubtype) {
        continue;
      }

      const isValid = classifier.assert(button, CompliantComponentButton);

      if (isValid) {
        response.passedNodes.push(button);
      } else {
        response.failedNodes.push(button);
      }
    }
  },
};
