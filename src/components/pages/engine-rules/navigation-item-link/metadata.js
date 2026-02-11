// Generated metadata for navigation-item-link
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationItemLink = {
  id: "navigation-item-link",
  title: `All leaf nodes in a navigation tree should contain a link element.`,
  description: `Navigation items, whether their functionality is provided using JS (custom behavior), should always have a child that is a link and not as a clickable LI element with text.`,
  advice: `Always include a link under navigation items and avoid using text elements even if functionality is provided using JS.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
    { type: "W3C", link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html" },
    { type: "W3C", link: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role" }
  ]
};
