import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentImage, PerceivableTraitDiscernibleText } from "@acsbe/core-engine-classifier";

/**
 * Determines if the related text for an image is incorrect based on various criteria.
 *
 * @param {string} relatedText - The related text to check.
 * @returns {boolean} - Returns true if the related text is considered incorrect, otherwise false.
 *
 * The function checks the following conditions:
 * - If the related text contains a single word that is one of the common image-related words (e.g., "image", "img", "picture", "photo").
 * - If the related text contains a single word that is too long (more than 20 characters).
 * - If the related text contains only non-alphabetic characters.
 * - If the related text contains only dimensions of the image (e.g., "300x200").
 * - If the related text contains more numbers than non-numbers.
 */
function isRelatedTextIncorrect(relatedText: string): boolean {
  const imageWords = new Set(["image", "img", "picture", "pic", "photo", "alt"]);
  const words = relatedText.split(/\s+/);
  if (words.length === 1) {
    // Check if the related text contains a single word that doesn't provide meaningful context
    if (imageWords.has(words[0])) {
      return true;
    }
    // Check if the related text contains a single word that is too long
    if (words[0].length > 20) {
      return true;
    }
  }

  // Check if the related text contains just non-alphabetic characters
  if (/^[^\p{L}]+$/u.test(relatedText)) {
    return true;
  }

  // Check if the related text contains only dimensions of the image
  const regex = /\b\d{2,4}\s*[x×]\s*\d{2,4}\b/;
  if (regex.exec(relatedText)) {
    return true;
  }

  //Checks if the related text contains more numbers than non-numbers
  const digitCount = relatedText.replace(/[^\d]/g, "").length;
  const nonDigitCount = relatedText.length - digitCount;
  if (digitCount > nonDigitCount) {
    return true;
  }

  return false;
}

export const ImageDiscernibleCorrectly: Rule = {
  id: "image-discernible-correctly",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Functional image should have an informative and accurate text alternative",
  description: "Text alternatives must provide accurate descriptions of the image. Incorrect text alternatives, such as filenames or other placeholder values, may cause screen reader users to either miss essential information or hear unnecessary content that disrupts navigation.",
  advice: "Make sure that the assigned text alternative describes the content or function of the image.",
  associatedDetectors: [CompliantComponentImage, PerceivableTraitDiscernibleText],
  refs: [
    {
      type: "WCAG",
      id: "1.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const images = classifier.getMatched([CompliantComponentImage]);

    for (const image of images) {
      /**
       * Non-discernible images are handled in a different rule (image-discernible)
       */
      if (!classifier.assert(image, PerceivableTraitDiscernibleText)) {
        continue;
      }

      const {
        contentInfo: { srVisibleText },
      } = classifier.getOperations(image);

      if (isRelatedTextIncorrect(srVisibleText)) {
        response.failedNodes.push(image);
      } else {
        response.passedNodes.push(image);
      }
    }
  },
};
