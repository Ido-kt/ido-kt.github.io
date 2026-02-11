import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentLink } from "@acsbe/core-engine-classifier";

export const LinkCurrentPage: Rule = {
  id: "link-current-page",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "AAA",
  },
  impact: "moderate",
  title: "Visual indication that a link's destination is the current page should be announced by screen readers",
  description: "Visual cues are often used by sighted users to indicate which link represents the current page within a set of links. This information should be made available to screen reader users by assigning aria-current='page' to the link.",
  advice: 'Add aria-current="page" to the  link within a list of navigation links whose destination matches the page the user is currently navigating.',
  associatedDetectors: [CompliantComponentLink],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "AAA",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#info-and-relationships",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/TR/wai-aria-1.1/#aria-current",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaCurrent",
    },
    {
      type: "Non-Standard",
      link: "https://www.digitala11y.com/aria-current-state/",
    },
    {
      type: "Non-Standard",
      link: "https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/current/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const links = classifier.getMatched([CompliantComponentLink]);

    for (const link of links) {
      const href = link.getAttribute("href");
      if (href && window.location.href.trim().toLowerCase() === href.trim().toLowerCase()) {
        if (link.getAttribute("aria-current") !== "page") {
          response.failedNodes.push(link);
        } else {
          response.passedNodes.push(link);
        }
      }
    }
  },
};
