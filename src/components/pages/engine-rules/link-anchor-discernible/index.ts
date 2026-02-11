import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitDiscernibleText, CompliantTraitVisible, PerceivableComponentLinkAnchor } from "@acsbe/core-engine-classifier";

export const LinkAnchorDiscernible: Rule = {
  id: "link-anchor-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Anchor links discernible text",
  description: "Anchors links need discernible text that tells visitors where the link takes them.",
  associatedDetectors: [PerceivableTraitDiscernibleText, PerceivableComponentLinkAnchor, CompliantTraitVisible],
  refs: [
    {
      type: "WCAG",
      id: "2.4.4",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html",
    },
    {
      type: "ACT",
      ruleId: "c487ae",
      link: "https://act-rules.github.io/rules/c487ae",
    },
  ],
  advice: "Add discernible text to the anchor",
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const links = classifier.getMatched([PerceivableComponentLinkAnchor, CompliantTraitVisible]) as HTMLAnchorElement[];

    for (const link of links) {
      if (classifier.assert(link, PerceivableTraitDiscernibleText)) {
        response.passedNodes.push(link);
      } else {
        response.failedNodes.push(link);
      }
    }
  },
};
