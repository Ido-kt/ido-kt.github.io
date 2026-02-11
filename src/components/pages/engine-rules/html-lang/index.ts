import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const HtmlLang: Rule = {
  id: "html-lang",
  metadata: {
    category: "Metadata",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Default page language should be defined",
  description: "Specifying a default page language ensures screen readers apply the correct pronunciation rules, voices, and braille output. Without it, screen readers may guess the language incorrectly, causing mispronunciations, confusion, and reduced comprehension for users.",
  advice: "Define the default language for the page by assigning a lang attribute to the html element.",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "3.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html",
    },
    {
      type: "ACT",
      ruleId: "bf051a",
      link: "https://act-rules.github.io/rules/bf051a",
    },
    {
      type: "ACT",
      ruleId: "b5c3f8",
      link: "https://act-rules.github.io/rules/b5c3f8",
    },
    {
      type: "ACT",
      ruleId: "off6ek",
      link: "https://act-rules.github.io/rules/off6ek",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, document }) {
    if (document.documentElement.lang) {
      response.passedNodes.push(document.documentElement);
    } else {
      response.failedNodes.push(document.documentElement);
    }
  },
};
