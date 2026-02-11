import type { SvgOrHtmlElement } from "@acsbe/core-engine-classifier";
import { CompliantComponentForm, PerceivableComponentForm, CompliantComponentFormField } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const FormDuplicateId: Rule = {
  id: "form-duplicate-id",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "moderate",
  title: "Forms and form fields must have unique ID attributes",
  description: "Screen readers rely on ID attributes to be unique in order to announce to the users the correct content. If IDs are not unique, screen readers won't know which element is the correct one.",
  advice: "Change the ID of the duplicate fields and forms so they are unique.",
  associatedDetectors: [CompliantComponentForm, PerceivableComponentForm, CompliantComponentFormField],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/forms/instructions/",
    },
    {
      type: "Non-Standard",
      link: "https://rocketvalidator.com/accessibility-validation/axe/4.6/duplicate-id",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const nodesById = new Map<string, SvgOrHtmlElement[]>(); // Map to track elements by ID
    const candidates = Array.from(new Set([...classifier.getMatched([CompliantComponentForm]), ...classifier.getMatched([PerceivableComponentForm]), ...classifier.getMatched([CompliantComponentFormField])]));

    for (const candidate of candidates) {
      if (candidate.id) {
        if (nodesById.has(candidate.id)) {
          nodesById.get(candidate.id).push(candidate);
        } else {
          nodesById.set(candidate.id, [candidate]);
        }
      }
    }

    // Categorize elements based on uniqueness
    for (const elements of nodesById.values()) {
      if (elements.length > 1) {
        // Duplicates
        response.failedNodes.push(...elements);
      } else {
        response.passedNodes.push(...elements);
      }
    }
  },
};
