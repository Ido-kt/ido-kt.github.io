import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentSelectOption, PerceivableComponentSelectOption } from "@acsbe/core-engine-classifier";

export const SelectOptionMisuse: Rule = {
  id: "select-option-misuse",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Only elements that function as select options should be tagged as option",
  description: 'Assigning role="option" outside the required listbox structure causes screen readers to ignore the role, leaving users without the intended semantics of the original element. This can obscure key information and make the content harder for users to interpret.',
  advice: 'Remove role="option" from the failing element.',
  associatedDetectors: [PerceivableComponentSelectOption, CompliantComponentSelectOption],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const selectOptions = classifier.getMatched([CompliantComponentSelectOption]);

    for (const selectOption of selectOptions) {
      if (classifier.assert(selectOption, PerceivableComponentSelectOption)) {
        response.passedNodes.push(selectOption);
      } else {
        response.failedNodes.push(selectOption);
      }
    }
  },
};
