import { CompliantComponentLink } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const LinkContext: Rule = {
  id: "link-context",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Links should indicate their functionality and destination to assistive technology",
  description: "Visual cues on pages provide context to links or hint functionality to users with sight, even if the links aren't fully descriptive. Screen reader users need to know where a link will take them based on the anchor text without additional context.",
  advice: "Examples include links to the shopping cart, to the company's Facebook page, to the site's search page, or to other similar destinations. If the link's anchor text doesn't explicitly describe those destinations, add screen-reader only text describing the destination",
  associatedDetectors: [CompliantComponentLink],
  refs: [
    {
      type: "WCAG",
      id: "2.4.4",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#link-purpose-in-context",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([CompliantComponentLink]);

    for (const element of elements) {
      const {
        contextInfo: { hasContextualText },
      } = classifier.getOperations(element);

      // If both visible and related text do not have context, that means the link is not descriptive enough
      if (!hasContextualText) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
