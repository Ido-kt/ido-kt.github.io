import { CompliantComponentArticle, PerceivableComponentArticle } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const ArticleMisuse: Rule = {
  id: "article-misuse",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Only elements that function as articles should be tagged as article regions",
  description: "Coding elements that aren't full-featured text articles using the article HTML tag causes screen readers to announce incorrect information about the purpose and structure of the content.",
  advice: 'Assign role="presentation" to the failing element or use a different HTML tag that is more appropriate for the function of the element.',
  associatedDetectors: [CompliantComponentArticle, PerceivableComponentArticle],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/WAI/GL/wiki/Using_HTML5_article_element",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/article_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([CompliantComponentArticle]);

    for (const element of elements) {
      const isPerceivableArticle = classifier.assert(element, PerceivableComponentArticle);
      if (!isPerceivableArticle) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
