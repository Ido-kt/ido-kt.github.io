// Generated metadata for html-lang-valid
// This file is auto-generated from index.ts to avoid module resolution issues

export const HtmlLangValid = {
  id: "html-lang-valid",
  title: `HTML lang attribute should have a valid value`,
  description: `A valid ISO language value in the HTML lang attribute ensures that screen readers use the correct pronunciation rules, browsers apply proper spell-checking and translation, and search engines index the content in the appropriate language. Without it, assistive technologies may misinterpret the text and create a confusing experience.`,
  advice: `Make sure that the lang attribute on the HTML element is assigned  a valid ISO language code that matches the default language of the page.`,
  impact: "minor",
  refs: [
    { type: "WCAG", id: "3.1.1", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#language-of-page" },
    { type: "ACT", link: "https://act-rules.github.io/rules/bf051a" },
    { type: "Non-Standard", link: "https://en.wikipedia.org/wiki/IETF_language_tag" },
    { type: "ACT", link: "https://act-rules.github.io/rules/off6ek" }
  ]
};
