// Generated metadata for heading-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const HeadingMisuse = {
  id: "heading-misuse",
  title: `Only elements that function as headings should be tagged as heading`,
  description: `Accurate tagging allows screen readers to present content in a logical structure. Misidentifying an element as a heading disrupts navigation, creating confusion about the importance of content and page hierarchy.`,
  advice: `Remove ARIA heading attributes from the failing element, or if the element is marked up using a native HTML tag, update the role according to the function of the element.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "Non-Standard", link: "https://www.a11yproject.com/posts/how-to-accessible-heading-structure/" },
    { type: "ACT", link: "https://act-rules.github.io/rules/047fe0" }
  ]
};
