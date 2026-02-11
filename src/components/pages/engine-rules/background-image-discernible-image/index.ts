import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentBackgroundImage, PerceivableTraitDiscernibleText, PerceivableTraitScreenReaderOnly, CompliantComponentImage, CompliantTraitVisible } from "@acsbe/core-engine-classifier";

export const BackgroundImageDiscernibleImage: Rule = {
  id: "background-image-discernible-image",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Non decorative Background images should be tagged and labeled",
  description: "Background image alternative text should be labeled as image for screen reader.",
  advice: "Add role='img' to the first discernible sr-only element in the background image.",
  associatedDetectors: [PerceivableComponentBackgroundImage, PerceivableTraitDiscernibleText, PerceivableTraitScreenReaderOnly, CompliantComponentImage, CompliantTraitVisible],
  refs: [
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    },
    {
      type: "Non-Standard",
      link: "https://www.davidmacd.com/blog/alternate-text-for-css-background-images.html",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/GL/wiki/ARIATechnique_usingImgRole_with_aria-label_forCSS-backgroundImage",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const backgroundImages = classifier.getMatched([PerceivableComponentBackgroundImage, CompliantTraitVisible]);

    for (const image of backgroundImages) {
      const discernibleElements = classifier.getMatched([PerceivableTraitDiscernibleText], image);
      if (discernibleElements.length === 0) {
        /**
         * Non-discernible background images are handled in a different rule (background-image-discernible)
         */
        continue;
      }
      const firstDiscernibleElement = discernibleElements[0];
      const isScreenReaderOnly = classifier.assert(firstDiscernibleElement, PerceivableTraitScreenReaderOnly);
      if (!isScreenReaderOnly) {
        /**
         * Non-discernible background images are handled in a different rule (background-image-discernible)
         */
        continue;
      }
      const isImage = classifier.assert(firstDiscernibleElement, CompliantComponentImage);
      if (!isImage) {
        response.failedNodes.push(firstDiscernibleElement);
      } else {
        response.passedNodes.push(firstDiscernibleElement);
      }
    }
  },
};
