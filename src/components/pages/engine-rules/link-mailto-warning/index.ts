import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentLink } from "@acsbe/core-engine-classifier";
import { textContainsWords } from "@acsbe/core-engine-dictionary";

export const LinkMailtoWarning: Rule = {
  id: "link-mailto-warning",
  metadata: {
    category: "Lists",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Warning a user when a link triggers a mail application is recommended",
  description: "It's good practice to warn users about the expected behavior when activating a link triggers a mail application.",
  advice: "Add a visibly hidden text element that contains 'Opens mail application'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.",
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
      const isMailto = link.href.startsWith("mailto:");

      if (!isMailto) {
        continue;
      }

      const { contentInfo } = classifier.getOperations(link);
      const linkText = contentInfo.srVisibleText.toLowerCase();
      const containsKeywords = textContainsWords(linkText, ["opens_email", "composes_email", "launches_email"]);

      if (containsKeywords) {
        response.passedNodes.push(link);
      } else {
        response.failedNodes.push(link);
      }
    }
  },
};
