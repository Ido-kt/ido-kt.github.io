import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentSearchForm, CompliantComponentSearch } from "@acsbe/core-engine-classifier";
export const SearchFormMismatch: Rule = {
  id: "search-form-mismatch",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "A search form should be tagged as a search landmark",
  description: "Screen reader users rely on landmarks to quickly access important regions of a page. Defining a form as a search landmark ensures that users can quickly recognize and navigate to the search form.",
  advice: 'Enclose the search form in a <search> element or assign role="search" to the <form> element.',
  associatedDetectors: [PerceivableComponentSearchForm, CompliantComponentSearch],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/search_role",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const searchForms = classifier.getMatched([PerceivableComponentSearchForm]);

    for (const searchForm of searchForms) {
      const isCompliantSearch = classifier.assert(searchForm, CompliantComponentSearch);
      const compliantSearchParent = classifier.getParent(searchForm, CompliantComponentSearch);

      if (isCompliantSearch || compliantSearchParent) {
        response.passedNodes.push(searchForm);
      } else {
        response.failedNodes.push(searchForm);
      }
    }
  },
};
