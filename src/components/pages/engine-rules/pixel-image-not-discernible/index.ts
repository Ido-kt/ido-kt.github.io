import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentImage, PerceivableTraitScreenReaderOnly } from "@acsbe/core-engine-classifier";

export const PixelImageNotDiscernible: Rule = {
  id: "pixel-image-not-discernible",
  metadata: {
    category: "Graphics",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Pixels should be hidden from assistive technology",
  description: "Visually hidden pixel images (often used for analytics or marketing purposes) should not be announced by screen readers.",
  advice: 'If the pixel image is an <img> element, assign an empty alt attribute. For other cases, add role="none" or role="presentation" to the pixel element.',
  associatedDetectors: [CompliantComponentImage, PerceivableTraitScreenReaderOnly],
  refs: [
    {
      type: "WCAG",
      id: "1.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const images = classifier.getMatched([CompliantComponentImage]);
    for (const image of images) {
      if (classifier.assert(image, PerceivableTraitScreenReaderOnly)) {
        response.inapplicableNodes.push(image);
        continue;
      }

      const { renderedWidth, renderedHeight } = classifier.getOperations(image).layoutInfo;

      if (renderedWidth === 1 && renderedHeight === 1) {
        response.failedNodes.push(image);
      }
    }
  },
};
