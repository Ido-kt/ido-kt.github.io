import { CompliantComponentMainContent } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const RegionMainContentSingle: Rule = {
  id: "region-main-content-single",
  metadata: {
    category: "Tabs",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Each page should include at most one main landmark",
  description: "A page typically presents one central subject, so a single main landmark establishes the boundaries of the primary content for screen reader users. Multiple main landmarks create uncertainty about the scope, leading to confusion and difficulty navigating the page.",
  advice: 'Keep only the true primary area as <main> or role="main", and change others to suitable elements—such as <section>, <nav>, or a neutral <div>. In modular or single-page apps, only the active view should expose a main landmark; remove the role or unmount inactive modules, or hide them with hidden or display:none.',
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
      type: "WAI",
      link: "https://w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([CompliantComponentMainContent]);
    /**
     * The case of "no main content elements" is being handled by a separate rule, which will validate there is a main content region.
     * main-content-single rule validates there are no more than one main content region.
     * If there is no main content region, this rule should not fail.
     */
    if (elements.length > 1) {
      response.failedNodes.push(...elements.slice(1));
    }
  },
};
