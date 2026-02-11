// Generated metadata for navigation-submenu-region
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationSubmenuRegion = {
  id: "navigation-submenu-region",
  title: `Tagging submenus is recommended`,
  description: `Complex menu structures often contain multiple groups of links that can feel like undifferentiated page content to screen reader users. Assigning role="region" with a label makes each submenu a distinct, named section, clarifying its relationship to the trigger and improving orientation.`,
  advice: `Assign role="region" to each menu panel so screen reader users can distinguish submenus from surrounding page content. Adding a label (e.g., with aria-labelledby) helps users quickly identify each panel within a complex menu structure.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" }
  ]
};
