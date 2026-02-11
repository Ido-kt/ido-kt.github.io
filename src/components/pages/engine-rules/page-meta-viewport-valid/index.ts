import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

/**
 * Checks if the content of a meta viewport tag is valid.
 *
 * Validates the content by ensuring that:
 * - `user-scalable` is not set to `no`
 * - `maximum-scale` is not less than 2
 *
 * @param {string} content - The content attribute of the meta viewport tag.
 * @returns {boolean} - Returns true if the content is valid, otherwise false.
 */
function isContentMetaViewportValid(content: string): boolean {
  const pairs = content.split(",").map((pair) => pair.trim());
  for (const pair of pairs) {
    const [key, value] = pair.split("=").map((part) => part.trim());
    if (key === "user-scalable" && value === "no") {
      return false;
    }
    if (key === "maximum-scale" && Number(value) < 2) {
      return false;
    }
  }
  return true;
}

export const PageMetaViewportValid: Rule = {
  id: "page-meta-viewport-valid",
  metadata: {
    category: "Metadata",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "AA",
  },
  impact: "critical",
  title: "Meta viewport should allow content scaling",
  description: "The meta viewport should allow scalability, typically with width=device-width, initial-scale=1, so text can be resized up to 200% without loss of functionality. Using user-scalable=no or maximum-scale=1 prevents users from enlarging content, making it difficult for people with low vision to read or interact.",
  advice: 'Set content="width=device-width, initial-scale=1" on the meta viewport element and avoid values like user-scalable=no or maximum-scale=1 to preserve zoom and text scaling.',
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "1.4.4",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#resize-text",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/mobile-accessibility-mapping/#use-viewport-meta-tag-to-identify-visual-scale-properties",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, document }) {
    const metaViewport = document.querySelector<HTMLMetaElement>("meta[name=viewport]");

    const content = metaViewport ? metaViewport.getAttribute("content") : "";

    if (metaViewport) {
      if (content && isContentMetaViewportValid(content)) {
        response.passedNodes.push(metaViewport);
      } else {
        response.failedNodes.push(metaViewport);
      }
    }
  },
};
