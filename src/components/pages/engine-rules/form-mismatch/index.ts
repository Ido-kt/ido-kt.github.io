import { CompliantComponentForm, PerceivableComponentForm } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const FormMismatch: Rule = {
  id: "form-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "A container of input elements should be tagged as a form",
  description: 'Input elements should be enclosed in a <form> element or an element with role="form" so that browsers and assistive technologies identify and expose the fields as part of a form.\'',
  advice: 'Enclose the input controls in a <form> element or assign role="form" to an element that contains the fields.',
  associatedDetectors: [CompliantComponentForm, PerceivableComponentForm],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/TR/wai-aria/#form",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const forms = classifier.getMatched([PerceivableComponentForm]);
    for (const form of forms) {
      const isCompliant = classifier.assert(form, CompliantComponentForm);
      if (isCompliant) {
        response.passedNodes.push(form);
      } else {
        response.failedNodes.push(form);
      }
    }
  },
};
