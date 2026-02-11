// Generated metadata for link-navigation-ambiguous
// This file is auto-generated from index.ts to avoid module resolution issues

export const LinkNavigationAmbiguous = {
  id: "link-navigation-ambiguous",
  title: `Ambiguous links should include additional screen-reader description`,
  description: `Ambiguous links like "Learn More", "Shop Now" and "Start Here" are often used as a call to action. However, screen-reader users, while using link navigation, do not interact with content above or below the link and therefore don\\`,
  advice: `Add a screen-reader only text which gives additional context to the destination of the link. You can use the \`aria-label\` attribute to provide a description of the link's purpose.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "2.4.4", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#link-purpose-in-context" },
    { type: "ACT", link: "https://act-rules.github.io/rules/c487ae" },
    { type: "ACT", link: "https://act-rules.github.io/rules/aizyf1" },
    { type: "ACT", link: "https://act-rules.github.io/rules/5effbb" },
    { type: "ACT", link: "https://act-rules.github.io/rules/b20e66" },
    { type: "ACT", link: "https://act-rules.github.io/rules/fd3a94" }
  ]
};
