import { CompliantComponentMainContent } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const RegionMainContent: Rule = {
  id: "region-main-content",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Each web page that uses landmark regions should have a main landmark",
  description: "A main landmark (e.g., <main>) lets screen reader users quickly skip past repeated elements and jump straight to the primary content, improving navigation and orientation.",
  advice: 'Enclose all of the primary content on the page in either a <main> element or any container with role="main".',
  associatedDetectors: [CompliantComponentMainContent],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#info-and-relationships",
      level: "A",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/wai-aria-1.2/#main",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/html-main-element/",
    },
    {
      type: "WAI",
      link: "https://w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([CompliantComponentMainContent]);
    /**
     * The case of "more than one main content region" is being handled by a separate rule - main-content-single.
     * This rule is only concerned with the case of "no main content region".
     */
    if (elements[0]) {
      response.passedNodes.push(elements[0]);
    }
  },
};
