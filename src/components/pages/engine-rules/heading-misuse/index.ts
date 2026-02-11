import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentHeading, PerceivableComponentHeading } from "@acsbe/core-engine-classifier";

export const HeadingMisuse: Rule = {
  id: "heading-misuse",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Only elements that function as headings should be tagged as heading",
  description: "Accurate tagging allows screen readers to present content in a logical structure. Misidentifying an element as a heading disrupts navigation, creating confusion about the importance of content and page hierarchy.",
  advice: "Remove ARIA heading attributes from the failing element, or if the element is marked up using a native HTML tag, update the role according to the function of the element.",
  associatedDetectors: [CompliantComponentHeading, PerceivableComponentHeading],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "Non-Standard",
      link: "https://www.a11yproject.com/posts/how-to-accessible-heading-structure/",
    },
    {
      type: "ACT",
      ruleId: "047fe0",
      link: "https://act-rules.github.io/rules/047fe0",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const headers = classifier.getMatched([CompliantComponentHeading]);

    for (const header of headers) {
      if (classifier.assert(header, PerceivableComponentHeading)) {
        response.passedNodes.push(header);
      } else {
        response.failedNodes.push(header);
      }
    }
  },
};
