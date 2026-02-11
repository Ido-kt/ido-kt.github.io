import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentLink } from "@acsbe/core-engine-classifier";
import { textContainsWords } from "@acsbe/core-engine-dictionary";

export const LinkTelephoneWarning: Rule = {
  id: "link-telephone-warning",
  metadata: {
    category: "Lists",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Warning a user when a link triggers a phone application is recommended",
  description: "It's good practice to warn users about the expected behavior when activating a link triggers a phone application.",
  advice: "Add a visibly hidden text element that contains 'Opens phone application'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.",
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
    const anchors = classifier.getMatched([CompliantComponentLink]);

    for (const anchor of anchors) {
      if (!(anchor instanceof HTMLAnchorElement)) {
        continue;
      }
      const isTelephone = anchor.href.startsWith("tel:");

      if (!isTelephone) {
        continue;
      }

      const {
        contentInfo: { srVisibleText: linkText },
      } = classifier.getOperations(anchor);
      const containsKeywords = textContainsWords(linkText.toLowerCase(), ["opens_phone", "opens_dialer"]);

      if (containsKeywords) {
        response.passedNodes.push(anchor);
      } else {
        response.failedNodes.push(anchor);
      }
    }
  },
};
