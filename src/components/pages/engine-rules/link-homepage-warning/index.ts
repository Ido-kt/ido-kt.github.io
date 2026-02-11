import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentLink } from "@acsbe/core-engine-classifier";
import { textContainsWords } from "@acsbe/core-engine-dictionary";

export const LinkHomepageWarning: Rule = {
  id: "link-homepage-warning",
  metadata: {
    category: "Lists",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Links that redirect to the homepage shouldn't do so without warning the user",
  description: "Standalone redirection links to the homepage can unexpectedly shift the user's context by redirecting them to the homepage. They should therefore display a clear warning so that the user is informed before proceeding",
  advice: "Include a clear warning that will be visible for screen-readers, indicating that clicking the link will redirect the user to the homepage",
  associatedDetectors: [CompliantComponentLink],
  refs: [
    {
      type: "WCAG",
      id: "3.2.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const links = classifier.getMatched([CompliantComponentLink]);

    for (const link of links) {
      if (!(link instanceof HTMLAnchorElement)) {
        continue;
      }

      const href = link.getAttribute("href");

      if (!href) {
        continue;
      }

      const isHomePage = href === "/" || href === document.location.origin || href.substring(0, href.length - 1) === document.location.origin;
      if (!isHomePage) {
        continue;
      }

      const { contentInfo } = classifier.getOperations(link);
      const linkText = contentInfo.srVisibleText.toLowerCase();
      const containsKeywords = textContainsWords(linkText, ["home", "homepage"]);

      if (containsKeywords) {
        response.passedNodes.push(link);
      } else {
        response.failedNodes.push(link);
      }
    }
  },
};
