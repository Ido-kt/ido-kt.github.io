import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentHeading } from "@acsbe/core-engine-classifier";

export const HeadingLengthy: Rule = {
  id: "heading-lengthy",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "serious",
  title: "Heading should be concise",
  description: "The main heading of the document should be concise and descriptive. It should not be too lengthy (less than 160 chars).",
  advice: "Add a <h1> element to define the main heading of the document.",
  associatedDetectors: [CompliantComponentHeading],
  refs: [
    {
      type: "ACT",
      ruleId: "047fe0",
      link: "https://act-rules.github.io/rules/047fe0",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const headings = classifier.getMatched([CompliantComponentHeading]);

    for (const heading of headings) {
      const sanitizedText = heading.textContent.replace(/\s+/g, " ").trim();
      if (sanitizedText.length > 160) {
        response.failedNodes.push(heading);
      } else {
        response.passedNodes.push(heading);
      }
    }
  },
};
