import { PerceivableComponentFormFieldRequired, PerceivableTraitVisible } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const RequiredFormFieldAriaRequired: Rule = {
  id: "required-form-field-aria-required",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Mandatory form fields should indicate that they are required",
  description: 'If a field is marked as required only through visual cues, but lacks the required attribute or aria-required="true", screen readers will not announce it as mandatory. As a result, users may experience unnecessary delays or confusion when trying to submit the form.',
  advice: 'Add required or aria-required="true" to required input fields.',
  associatedDetectors: [PerceivableComponentFormFieldRequired],
  refs: [
    {
      type: "WCAG",
      id: "3.3.1",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=131%2C221%2C244%2C332%2C333%2C331#error-identification",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/forms/validation/#validating-required-input",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([PerceivableComponentFormFieldRequired, PerceivableTraitVisible]);
    for (const element of elements) {
      /**
       * Skip hidden fields as they are not visible to the user or screen-reader and hence not required to be tagged as such.
       */
      if (element instanceof HTMLInputElement && element.type === "hidden") {
        continue;
      }

      /**
       * In case of native elements, 'required' attribute is sufficient to indicate that the field is required
       * and will be detected by screen readers.
       */
      if (element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement) {
        if (element.required) {
          response.passedNodes.push(element);
          continue;
        }
      }

      /**
       * For non-native elements, we need to check for 'aria-required=true'
       */
      if (element.getAttribute("aria-required") !== "true") {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
