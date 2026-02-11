import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import { CompliantTraitCrossedOutText, PerceivableComponentSalePrice, PerceivableTraitCrossedOutText, PerceivableTraitScreenReaderOnly } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import type { dictionary } from "@acsbe/core-engine-dictionary";
import { textContainsWord } from "@acsbe/core-engine-dictionary";

export const SalePriceDiscernible: Rule = {
  id: "sale-price-discernible",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Original and discounted prices should be indicated to assistive technology",
  description: "Discounted prices often appear next to the original and distinguished with visual cues like strikethroughs or color changes. Both prices must also be conveyed by screen readers in a way that enables users to differentiate between the values, ensuring they can understand when a discount is applied.",
  advice: "Add visually hidden text that explicitly identifies each value as the original price or the discounted price.",
  associatedDetectors: [CompliantTraitCrossedOutText, PerceivableComponentSalePrice, PerceivableTraitCrossedOutText, PerceivableTraitScreenReaderOnly],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
    {
      type: "Non-Standard",
      link: "https://www.includia.com/blog/posts/strikethrough-accessibility",
    },
    {
      type: "Non-Standard",
      link: "https://www.webaxe.org/strikethrough-html-accessibility/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const priceElements = classifier.getMatched([PerceivableComponentSalePrice]);

    for (const priceElement of priceElements) {
      const isCrossedOut = classifier.assert(priceElement, PerceivableTraitCrossedOutText) || classifier.assert(priceElement, CompliantTraitCrossedOutText);

      if (isCrossedOut) {
        if (someElementsImplySalePrice([priceElement], classifier)) {
          response.passedNodes.push(priceElement);
          continue;
        }

        const nestedSrOnly = classifier.getMatched([PerceivableTraitScreenReaderOnly], priceElement);
        if (someElementsImplySalePrice(nestedSrOnly, classifier)) {
          response.passedNodes.push(priceElement);
          continue;
        }

        const siblingSrOnly = classifier.getMatched([PerceivableTraitScreenReaderOnly], priceElement.parentElement);
        if (someElementsImplySalePrice(siblingSrOnly, classifier)) {
          response.passedNodes.push(priceElement);
          continue;
        }

        response.failedNodes.push(priceElement);
      }
    }
  },
};

const keywords: Array<keyof typeof dictionary> = ["original_price", "was", "before", "old_price", "previously", "formerly", "reduced_from", "discounted_from", "was_originally", "last_sold_at", "marked_down_from", "sale_from", "originally_priced_at", "pre_sale_price", "previous_price", "used_to_be"];
/**
 *  Check if the text implies a sale price by checking if the text contains any of the keywords in the dictionary
 * */
function impliesSalePrice(text: string): boolean {
  const lowerCaseText = text.toLowerCase();
  return keywords.some((keyword) => textContainsWord(lowerCaseText, keyword));
}

/**
 *  Check if any of the elements imply a sale price by checking if the text of the element contains any of the keywords in the dictionary
 * */
function someElementsImplySalePrice(elements: SvgOrHtmlElement[], classifier: EngineClassifier): boolean {
  return elements.some((element) => {
    const srVisibleText = classifier.getOperations(element).contentInfo.srVisibleText;
    return impliesSalePrice(srVisibleText);
  });
}
