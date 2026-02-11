import { CompliantTraitNameProhibited, CompliantTraitVisible } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

/**
 * Aria labels should not be used on elements that have name-prohibited roles
 *
 * If an element has no text content and no accessibility role, the aria-label
 * attribute will not have any effect because the element is not recognized by
 * screen readers as needing an accessible name or description.
 *
 * @see https://www.w3.org/TR/wai-aria-1.3/#namefromprohibited
 * @see https://www.w3.org/TR/accname-1.2/#dfn-accessible-name
 * @see https://www.w3.org/TR/accname-1.2/#mapping_additional_nd_name
 * @see https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation
 */
export const NameProhibitedNoAriaLabel: Rule = {
  id: "name-prohibited-no-aria-label",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "moderate",
  title: "aria-label should be used with compatible roles",
  description: "Using aria-label on elements that do not support the attribute can lead to the label being ignored, leaving users without the intended information.",
  advice: "Use a visually hidden element to provide the name or description instead of an aria-label.",
  associatedDetectors: [CompliantTraitNameProhibited, CompliantTraitVisible],
  refs: [
    {
      type: "W3C",
      link: "https://www.w3.org/TR/html-aria/#docconformance",
    },
    {
      type: "Non-Standard",
      link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/#:~:text=Example%20of%20misusing%20ARIA%20labels%3A&text=In%20the%20first%20code%20snippet,the%20text%20inside%20it%20already.",
    },
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/short-note-on-aria-label-aria-labelledby-and-aria-describedby/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/wai-aria-1.2/#aria-label",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/using-aria/#practical-support-aria-label-aria-labelledby-and-aria-describedby",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label",
    },
    {
      type: "ACT",
      ruleId: "5c01ea",
      link: "https://act-rules.github.io/rules/5c01ea",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elementsWithProhibitedNaming = classifier.getMatched([CompliantTraitNameProhibited]);

    for (const el of elementsWithProhibitedNaming) {
      const operations = classifier.getOperations(el);

      if (operations.contentInfo.ariaText && classifier.assert(el, CompliantTraitVisible)) {
        response.failedNodes.push(el);
      } else {
        response.passedNodes.push(el);
      }
    }
  },
};
