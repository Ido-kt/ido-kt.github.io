import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const NoAutofocus: Rule = {
  id: "no-autofocus",
  metadata: {
    category: "Interactive Content",
    profile: "Motor Impaired",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "serious",
  title: "Avoid using autofocus",
  description: "Make sure that no element has an autofocus attribute.",
  advice: "Remove the autofocus attribute from the element.",
  associatedDetectors: [],
  refs: [],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, root }) {
    const candidates = root.querySelectorAll<HTMLElement>("[autofocus]");
    for (const candidate of candidates) {
      if (!(candidate instanceof HTMLElement)) {
        continue;
      }

      response.failedNodes.push(candidate);
    }
  },
};
