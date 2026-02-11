import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const PageTitle: Rule = {
  id: "page-title",
  metadata: {
    category: "Tabs",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Page should have a title",
  description: "Screen readers rely heavily on page titles to announce the purpose of a page. If titles aren’t descriptive, users with low or no vision may not understand the context until they start navigating the page.",
  advice: "Make sure the title element inside the <head> is unique and describes the purpose of the page.",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "2.4.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html",
    },
    {
      type: "ACT",
      ruleId: "c4a8a4",
      link: "https://act-rules.github.io/rules/c4a8a4",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, document }) {
    const title = document.querySelector<HTMLElement>("head > title");
    if (title) {
      response.passedNodes.push(title);
    }
  },
};
