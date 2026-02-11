// Generated metadata for link-anchor-ambiguous
// This file is auto-generated from index.ts to avoid module resolution issues

export const LinkAnchorAmbiguous = {
  id: "link-anchor-ambiguous",
  title: `Ambiguous links should have additional descriptions for screen readers.`,
  description: `Ambiguous links like "Learn More", "Shop Now" and "Start Here" are often used as a call to action. However, screen-reader users, while using link navigation, do not interact with content above or below the link and therefore don\\`,
  advice: `Add a screen-reader only text which gives additional context to the destination of the link. You can use the \`aria-label\` attribute to provide a description of the link's purpose.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "2.4.4", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211#link-purpose-in-context" }
  ]
};
