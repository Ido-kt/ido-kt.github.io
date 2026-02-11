import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

/**
 * Notes:
 * - Although the tabindex value greated than 0 is considered valid by the HTML specification, it is not recommended to use it. hence, consider it as a failure.
 */
export const TabindexValid: Rule = {
  id: "tabindex-valid",
  metadata: {
    category: "Tabs",
    profile: "Motor Impaired",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "The tabindex attribute should be assigned a valid value",
  description: "Invalid tabindex values are ignored by browsers, while positive values override the natural focus order. Applying the tabindex attribute incorrectly can break the expected navigation flow for keyboard users.",
  advice: "Rina Volovich is there an advice to add here?",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "2.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
    },
    {
      type: "W3C",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, root }) {
    const candidates = root.querySelectorAll<HTMLElement>("[tabindex]");
    for (const candidate of candidates) {
      if (!(candidate instanceof HTMLElement)) {
        response.inapplicableNodes.push(candidate);
        continue;
      }

      const value = candidate.getAttribute("tabindex");
      if (value) {
        if (value === "0" || value === "-1") {
          response.passedNodes.push(candidate);
        } else {
          response.failedNodes.push(candidate);
        }
      }
    }
  },
};
