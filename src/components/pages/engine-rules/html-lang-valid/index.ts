import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const HtmlLangValid: Rule = {
  id: "html-lang-valid",
  metadata: {
    category: "Metadata",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "HTML lang attribute should have a valid value",
  description:
    "A valid ISO language value in the HTML lang attribute ensures that screen readers use the correct pronunciation rules, browsers apply proper spell-checking and translation, and search engines index the content in the appropriate language. Without it, assistive technologies may misinterpret the text and create a confusing experience.",
  advice: "Make sure that the lang attribute on the HTML element is assigned  a valid ISO language code that matches the default language of the page.",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "3.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#language-of-page",
    },
    {
      type: "ACT",
      ruleId: "bf051a",
      link: "https://act-rules.github.io/rules/bf051a",
    },
    {
      type: "Non-Standard",
      link: "https://en.wikipedia.org/wiki/IETF_language_tag",
    },
    {
      type: "ACT",
      ruleId: "off6ek",
      link: "https://act-rules.github.io/rules/off6ek",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, document }) {
    const langValue = document.documentElement.lang;

    if (!langValue) {
      response.inapplicableNodes.push(document.documentElement);
      return;
    }

    //BCP-47 language tag regex
    //eslint-disable-next-line security/detect-unsafe-regex
    const langRegex = /^([a-zA-Z]{2,3})(?:-([a-zA-Z]{4}))?(?:-([a-zA-Z]{2}|\d{3}))?(?:-([a-zA-Z\d]{5,8}|\d[a-zA-Z\d]{3}))?$/;

    if (langRegex.test(langValue)) {
      response.passedNodes.push(document.documentElement);
    } else {
      response.failedNodes.push(document.documentElement);
    }
  },
};
