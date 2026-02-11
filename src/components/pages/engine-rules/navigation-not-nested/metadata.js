// Generated metadata for navigation-not-nested
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationNotNested = {
  id: "navigation-not-nested",
  title: `Avoid using nested navigation structure`,
  description: `Complex navigation components can be difficult for screen readers to handle. This is especially true if submenus or other complex structures exist. Nesting navigation regions makes it harder for screen reader users to understand a page's structure and disrupts orientation.`,
  advice: `If the failing element is a custom navigation region, remove role="navigation". If the failing element is coded using a HTML <nav> tag, apply role="presentation" or a role that is suitable for the function of the element.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/menus/structure/" }
  ]
};
