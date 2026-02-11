import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitDiscernibleText, CompliantComponentRadioButton } from "@acsbe/core-engine-classifier";

export const RadioDiscernible: Rule = {
  id: "radio-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Radio controls should have a label",
  description: "Screen readers rely on properly coded and associated labels to announce the purpose of a form field. A radio control without an identifiable label may prevent screen reader users from completing the form.",
  advice: "Assign a label to each radio control using <label for> with a matching id (or wrapping the <label> around the control), or ARIA attributes such as aria-label or aria-labelledby.",
  associatedDetectors: [CompliantComponentRadioButton, PerceivableTraitDiscernibleText],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/radio",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const radioButtons = classifier.getMatched([CompliantComponentRadioButton]);

    for (const radio of radioButtons) {
      if (classifier.assert(radio, PerceivableTraitDiscernibleText)) {
        response.passedNodes.push(radio);
      } else {
        response.failedNodes.push(radio);
      }
    }
  },
};
