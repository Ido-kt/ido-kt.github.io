import { CompliantTraitVisible, PerceivableTraitHidden, PerceivableTraitRenderable, PerceivableTraitScreenReaderOnly, PerceivableTraitVisible, CompliantTraitInteractable, CompliantTraitExplicitlyHidden } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const VisibilityMisuse: Rule = {
  id: "visibility-misuse",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Visibly hidden content should not be exposed to assistive technology",
  description: "When elements are visually hidden but still exposed to assistive technology, screen reader users may encounter content that should not be available in the current interface. This can obscure the current state of the page and lead to confusion about what information or controls are available.",
  advice: 'Use aria-hidden="true" to remove elements from the accessibility tree when they should not be exposed to assistive technology. Consider using CSS techniques, such as display:none or visibility:hidden when the content should be hidden from all users.',
  associatedDetectors: [PerceivableTraitHidden, PerceivableTraitVisible, PerceivableTraitRenderable, CompliantTraitVisible, PerceivableTraitScreenReaderOnly, CompliantTraitInteractable, CompliantTraitExplicitlyHidden],
  refs: [
    {
      type: "Non-Standard",
      link: "https://guides.18f.gov/accessibility/hidden-content/#:~:text=Hiding%20content%20is%20very%20useful,can%20hide%20content%20from%20both.",
    },
    {
      type: "Non-Standard",
      link: "https://a11y-guidelines.orange.com/en/articles/accessible-hiding/",
    },
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/html5-accessibility-chops-hidden-and-aria-hidden/",
    },
    {
      type: "ACT",
      ruleId: "6cfa84",
      link: "https://act-rules.github.io/rules/6cfa84",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const hiddenElements = classifier.getMatched([PerceivableTraitRenderable, PerceivableTraitHidden]);

    for (const hiddenElement of hiddenElements) {
      if (!classifier.assert(hiddenElement, CompliantTraitVisible)) {
        response.passedNodes.push(hiddenElement);
        continue;
      }

      // if the element or any of its ancestors or descendants are screen reader only, then it is inapplicable for this rule because it's purposfully hidden from sighted users but available to screen reader users
      if (classifier.getMatchedInclusive([PerceivableTraitScreenReaderOnly], hiddenElement).length > 0 || classifier.getParent(hiddenElement, PerceivableTraitScreenReaderOnly)) {
        response.inapplicableNodes.push(hiddenElement);
        continue;
      }

      // If the element has perceivable visible descendants, then we want to prevent it from being marked as failed because the remediation will hide visible descendants from screen readers
      if (classifier.getMatched([PerceivableTraitVisible], hiddenElement).length > 0) {
        response.inapplicableNodes.push(hiddenElement);
        continue;
      }

      if (isPartOfSrVisibleText(hiddenElement, classifier)) {
        response.inapplicableNodes.push(hiddenElement);
        continue;
      }

      if (classifier.getParent(hiddenElement, CompliantTraitExplicitlyHidden)) {
        response.inapplicableNodes.push(hiddenElement);
        continue;
      }

      const isNestedFailNode = response.failedNodes.some((node) => node.contains(hiddenElement));
      if (!isNestedFailNode) {
        response.failedNodes.push(hiddenElement);
      }
    }
  },
};

/**
 * checks if the element is part of the accessible name of its interactable parent
 * e.g. alt attribute of an image inside a button
 */
function isPartOfSrVisibleText(element: SvgOrHtmlElement, classifier: EngineClassifier) {
  const interactableParent = classifier.getParent(element, CompliantTraitInteractable);

  if (!interactableParent) {
    return false;
  }

  const hiddenElementSrVisibleText = classifier.getOperations(element).contentInfo.srVisibleText;
  const interactableParentSrVisibleText = classifier.getOperations(interactableParent).contentInfo.srVisibleText;

  return interactableParentSrVisibleText === hiddenElementSrVisibleText;
}
