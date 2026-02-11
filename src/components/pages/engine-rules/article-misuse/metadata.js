// Generated metadata for article-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const ArticleMisuse = {
  id: "article-misuse",
  title: `Only elements that function as articles should be tagged as article regions`,
  description: `Coding elements that aren't full-featured text articles using the article HTML tag causes screen readers to announce incorrect information about the purpose and structure of the content.`,
  advice: `Assign role="presentation" to the failing element or use a different HTML tag that is more appropriate for the function of the element.`,
  impact: "minor",
  refs: [
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/GL/wiki/Using_HTML5_article_element" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/article_role" }
  ]
};
