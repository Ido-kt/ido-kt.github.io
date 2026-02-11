import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantTraitVisible, PerceivableComponentBackgroundImage, PerceivableTraitDiscernibleText, PerceivableTraitScreenReaderOnly } from "@acsbe/core-engine-classifier";

export const BackgroundImageDiscernible: Rule = {
  id: "background-image-discernible",
  metadata: {
    category: "Graphics",
    profile: "Blind",
    wcagVersion: "2.1",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Non decorative Background images should be tagged and labeled",
  description: "Background images should receive alternative text just like regular images do unless used as decorative elements and do not provide any information or additional context to the users.",
  advice: "Use the screen-reader-only technique combined with the role=img and aria-label attributes to indicate to screen readers that there's an image and the description for that image. Make sure to include the embedded text of the image alongside the objects that comprise it in the aria-label description.",
  associatedDetectors: [PerceivableComponentBackgroundImage, PerceivableTraitDiscernibleText, PerceivableTraitScreenReaderOnly, CompliantTraitVisible],
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
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/alt/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/images/decorative/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const backgroundImages = classifier.getMatched([PerceivableComponentBackgroundImage, CompliantTraitVisible]);

    for (const image of backgroundImages) {
      const { visibilityInfo } = classifier.getOperations(image);
      if (visibilityInfo.isExplicitlyHiddenFromScreenReader) {
        continue;
      }

      const discernibleElements = classifier.getMatchedDirect([PerceivableTraitDiscernibleText], image);

      if (discernibleElements.length === 0) {
        response.failedNodes.push(image);
        continue;
      }

      const firstDiscernibleElement = discernibleElements[0];
      const isScreenReaderOnly = classifier.assert(firstDiscernibleElement, PerceivableTraitScreenReaderOnly);

      if (!isScreenReaderOnly) {
        response.failedNodes.push(image);
      } else {
        response.passedNodes.push(image);
      }
    }
  },
};
