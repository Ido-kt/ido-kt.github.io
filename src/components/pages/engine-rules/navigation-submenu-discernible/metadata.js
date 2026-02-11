// Generated metadata for navigation-submenu-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationSubmenuDiscernible = {
  id: "navigation-submenu-discernible",
  title: `Labeling submenus is recommended`,
  description: `Complex menu structures that include nested submenus can unintentionally cause screen reader users to lose orientation. This can be mitigated by applying a unique label to each submenu to provide additional context for assistive technology.`,
  advice: `Add an aria-label to each submenu region. Screen readers will announce the label to users when they navigate into the submenu.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" }
  ]
};
