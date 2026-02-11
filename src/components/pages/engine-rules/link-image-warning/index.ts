import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentLink } from "@acsbe/core-engine-classifier";
import { textContainsWords } from "@acsbe/core-engine-dictionary";

export const LinkImageWarning: Rule = {
  id: "link-image-warning",
  metadata: {
    category: "Graphics",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Links that open an image shouldn't do so without warning the user",
  description: "Standalone image links can unexpectedly shift the user's context by redirecting them to an image. They should therefore display a clear warning so that the user is informed before proceeding",
  advice: "Include a clear warning that will be visible for screen-readers, indicating that clicking the link will open an image.",
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

    const imageExtensions = ["webp", "avif", "svg", "jpg", "jpeg", "png", "gif", "apng"];
    const imageRegex = new RegExp(`\\.(${imageExtensions.join("|")})$`, "i");

    for (const link of links) {
      if (!(link instanceof HTMLAnchorElement)) {
        continue;
      }

      const href = link.getAttribute("href");

      if (!RegExp(imageRegex).exec(href)) {
        continue;
      }

      const { contentInfo } = classifier.getOperations(link);
      const linkText = contentInfo.srVisibleText.toLowerCase();
      const containsKeywords = textContainsWords(linkText, ["opens_image"]);

      if (containsKeywords) {
        response.passedNodes.push(link);
      } else {
        response.failedNodes.push(link);
      }
    }
  },
};
