import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentHeading, PerceivableComponentHeading } from "@acsbe/core-engine-classifier";

export const HeadingMismatch: Rule = {
  id: "heading-mismatch",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Headings should be tagged for assistive technology",
  description: "Text that visually functions as a heading for sighted users should also be tagged as a heading for screen reader users.",
  advice:
    'If you specifically coded headings without native HTML tags (like h1, h2, etc.) for SEO reasons or otherwise, use role="heading" and aria-level="1/2/3/4/5/6" (the appropriate heading level) to make sure that screen readers announce them as headings. For example, role="heading" aria-level="3" will be treated by screen readers as a h3 heading. Alternatively, you can directly code those elements as native HTML headings.',
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
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const headings = classifier.getMatched([PerceivableComponentHeading]);

    for (const heading of headings) {
      const isCompliant = classifier.assert(heading, CompliantComponentHeading);

      if (isCompliant) {
        response.passedNodes.push(heading);
      } else {
        response.failedNodes.push(heading);
      }
    }
  },
};
