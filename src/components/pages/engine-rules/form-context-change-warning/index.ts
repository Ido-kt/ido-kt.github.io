import { CompliantComponentForm, CompliantComponentFormSubmitButton, PerceivableTraitScreenReaderOnly } from "@acsbe/core-engine-classifier";
import { textContainsString, textContainsWord } from "@acsbe/core-engine-dictionary";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

/**
 * given a text and a dictionary key, this function checks if the text contains the word via `textContainsWord` and falls back to `textContainsString`
 */
export const textContainsWordOrString = (text: string, key: Parameters<typeof textContainsWord>[1]) => {
  return textContainsWord(text, key) || textContainsString(text, key);
};

export const FormContextChangeWarning: Rule = {
  id: "form-context-change-warning",
  metadata: {
    category: "Forms",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Interacting with form controls should not cause a change in context unless a user is notified beforehand",
  description: "Interacting with form controls shouldn't automatically submit a form or cause any other change in context without notifying the user in advance. Form controls that cause a context change on input can disorient a user, since the behavior is not expected.",
  advice: "Make sure that forms can be manually submitted via a submit button, or provide instructions that notify users of the expected behavior before they interact with the control.",
  associatedDetectors: [CompliantComponentForm, CompliantComponentFormSubmitButton, PerceivableTraitScreenReaderOnly],
  refs: [
    {
      type: "WCAG",
      id: "3.2.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/on-input",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20080430/H32.html",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20080430/G80.html",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/WAI/WCAG21/Techniques/general/G13",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG20/quickref/20080430/#consistent-behavior-unpredictable-change",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const forms = classifier.getMatched([CompliantComponentForm]);
    for (const form of forms) {
      const submitButtons = classifier.getMatched([CompliantComponentFormSubmitButton], form);

      if (submitButtons.length) {
        response.passedNodes.push(form);
        continue;
      }

      /**
       * submit buttons that are outside the form but are assigned to to it
       */
      const associatedSubmitButtons = classifier.getContext(CompliantComponentFormSubmitButton).data.formInputs;

      if (associatedSubmitButtons.get(form)) {
        response.passedNodes.push(form);
        continue;
      }

      const srOnlyElements = classifier.getMatched([PerceivableTraitScreenReaderOnly], form);
      const containsContextChangeWarning = srOnlyElements.some((srOnlyElement) => {
        const {
          contentInfo: { srVisibleText },
        } = classifier.getOperations(srOnlyElement);
        /**
         * contains either `form` and variations of `submit` or `form_submission` sentance
         */
        const containsForm = textContainsWordOrString(srVisibleText, "form");

        if (!containsForm) {
          return false;
        }

        return textContainsWordOrString(srVisibleText, "submit") || textContainsWordOrString(srVisibleText, "submission");
      });

      /**
       * if the form contains an sr-only element with context change warning then it should pass
       */
      if (containsContextChangeWarning) {
        response.passedNodes.push(form);
        continue;
      }

      response.failedNodes.push(form);
    }
  },
};
