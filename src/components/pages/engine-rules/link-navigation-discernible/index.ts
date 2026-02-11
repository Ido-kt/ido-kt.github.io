import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableTraitDiscernibleText, PerceivableComponentLinkNavigation, CompliantTraitVisible } from "@acsbe/core-engine-classifier";

export const LinkNavigationDiscernible: Rule = {
  id: "link-navigation-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Link navigation discernible text",
  description: "Links need discernible text that tells visitors where the link takes them.",
  associatedDetectors: [PerceivableTraitDiscernibleText, PerceivableComponentLinkNavigation, CompliantTraitVisible],
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
  advice: "Add discernible text to the button",
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const links = classifier.getMatched([PerceivableComponentLinkNavigation, CompliantTraitVisible]);

    for (const link of links) {
      if (classifier.assert(link, PerceivableTraitDiscernibleText)) {
        response.passedNodes.push(link);
      } else {
        response.failedNodes.push(link);
      }
    }
  },
};
