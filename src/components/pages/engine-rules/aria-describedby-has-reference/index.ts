import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const AriaDescribedByHasReference: Rule = {
  id: "aria-describedby-has-reference",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "aria-describedby should reference a valid element id",
  description: "The element’s aria-describedby attribute points to an id that does not exist or is not valid, preventing assistive technologies from announcing the intended description and causing users to miss important context.",
  advice: "Make the value of aria-describedby exactly match the id of an existing, unique element on the page. Remove or update the attribute if the target is missing or no longer relevant",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16",
    },
    {
      type: "ACT",
      ruleId: "in6db8",
      link: "https://act-rules.github.io/rules/in6db8",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, document }) {
    const elements = document.querySelectorAll<HTMLElement>("[aria-describedby]");
    for (const element of elements) {
      const ariaDescribedBy = element.getAttribute("aria-describedby").replaceAll(/\s+/g, " ");
      const hasBrokenReference = ariaDescribedBy
        .trim()
        .split(" ")
        .some((id) => !document.getElementById(id));

      if (hasBrokenReference) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
