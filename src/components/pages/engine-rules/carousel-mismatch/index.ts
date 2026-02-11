import { PerceivableComponentCarousel, CompliantComponentCarousel } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const CarouselMismatch: Rule = {
  id: "carousel-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Carousels should be tagged for assistive technology",
  description: 'The carousel container should have a role so assistive technology treats it as a distinct section. Using role="region" with a label exposes the carousel as a named region, allowing screen reader users to recognize the purpose of the component and navigate to it efficiently.',
  advice: 'Assign role="region" to the carousel container. Make sure to provide a descriptive label using aria-label or aria-labelledby.',
  associatedDetectors: [PerceivableComponentCarousel, CompliantComponentCarousel],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/carousels/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const candidates = classifier.getMatched([PerceivableComponentCarousel]);
    const compliantCarousels = classifier.getMatched([CompliantComponentCarousel]);

    for (const candidate of candidates) {
      if (!compliantCarousels.includes(candidate)) {
        response.failedNodes.push(candidate);
      } else {
        response.passedNodes.push(candidate);
      }
    }
  },
};
