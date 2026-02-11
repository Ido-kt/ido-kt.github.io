// Generated metadata for navigation-redundant-discernible-text
// This file is auto-generated from index.ts to avoid module resolution issues

export const NavigationRedundantDiscernibleText = {
  id: "navigation-redundant-discernible-text",
  title: `Navigation elements should have a label that doesn't contain the word navigation`,
  description: `Screen readers announce when a user encounters a navigation region, which is why including the word 'navigation' in a label is redundant.`,
  advice: `Remove the word 'navigation' from assigned labels.`,
  impact: "serious",
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships",
    },
    {
      type: "W3C",
      id: "",
      level: "",
      link: "https://www.w3.org/WAI/tutorials/page-structure/labels/",
    },
    {
      type: "W3C",
      id: "",
      level: "",
      link: "https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html",
    },
  ],
};
