// Generated metadata for navigation-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationDiscernible = {
  id: "navigation-discernible",
  title: `Navigation regions should have unique labels when there are multiple navigation regions`,
  description: `When multiple navigation regions exist on a page, each navigation element should have a unique label so that each region can be differentiated by screen reader users.`,
  advice: `Provide a unique label for each navigation region using either the aria-label or aria-labelledby attribute.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/page-structure/labels/" },
    { type: "W3C", link: "https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html" }
  ]
};
