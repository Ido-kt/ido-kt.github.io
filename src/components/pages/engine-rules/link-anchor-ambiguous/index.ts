import { PerceivableComponentLinkAnchor } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const LinkAnchorAmbiguous: Rule = {
  id: "link-anchor-ambiguous",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Ambiguous links should have additional descriptions for screen readers.",
  description: 'Ambiguous links like "Learn More", "Shop Now" and "Start Here" are often used as a call to action. However, screen-reader users, while using link navigation, do not interact with content above or below the link and therefore don\'t have the same context as to what they will learn more about.',
  advice: "Add a screen-reader only text which gives additional context to the destination of the link. You can use the `aria-label` attribute to provide a description of the link's purpose.",
  associatedDetectors: [PerceivableComponentLinkAnchor],
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
    const links = classifier.getMatched([PerceivableComponentLinkAnchor]);

    for (const link of links) {
      const {
        contentInfo: { srVisibleText },
        contextInfo: { isAmbiguous },
      } = classifier.getOperations(link);

      if (!srVisibleText) {
        response.inapplicableNodes.push(link);
        continue;
      }

      if (isAmbiguous) {
        response.failedNodes.push(link);
      } else {
        response.passedNodes.push(link);
      }
    }
  },
};
