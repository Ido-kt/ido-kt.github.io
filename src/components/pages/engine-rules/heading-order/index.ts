import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import { CompliantComponentHeading, CompliantTraitVisible, PerceivableComponentHeading } from "@acsbe/core-engine-classifier";

/**
 * Checks if the heading hierarchy is consistent.
 *
 * This function iterates through an array of heading elements and ensures that
 * the difference between the levels of consecutive headings is not greater than 1.
 *
 * @param {SvgOrHtmlElement[]} headings - An array of heading elements to check.
 * @param {EngineClassifier} classifier - The engine classifier instance.
 * @returns {boolean} - Returns true if the heading hierarchy is consistent, otherwise false.
 */
function getHeadingHierarchyConsistentNodes(headings: SvgOrHtmlElement[], classifier: EngineClassifier): { passedNodes: SvgOrHtmlElement[]; failedNodes: SvgOrHtmlElement[] } {
  let lastLevel = 0;
  const context = classifier.getContext(PerceivableComponentHeading);
  const passedNodes: Set<SvgOrHtmlElement> = new Set();
  const failedNodes: Set<SvgOrHtmlElement> = new Set();
  for (const heading of headings) {
    const currentLevel = context.getCompliantHeadingLevel(heading);
    if (currentLevel - lastLevel > 1) {
      failedNodes.add(heading);
      continue;
    }
    passedNodes.add(heading);
    lastLevel = currentLevel;
  }
  return { passedNodes: Array.from(passedNodes), failedNodes: Array.from(failedNodes) };
}

export const HeadingOrder: Rule = {
  id: "heading-order",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Heading levels should follow a logical hierarchy",
  description: "Incorrect heading hierarchy can create a misleading page outline, disrupt navigation by heading shortcuts, and cause confusion about the structure and importance of content. Skipping levels or using them inconsistently makes it harder for screen reader users and others who rely on structured navigation to understand the page.",
  advice:
    "Use heading levels in a meaningful, hierarchical order that reflects the structure of the content. Start with a single <h1> for the main page title, then use <h2> for primary sections, <h3> for subsections, and so on. Best practice avoids skipping levels (for example, jumping from <h1> to <h3>) to maintain a logical sequence and ensure a clear, consistent outline for all users.",
  associatedDetectors: [CompliantComponentHeading, CompliantTraitVisible, PerceivableComponentHeading],
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
    const headings = classifier.getMatched([CompliantComponentHeading, CompliantTraitVisible]);
    const { passedNodes, failedNodes } = getHeadingHierarchyConsistentNodes(headings, classifier);
    response.passedNodes.push(...passedNodes);
    response.failedNodes.push(...failedNodes);
  },
};
