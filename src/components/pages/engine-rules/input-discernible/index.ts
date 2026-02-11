import { CompliantComponentInput, PerceivableTraitDiscernibleText } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const InputDiscernible: Rule = {
  id: "input-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Inputs must include a descriptive label",
  description: "Screen readers rely on correctly coded and associated labels to announce the purpose of a form field. If a label isn't properly associated with its input field, screen reader users won't know the expected input.",
  advice: "Provide a <label> element and associate it with the <input> using the for and id attributes. Alternatively, you can assign an aria-label attribute directly to the <input> element.",
  associatedDetectors: [PerceivableTraitDiscernibleText, CompliantComponentInput],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
    {
      type: "ACT",
      ruleId: "e086e5",
      link: "https://act-rules.github.io/rules/e086e5",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/forms/labels/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([CompliantComponentInput]);
    for (const element of elements) {
      const {
        contentInfo: { accessibleName },
      } = classifier.getOperations(element);

      if (!accessibleName) {
        response.failedNodes.push(element);
        continue;
      }
      response.passedNodes.push(element);
    }
  },
};
