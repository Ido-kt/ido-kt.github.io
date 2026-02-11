import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const HeadingSingleH1: Rule = {
  id: "heading-single-h1",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Each page should not have more than one main heading",
  description: "Each web page should have only one h1 element so that screen reader users can identify the main topic or purpose of the page. Multiple h1s can confuse users by suggesting there are multiple primary topics, disrupting navigation by headings and making it harder to understand the overall page structure.",
  advice: "Make sure that each web page has exactly one h1 element so that screen reader users can identify the main subject of the page.",
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
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, root }) {
    const H1Headings = root.querySelectorAll<HTMLElement>("h1:not([aria-level='2'], [aria-level='3'], [aria-level='4'], [aria-level='5'], [aria-level='6']), [role=heading][aria-level='1']");

    if (H1Headings.length > 0) {
      response.passedNodes.push(Array.from(H1Headings)[0]);
      response.failedNodes.push(...Array.from(H1Headings).slice(1));
    }
  },
};
