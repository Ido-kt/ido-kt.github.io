import { CompliantComponentImage, PerceivableComponentImage } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const ImageMismatch: Rule = {
  id: "image-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  associatedDetectors: [PerceivableComponentImage, CompliantComponentImage],
  impact: "serious",
  title: "Images should be tagged for assistive technology",
  description: 'Elements or a group of elements that contain graphics should be marked up using role="img" so that they can be identified as images by screen reader users.',
  advice: 'Add role="img" to page content that should be identified as an image.',
  refs: [
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/images/",
    },
    {
      type: "ACT",
      ruleId: "e88epe",
      link: "https://act-rules.github.io/rules/e88epe",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([PerceivableComponentImage]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantComponentImage)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
