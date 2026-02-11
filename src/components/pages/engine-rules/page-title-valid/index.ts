import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const PageTitleValid: Rule = {
  id: "page-title-valid",
  metadata: {
    category: "Metadata",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Page title should be descriptive",
  description: "Providing a descriptive title helps users understand the content of the page.",
  advice: "Add a `<title>` element to that well describes the page content",
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
      ruleId: "2779a5",
      link: "https://act-rules.github.io/rules/2779a5",
    },
    {
      type: "ACT",
      ruleId: "c4a8a4",
      link: "https://act-rules.github.io/rules/c4a8a4",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, document }) {
    const title = document.querySelector<HTMLElement>("head > title");
    if (title) {
      const wordCount = countWords(title.textContent);

      if (wordCount > 1) {
        response.passedNodes.push(title);
      } else {
        response.failedNodes.push(title);
      }
    }
  },
};

/**
 * Count the number of words in a given input string while ignoring numbers.
 * @param input
 */
function countWords(input: string): number {
  const withoutNumbers = input.replace(/\d+/g, "");

  const normalized = withoutNumbers.replace(/\s+/g, " ").trim();

  const words = normalized.split(" ").filter((word) => word.length > 0);

  // Step 4: Return the word count
  return words.length;
}
