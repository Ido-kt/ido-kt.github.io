import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentSelectOption, PerceivableComponentSelectOption } from "@acsbe/core-engine-classifier";

export const SelectOptionMismatch: Rule = {
  id: "select-option-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Custom select options should be tagged for assistive technology",
  description: "Native select elements automatically expose each option to screen readers, however roles for custom components must be explicitly defined. If custom option elements are not given the correct ARIA role and nested according to markup and accessibility guidelines, assistive technology may not recognize or interact with them.",
  advice: 'Assign role="option" to each custom select option.\nEnsure that each option is directly contained in an element with role="listbox"',
  associatedDetectors: [PerceivableComponentSelectOption, CompliantComponentSelectOption],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const selectOptions = classifier.getMatched([PerceivableComponentSelectOption]);
    for (const selectOption of selectOptions) {
      if (classifier.assert(selectOption, CompliantComponentSelectOption)) {
        response.passedNodes.push(selectOption);
        continue;
      }

      response.failedNodes.push(selectOption);
    }
  },
};
