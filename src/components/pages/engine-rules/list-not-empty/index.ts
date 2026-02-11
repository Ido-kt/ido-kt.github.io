import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import { PerceivableTraitVisible } from "@acsbe/core-engine-classifier";
import type EngineClassifier from "@acsbe/core-engine-classifier";
import { CompliantTraitVisible, CompliantComponentList } from "@acsbe/core-engine-classifier";

/**
 * Checks if a list has any visible children.
 *
 * @param {SvgOrHtmlElement} list - The list element to check.
 * @param {EngineClassifier} classifier - The classifier used to assert visibility.
 * @returns {boolean} - Returns true if any child of the list is visible, otherwise false.
 */
function hasVisibleChildren(list: SvgOrHtmlElement, classifier: EngineClassifier): boolean {
  const children = Array.from(list.children) as SvgOrHtmlElement[];
  for (const child of children) {
    if (classifier.assert(child, CompliantTraitVisible)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if a list has any list items.
 *
 * @param {SvgOrHtmlElement} list - The list element to check.
 * @returns {boolean} - Returns true if the list contains list items, otherwise false.
 */
function hasListItems(list: SvgOrHtmlElement, classifier: EngineClassifier): boolean {
  if (list.tagName === "UL" || list.tagName === "OL") {
    const children = Array.from(list.children) as SvgOrHtmlElement[];
    return children.some((child: SvgOrHtmlElement) => child.tagName === "LI");
  } else if (list.getAttribute("role") === "list") {
    const visibleChildren = classifier.getMatched([PerceivableTraitVisible], list);
    return visibleChildren.some((child: SvgOrHtmlElement) => child.getAttribute("role") === "listitem");
  }
  return false;
}

export const ListNotEmpty: Rule = {
  id: "list-not-empty",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Lists should contain at least one list item",
  description: "An empty list will still be announced by screen readers, which may confuse users, leaving them unsure if the list is empty or an issue prevents the screen reader from announcing the list items.",
  advice: 'Remove the empty HTML list elements (<ul>/<ol>) or assign aria-hidden="true" to make sure they are ignored by screen readers.',
  associatedDetectors: [CompliantTraitVisible, CompliantComponentList],
  refs: [
    {
      type: "Non-Standard",
      link: "https://help.siteimprove.com/support/solutions/articles/80001051793-accessibility-rule-container-element-is-empty-explained",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/standards-guidelines/act/rules/bc4a75/proposed/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/wai-aria-1.2/#mustContain",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const lists = classifier.getMatched([CompliantComponentList]);

    for (const list of lists) {
      const visibleChildren = hasVisibleChildren(list, classifier);
      const listItems = hasListItems(list, classifier);

      if (!visibleChildren || !listItems) {
        response.failedNodes.push(list);
      } else {
        response.passedNodes.push(list);
      }
    }
  },
};
