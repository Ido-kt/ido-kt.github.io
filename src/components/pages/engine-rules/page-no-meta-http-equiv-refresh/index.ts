import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const PageNoMetaHttpEquivRefresh: Rule = {
  id: "page-no-meta-http-equiv-refresh",
  metadata: {
    category: "Metadata",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "AA",
  },
  impact: "serious",
  title: "Pages should not contain <meta> elements with http-equiv='refresh' attribute",
  description:
    "<meta> elements with http-equiv='refresh' should be avoided as they can negatively impact accessibility and user experience. The <meta> element with http-equiv='refresh' specifies a delay in seconds before the page reloads or redirects to a provided URL. This can be disorienting for users, especially for those who rely on screen readers because the page content changes without any user interaction.",
  advice: 'Remove <meta> elements with http-equiv="refresh" and use server-side redirects or JavaScript for page refreshes or redirects.',
  associatedDetectors: [],
  refs: [
    {
      type: "W3C",
      link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-no-extreme-changes-context",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/WCAG20-TECHS/H76.html",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/2012/WD-html-markup-20121025/meta.http-equiv.refresh.html",
    },
    {
      type: "ACT",
      ruleId: "bc659a",
      link: "https://act-rules.github.io/rules/bc659a",
    },
    {
      type: "ACT",
      ruleId: "bisz58",
      link: "https://act-rules.github.io/rules/bisz58",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, document }) {
    const metaElements = document.querySelectorAll<HTMLMetaElement>('meta[http-equiv="refresh"]');

    for (const metaElement of metaElements) {
      response.failedNodes.push(metaElement);
    }
  },
};
