import { PerceivableTraitVisible, CompliantTraitVisible, PerceivableComponentGraphic, CompliantTraitExplicitlyHidden } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const VisibilityMismatch: Rule = {
  id: "visibility-mismatch",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Visible content should not be hidden from assistive technology",
  description: 'If content remains visible on the screen but assigned aria-hidden="true", it will be excluded from the accessibility tree. As a result, screen reader users will not have access to the same information as sighted users.',
  advice: 'Remove aria-hidden="true" from visible elements. Make sure that the attribute is only used to hide redundant or inactive content.',
  associatedDetectors: [PerceivableTraitVisible, CompliantTraitVisible, PerceivableComponentGraphic, CompliantTraitExplicitlyHidden],
  refs: [
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/html5-accessibility-chops-hidden-and-aria-hidden/",
    },
    {
      type: "ACT",
      ruleId: "6cfa84",
      link: "https://act-rules.github.io/rules/6cfa84",
    },
    {
      type: "ACT",
      ruleId: "e88epe",
      link: "https://act-rules.github.io/rules/e88epe",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([PerceivableTraitVisible]);

    for (const element of elements) {
      if (classifier.assert(element, CompliantTraitVisible)) {
        response.passedNodes.push(element);
        continue;
      }

      const { visibilityInfo } = classifier.getOperations(element);
      if (!visibilityInfo.isExplicitlyHiddenFromScreenReader) {
        response.inapplicableNodes.push(element);
        continue;
      }

      // If the element has no perceivable visible content, it should not be considered for visibility mismatch
      if (!hasVisibleContent(element, classifier)) {
        response.inapplicableNodes.push(element);
        continue;
      }

      response.failedNodes.push(element);
    }

    /**
     * Check for elements that are explicitly hidden but have visible descendants, they should also fail so we remove the aria-hidden attribute from them
     */
    const compliantHiddenElements = classifier.getMatched([CompliantTraitExplicitlyHidden]);
    for (const element of compliantHiddenElements) {
      /**
       * If the element is already marked as failed, skip it to prevent duplicates
       */
      if (response.failedNodes.includes(element)) {
        continue;
      }
      const hasVisibleDescendants = classifier.getMatched([PerceivableTraitVisible], element).length > 0;
      if (hasVisibleDescendants) {
        response.failedNodes.push(element);
      }
    }
  },
};

function hasVisibleContent(element: SvgOrHtmlElement, classifier: EngineClassifier) {
  const { contentInfo, colorInfo } = classifier.getOperations(element);

  const hasGraphicContent = classifier.assert(element, PerceivableComponentGraphic) || classifier.getMatched([PerceivableComponentGraphic], element).length > 0;
  if (hasGraphicContent) {
    return true;
  }

  const hasBackgroundImage = colorInfo.backgroundImage && colorInfo.backgroundImage !== "none";
  if (hasBackgroundImage) {
    return true;
  }

  const hasTextContent = contentInfo.hasVisibleText;
  if (hasTextContent) {
    return true;
  }

  return false;
}
