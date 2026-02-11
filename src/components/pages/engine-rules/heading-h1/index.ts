import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const HeadingH1: Rule = {
  id: "heading-h1",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Each page should have a main heading",
  description: "There should be one h1 heading element that defines the subject of the main content on the page.",
  advice: "Add a h1 element at the start of the main content on the page.",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships",
    },
    {
      type: "WCAG",
      id: "2.4.1",
      level: "A",
      link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-headings",
    },
    {
      type: "WCAG Technique",
      link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic",
    },
  ],
  passCondition: PassCondition.PassedNodesAndNoFailedNodes,
  async validate({ root, response }) {
    const H1Heading = root.querySelector<HTMLElement>(`h1:not([aria-level]), [role=heading][aria-level='1'], h1[aria-level='1'], h2[aria-level='1'], h3[aria-level='1'], h4[aria-level='1'], h5[aria-level='1'], h6[aria-level='1']`);

    if (H1Heading) {
      response.passedNodes.push(H1Heading);
    }
  },
};
