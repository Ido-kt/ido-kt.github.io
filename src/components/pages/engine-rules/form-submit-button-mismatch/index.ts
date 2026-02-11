import { CompliantComponentFormSubmitButton, CompliantTraitVisible, PerceivableComponentFormSubmitButton } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const FormSubmitButtonMismatch: Rule = {
  id: "form-submit-button-mismatch",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: 'Form submission controls should have type="submit"',
  description: 'Adding type="submit" to a control that submits a form ensures that screen readers users expect a change of context when they activate the control.',
  advice: 'Assign type="submit" to <button> or <input> elements when they submit a form.',
  associatedDetectors: [CompliantComponentFormSubmitButton, PerceivableComponentFormSubmitButton, CompliantTraitVisible],
  refs: [
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20080430/H32.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const buttons = classifier.getMatched([PerceivableComponentFormSubmitButton, CompliantTraitVisible]);
    for (const button of buttons) {
      const isCompliant = classifier.assert(button, CompliantComponentFormSubmitButton);
      if (isCompliant) {
        response.passedNodes.push(button);
      } else {
        response.failedNodes.push(button);
      }
    }
  },
};
