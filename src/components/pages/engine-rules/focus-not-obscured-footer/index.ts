import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import { CompliantComponentFooter, PerceivableTraitSticky } from "@acsbe/core-engine-classifier";

/**
 * Checks if the given element has a valid `scroll-padding-bottom` value.
 *
 * This function retrieves the computed `scroll-padding-bottom` value of the element
 * and compares it to the height of the footer. It returns true if the `scroll-padding-bottom`
 * is greater than or equal to the footer height.
 *
 * @param {SvgOrHtmlElement} element - The element to check for `scroll-padding-bottom`.
 * @param {SvgOrHtmlElement} footer - The footer element whose height is used for comparison.
 * @param {EngineClassifier} classifier - The classifier used to get the element's computed style and the footer's layout information.
 * @returns {boolean} - True if the `scroll-padding-bottom` is valid, false otherwise.
 */
function hasValidScrollPaddingBottom(element: SvgOrHtmlElement, footer: SvgOrHtmlElement, classifier: EngineClassifier): boolean {
  const { scrollPaddingBottom } = classifier.getOperations(element).layoutInfo;
  const footerHeight = classifier.getOperations(footer).layoutInfo.height;
  return scrollPaddingBottom >= footerHeight;
}

export const FocusNotObscuredFooter: Rule = {
  id: "focus-not-obscured-footer",
  metadata: {
    category: "Landmarks",
    profile: "Motor Impaired",
    wcagVersion: "2.2",
    wcagLevel: "AA",
  },
  impact: "serious",
  title: "Focused elements should not be obscured by a sticky footer",
  description: "A sticky footer remains anchored to the bottom of the screen while the rest of the page content can be scrolled. If it is not offset from interactive elements, it can overlap and obscure the item in focus.",
  advice: "When a page has a sticky footer, make sure that any element receiving focus is not fully covered by the footer. One way to achieve this is by using the CSS property scroll-padding-bottom.",
  associatedDetectors: [CompliantComponentFooter, PerceivableTraitSticky],
  refs: [
    {
      type: "WCAG",
      id: "2.4.11",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
    },
    {
      type: "WCAG",
      id: "2.4.12",
      level: "AAA",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG22/Techniques/css/C43",
    },
    {
      type: "Non-Standard",
      link: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F110",
    },
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/how-to-test-2-4-11-focus-not-obscured-minimum/",
    },
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/",
    },
    {
      type: "Non-Standard",
      link: "https://tetralogical.com/blog/2023/06/08/focus-in-view/",
    },
    {
      type: "ACT",
      ruleId: "0ssw9k",
      link: "https://act-rules.github.io/rules/0ssw9k",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const stickyFooters = classifier.getMatched([CompliantComponentFooter, PerceivableTraitSticky]);
    for (const stickyFooter of stickyFooters) {
      const { firstScrollableParent } = classifier.getOperations(stickyFooter).layoutInfo;
      if (!hasValidScrollPaddingBottom(firstScrollableParent, stickyFooter, classifier)) {
        response.failedNodes.push(stickyFooter);
      }
    }
  },
};
