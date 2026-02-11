import { CompliantComponentList, CompliantComponentListItem } from "@acsbe/core-engine-classifier";
import type { Rule } from "../../rules/interfaces";
import { PassCondition } from "../../rules/interfaces";

export const ListItemWithinList: Rule = {
  id: "list-item-within-list",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "List items should not exist outside of a list element",
  description: "When list items are not contained in a list element, screen readers will not announce them as list items, preventing users from understanding the content as part of a structured list.",
  advice: 'Enclose the list items in an <ol>, <ul>, or an element with role="list".',
  associatedDetectors: [CompliantComponentList, CompliantComponentListItem],
  refs: [
    {
      type: "Non-Standard",
      link: "https://dequeuniversity.com/rules/axe/4.1/listitem",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/html401/struct/lists.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const listItems = classifier.getMatched([CompliantComponentListItem]);

    for (const listItem of listItems) {
      if (!classifier.getParent(listItem, CompliantComponentList)) {
        response.failedNodes.push(listItem);
      } else {
        response.passedNodes.push(listItem);
      }
    }
  },
};
