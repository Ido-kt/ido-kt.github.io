import { PerceivableComponentLinkNavigation } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const LinkNavigationAmbiguous: Rule = {
  id: "link-navigation-ambiguous",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Ambiguous links should include additional screen-reader description",
  description: 'Ambiguous links like "Learn More", "Shop Now" and "Start Here" are often used as a call to action. However, screen-reader users, while using link navigation, do not interact with content above or below the link and therefore don\'t have the same context as to what they will learn more about.',
  advice: "Add a screen-reader only text which gives additional context to the destination of the link. You can use the `aria-label` attribute to provide a description of the link's purpose.",
  associatedDetectors: [PerceivableComponentLinkNavigation],
  refs: [
    {
      type: "WCAG",
      id: "2.4.4",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#link-purpose-in-context",
    },
    {
      type: "ACT",
      ruleId: "c487ae",
      link: "https://act-rules.github.io/rules/c487ae",
    },
    {
      type: "ACT",
      ruleId: "aizyf1",
      link: "https://act-rules.github.io/rules/aizyf1",
    },
    {
      type: "ACT",
      ruleId: "5effbb",
      link: "https://act-rules.github.io/rules/5effbb",
    },
    {
      type: "ACT",
      ruleId: "b20e66",
      link: "https://act-rules.github.io/rules/b20e66",
    },
    {
      type: "ACT",
      ruleId: "fd3a94",
      link: "https://act-rules.github.io/rules/fd3a94",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const links = classifier.getMatched([PerceivableComponentLinkNavigation]); // PerceivableComponentLinkNavigation contains within it logic to negate application links such as "tel:", "mailto:", etc.
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
        const {
          contentInfo: { ariaText, visibleText },
        } = classifier.getOperations(link);
        /**
         * this is done due to a logical conflict with 'visible-text-part-of-accessible-name' rule, which requires that the entire visible text is part of the accessible name.
         * if the 'link-navigation-discernible' remediation occurs, and if the generated description is ambigous, this will fail the current rule.
         * to avoid this, we are checking if the element was previously remediatiated with the visible text being included to the aria-label as a flag for inapplicability.
         */
        if (visibleText && ariaText.includes(visibleText)) {
          response.inapplicableNodes.push(link);
          continue;
        }

        response.failedNodes.push(link);
      } else {
        response.passedNodes.push(link);
      }
    }
  },
};
