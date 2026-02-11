import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const PageMetaDescription: Rule = {
  id: "page-meta-description",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "minor",
  title: "Page has a meta description",
  description: "Page has a meta description",
  advice: "Add meta description to the page",
  associatedDetectors: [],
  refs: [
    {
      type: "Non-Standard", //non standard? or WAI?
      link: "https://www.w3.org/WAI/EO/wiki/Metadata_Guidelines",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, document }) {
    const metaDescription = document.querySelector<HTMLMetaElement>("meta[name=description]");

    if (metaDescription) {
      response.passedNodes.push(metaDescription);
    }
  },
};
