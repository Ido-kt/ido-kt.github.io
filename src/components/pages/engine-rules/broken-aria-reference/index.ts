import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const BrokenAriaReference: Rule = {
  id: "broken-aria-references",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Aria describedby/labelledby must point to a valid, existing element ID",
  description: "Screen readers rely on the HTML to provide explicit references between elements in order to parse the content and announce it to screen readers correctly. If the HTML includes broken ARIA references, screen reader users may not be able to browse properly.",
  advice: "Make sure that aria-describedby and aria-labeledby attributes point to an existing, screen-reader-visible element on the screen with proper text content.",
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
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, document }) {
    const elements = document.querySelectorAll<HTMLElement>("[aria-describedby], [aria-labelledby]");
    for (const element of elements) {
      const ariaLabelledBy = element.getAttribute("aria-labelledby");
      if (ariaLabelledBy && !document.getElementById(ariaLabelledBy)) {
        response.failedNodes.push(element);
        continue;
      }

      const ariaDescribedBy = element.getAttribute("aria-describedby");
      if (ariaDescribedBy && !document.getElementById(ariaDescribedBy)) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
