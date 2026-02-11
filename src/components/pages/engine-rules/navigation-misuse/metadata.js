// Generated metadata for navigation-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationMisuse = {
  id: "navigation-misuse",
  title: `An element without navigation links is tagged as a navigation landmark`,
  description: `Screen readers rely on accurate tagging and labeling to provide necessary context. If an element that does not contain navigation links is tagged as a navigation landmark, screen reader users may lose orientation and find the page's structure difficult to understand.`,
  advice: `Add role=presentation to the incorrect <nav> element or remove role=navigation if a different element is used.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.4.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html" }
  ]
};
