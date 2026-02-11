import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitFormFieldInteracted } from "@acsbe/core-engine-classifier";

export const AriaInvalidMismatch: Rule = {
  id: "aria-invalid-mismatch",
  metadata: {
    category: "Forms",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Form fields should indicate validation errors to assistive technology",
  description: "Screen reader users rely on properly coded field validation status and associated errormessages. Otherwise, users have to browse around and search the page for clues as to why their submission attempt didn't work.",
  advice: 'To make sure that screen readers are aware of form fields with invalid input, set aria-invalid="true". Remove the attribute once the value becomes valid.',
  associatedDetectors: [PerceivableTraitFormFieldInteracted],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/TR/wai-aria/#aria-invalid",
    },
    {
      type: "WCAG",
      id: "3.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#error-identification",
    },
    {
      type: "WCAG",
      id: "3.3.3",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#error-suggestion",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const interactedElements = classifier.getMatched([PerceivableTraitFormFieldInteracted]);

    for (const element of interactedElements) {
      const isEmpty = !element["value"];
      const iRequired = element.hasAttribute("aria-required") || element.hasAttribute("required");
      const hasAriaInvalid = element.matches("[aria-invalid]:not([aria-invalid='false'])");

      if (isEmpty && iRequired && !hasAriaInvalid) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
