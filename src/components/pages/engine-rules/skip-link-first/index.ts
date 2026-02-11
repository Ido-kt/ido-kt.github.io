import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitTabbable, PerceivableComponentSkipLink } from "@acsbe/core-engine-classifier";

export const SkipLinkFirst: Rule = {
  id: "skip-link-first",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Skip links should be the first elements on a page",
  description: "Skip links should be placed at the very beginning of the page so they are encountered first by keyboard and screen reader users. This lets users quickly bypass repeated navigation and move directly to important regions such as the main content, navigation, or footer.",
  advice: "Place skip links at the very start of the page HTML.",
  associatedDetectors: [PerceivableTraitTabbable, PerceivableComponentSkipLink],
  refs: [
    {
      type: "Non-Standard",
      link: "https://dequeuniversity.com/rules/axe/4.7/skip-link",
    },
    {
      type: "Non-Standard",
      link: "https://a11y-101.com/development/skip-link",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/test-evaluate/easy-checks/skip-link/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  /**
   * This validation method takes advantage of the fact that the classifier returns the elements in the order they appear in the DOM.
   * If for some reason in the future, this is not the case, this validation will fail.
   */
  async validate({ response, classifier }) {
    const skipLinks = classifier.getMatched([PerceivableComponentSkipLink]);
    const tabbables = classifier.getMatched([PerceivableTraitTabbable]);

    for (const tabbable of tabbables) {
      if (classifier.assert(tabbable, PerceivableComponentSkipLink)) {
        response.passedNodes.push(tabbable);
      } else break;
    }
    response.failedNodes.push(...skipLinks.slice(response.passedNodes.length));
  },
};
