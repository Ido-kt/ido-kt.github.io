import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentComboboxSelect, PerceivableTraitClickable } from "@acsbe/core-engine-classifier";

export const CustomSelectTriggerCombobox: Rule = {
  id: "custom-select-trigger-combobox",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Custom select triggers should be tagged for assistive technology",
  description:
    "Screen readers provide built-in support for native select triggers, but custom triggers are not automatically recognized. Without assigning the appropriate ARIA role and ensuring the element is structured in accordance with accessibility standards, assistive technology may fail to announce or activate the trigger, preventing screen reader users from opening and interacting with the select component.",
  advice: 'Assign role="combobox" to the custom select trigger.',
  associatedDetectors: [PerceivableComponentComboboxSelect, PerceivableTraitClickable],
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
      const selectTriggers = classifier.getMatchedDirect([PerceivableTraitClickable], select);
      for (const trigger of selectTriggers) {
        if (trigger.getAttribute("role") !== "combobox") {
          response.failedNodes.push(trigger);
        } else {
          response.passedNodes.push(trigger);
        }
      }
    }
  },
};
