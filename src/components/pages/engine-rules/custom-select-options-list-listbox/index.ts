import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentComboboxSelect, PerceivableComponentSelectOptions } from "@acsbe/core-engine-classifier";

export const CustomSelectOptionsListListbox: Rule = {
  id: "custom-select-options-list-listbox",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Custom select options lists should be tagged for assistive technology",
  description: "Native select elements automatically expose their option lists to screen readers, but custom implementations must be explicitly defined. Without exposing the correct roles and nesting them in line with established markup and accessibility standards, screen reader users may not be able to make a selection.",
  advice: 'Assign role="listbox" to the container element that directly holds the list options.',
  associatedDetectors: [PerceivableComponentComboboxSelect, PerceivableComponentSelectOptions],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const perceivableSelects = classifier.getMatched([PerceivableComponentComboboxSelect]);
    for (const select of perceivableSelects) {
      // Skip native select elements
      if (select instanceof HTMLSelectElement) {
        continue;
      }
      const optionsLists = classifier.getMatchedDirect([PerceivableComponentSelectOptions], select);
      for (const optionsList of optionsLists) {
        if (optionsList.getAttribute("role") !== "listbox") {
          response.failedNodes.push(optionsList);
        } else {
          response.passedNodes.push(optionsList);
        }
      }
    }
  },
};
