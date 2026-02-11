import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentSkipLink } from "@acsbe/core-engine-classifier";

export const SkipLinkExists: Rule = {
  id: "skip-link-exists",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Skip links are the preferred technique for bypassing repeated content",
  description: "Skip links let keyboard and screen reader users bypass repetitive navigation and jump directly to important sections such as main content, navigation, or footer. This improves efficiency, reduces keystrokes, and makes pages easier to use for those relying on assistive technology.",
  advice:
    'Add skip links as the first focusable elements on the page, directing users to regions marked with unique ids and appropriate landmarks such as <main>, <nav>, or <footer>. Keep them visually hidden until focused so they don’t clutter the layout, but ensure they remain accessible to screen readers by avoiding aria-hidden="true" or CSS display:none.',
  associatedDetectors: [PerceivableComponentSkipLink],
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
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, classifier }) {
    const skipLinks = classifier.getMatched([PerceivableComponentSkipLink]);

    if (skipLinks.length > 0) {
      response.passedNodes.push(...skipLinks);
    }
  },
};
