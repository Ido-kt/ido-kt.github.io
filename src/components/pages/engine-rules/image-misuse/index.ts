import { CompliantComponentImage, PerceivableComponentImage, PerceivableTraitScreenReaderOnly } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const ImageMisuse: Rule = {
  id: "image-misuse",
  metadata: {
    category: "Graphics",
    profile: "Blind",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  associatedDetectors: [PerceivableComponentImage, CompliantComponentImage, PerceivableTraitScreenReaderOnly],
  impact: "serious",
  title: 'An element that does not function as an image should be assigned role="img"',
  description: "Using an image tag for content that isn't an image can obscure relevant information and confuse screen readers and other assistive technologies. This can lead to a poor user experience for people with disabilities.",
  advice: 'Remove role="img" from the failing element.',
  refs: [
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/images/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([CompliantComponentImage]);

    for (const element of elements) {
      if (classifier.assert(element, PerceivableTraitScreenReaderOnly)) {
        response.inapplicableNodes.push(element);
        continue;
      }

      if (classifier.assert(element, PerceivableComponentImage)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
