import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import { PerceivableComponentCarousel } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const CarouselAriaLive: Rule = {
  id: "carousel-aria-live",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "critical",
  title: "Carousels should not be tagged as live regions",
  description: "When carousels are tagged as live regions, screen readers will interrupt reading and announce every slide change, even when the user isn't interacting with the carousel or is in another section entirely.",
  advice: 'Remove the aria-live attribute and any live region roles, such as role="alert", from the carousel and its content.',
  associatedDetectors: [PerceivableComponentCarousel],
  refs: [
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",
    },
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/screen-reader-support-aria-live-regions/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const carousels = classifier.getMatched([PerceivableComponentCarousel]);

    for (const carousel of carousels) {
      // includes the carousel itself and its children
      const selector = "[aria-live]";
      const elementsWithAriaLive = Array.from(carousel.querySelectorAll(selector)) as SvgOrHtmlElement[];

      if (carousel.matches(selector)) {
        elementsWithAriaLive.push(carousel);
      }

      for (const element of elementsWithAriaLive) {
        const value = element.getAttribute("aria-live");

        if (value === "" || value === "off") {
          response.passedNodes.push(element);
        } else {
          response.failedNodes.push(element);
        }
      }
    }
  },
};
