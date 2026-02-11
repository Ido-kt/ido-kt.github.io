import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import { CompliantComponentHeading, PerceivableComponentHeading } from "@acsbe/core-engine-classifier";

export const HeadingOrderOptimal: Rule = {
  id: "heading-order-optimal",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Heading levels should reflect the structure of the content",
  description: "Incorrect heading hierarchy can create a misleading page outline, disrupt navigation by heading shortcuts, and cause confusion about the structure and importance of content. Using the correct heading level preserves a logical structure, allowing users to understand how sections relate to each other.",
  advice: "Heading levels should reflect how each section relates to the main topic. Use <h1> for the overall subject,<h2> for major sections, and deeper levels, such as <h3> and <h4>, for subsections.",
  associatedDetectors: [CompliantComponentHeading, PerceivableComponentHeading],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships",
    },
    {
      type: "WCAG",
      id: "2.4.1",
      level: "A",
      link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-headings",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const compliantHeadings = new Set<SvgOrHtmlElement>(classifier.getMatched([CompliantComponentHeading]));
    const context = classifier.getContext(PerceivableComponentHeading);
    const { headings: perceivableHeadings, elementLevels } = context.data;

    for (const heading of perceivableHeadings) {
      if (!compliantHeadings.has(heading)) {
        response.failedNodes.push(heading);
        continue;
      }

      const level = context.getCompliantHeadingLevel(heading);
      if (elementLevels.get(heading) !== level) {
        response.failedNodes.push(heading);
        continue;
      }

      response.passedNodes.push(heading);
    }
  },
};
