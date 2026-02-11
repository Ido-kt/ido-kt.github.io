import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import { CompliantComponentHeader, PerceivableTraitSticky } from "@acsbe/core-engine-classifier";

/**
 * Checks if the given element has a valid `scroll-padding-top` value.
 *
 * This function retrieves the computed `scroll-padding-top` value of the element
 * and compares it to the height of the header. It returns true if the `scroll-padding-top`
 * is greater than or equal to the header height.
 *
 * @param {SvgOrHtmlElement} element - The element to check for `scroll-padding-top`.
 * @param {SvgOrHtmlElement} header - The header element whose height is used for comparison.
 * @param {EngineClassifier} classifier - The classifier used to get the element's computed style and the header's layout information.
 * @returns {boolean} - True if the `scroll-padding-top` is valid, false otherwise.
 */
function hasValidScrollPaddingTop(element: SvgOrHtmlElement, header: SvgOrHtmlElement, classifier: EngineClassifier): boolean {
  const { scrollPaddingTop } = classifier.getOperations(element).layoutInfo;
  const headerHeight = classifier.getOperations(header).layoutInfo.height;
  return scrollPaddingTop >= headerHeight;
}

export const FocusNotObscuredHeader: Rule = {
  id: "focus-not-obscured-header",
  metadata: {
    category: "Lists",
    profile: "Motor Impaired",
    wcagVersion: "2.2",
    wcagLevel: "AA",
  },
  impact: "serious",
  title: "Focused elements should not be obscured by a sticky header",
  description: "A sticky header remains anchored to the top of the screen while the rest of the page content can be scrolled. If it is not offset from interactive elements, it can overlap and obscure the item in focus.",
  advice: "When a page has a sticky header, make sure that any element receiving focus is not fully covered by the header. One way to achieve this is by using the CSS property scroll-padding-top.",
  associatedDetectors: [CompliantComponentHeader, PerceivableTraitSticky],
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
      type: "ACT",
      ruleId: "0ssw9k",
      link: "https://act-rules.github.io/rules/0ssw9k",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const stickyHeaders = classifier.getMatched([CompliantComponentHeader, PerceivableTraitSticky]);
    for (const stickyHeader of stickyHeaders) {
      const { firstScrollableParent } = classifier.getOperations(stickyHeader).layoutInfo;
      if (!hasValidScrollPaddingTop(firstScrollableParent, stickyHeader, classifier)) {
        response.failedNodes.push(stickyHeader);
      }
    }
  },
};
