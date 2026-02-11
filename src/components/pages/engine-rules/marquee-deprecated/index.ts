import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const MarqueeDeprecated: Rule = {
  id: "marquee-deprecated",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "<marquee> elements are deprecated",
  description: "<marquee> elements are obsolete and should not be used. They are not part of any HTML or WAI-ARIA specification. They are not responsive or supported by any browsers.",
  advice: "Remove the <marquee> element from the page. If you need to display scrolling text, use CSS animations or JavaScript to create a similar effect.",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "2.2.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=244#pause-stop-hide",
    },
    {
      type: "W3C",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/html52/obsolete.html#the-marquee-element",
    },
    {
      type: "ACT",
      ruleId: "efbfc7",
      link: "https://act-rules.github.io/rules/efbfc7",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, root }) {
    const marqueeElements = root.querySelectorAll<HTMLMarqueeElement>("marquee");
    for (const marquee of marqueeElements) {
      response.failedNodes.push(marquee);
    }
  },
};
