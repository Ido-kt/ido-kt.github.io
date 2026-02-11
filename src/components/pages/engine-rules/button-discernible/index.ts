import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitDiscernibleText, CompliantTraitVisible, CompliantComponentButton } from "@acsbe/core-engine-classifier";

export const ButtonDiscernible: Rule = {
  id: "button-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.1",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Buttons should have a label",
  description: "Buttons that do not contain visible text should be assigned labels that informs screen reader users of their purpose.",
  advice: "Add an aria-label or aria-labelledby attribute to the button.",
  associatedDetectors: [PerceivableTraitDiscernibleText, CompliantTraitVisible, CompliantComponentButton],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
    },
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
    const buttons = classifier.getMatched([CompliantTraitVisible, CompliantComponentButton]);

    for (const button of buttons) {
      if (classifier.assert(button, PerceivableTraitDiscernibleText)) {
        response.passedNodes.push(button);
      } else {
        response.failedNodes.push(button);
      }
    }
  },
};
