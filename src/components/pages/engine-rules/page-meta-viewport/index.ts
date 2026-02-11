import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const PageMetaViewport: Rule = {
  id: "had-meta-viewport",
  metadata: {
    category: "Metadata",
    profile: "Vision Impaired",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "minor",
  title: "Page has a meta viewport",
  description: "Providing a meta viewport to control layout and scaling on mobile devices",
  advice: "Add a meta viewport to the page",
  associatedDetectors: [],
  refs: [
    {
      type: "W3C",
      link: "https://www.w3.org/TR/mobile-accessibility-mapping/#use-viewport-meta-tag-to-identify-visual-scale-properties",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ response, document }) {
    const metaViewport = document.querySelector<HTMLMetaElement>("head > meta[name=viewport]");

    if (metaViewport) {
      response.passedNodes.push(metaViewport);
    }
  },
};
