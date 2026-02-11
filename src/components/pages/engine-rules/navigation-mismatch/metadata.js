// Generated metadata for navigation-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationMismatch = {
  id: "navigation-mismatch",
  title: `A list of navigation links is not contained in a navigation landmark`,
  description: `Screen readers rely on accurate tagging and labeling to provide necessary context. If a navigation region is not tagged as a navigation landmark, screen reader users may lose orientation and find the page's structure difficult to understand.`,
  advice: `Add role=navigation to the custom navigation region, or use a HTML <nav> element.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.4.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role" },
    { type: "Non-Standard", link: "https://a11y-style-guide.com/style-guide/section-navigation.html" }
  ]
};
