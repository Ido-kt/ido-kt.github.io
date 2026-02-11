// Generated metadata for region-main-content-single
// This file is auto-generated from index.ts to avoid module resolution issues

export const RegionMainContentSingle = {
  id: "region-main-content-single",
  title: `Each page should include at most one main landmark`,
  description: `A page typically presents one central subject, so a single main landmark establishes the boundaries of the primary content for screen reader users. Multiple main landmarks create uncertainty about the scope, leading to confusion and difficulty navigating the page.`,
  advice: `Keep only the true primary area as <main> or role="main", and change others to suitable elements—such as <section>, <nav>, or a neutral <div>. In modular or single-page apps, only the active view should expose a main landmark; remove the role or unmount inactive modules, or hide them with hidden or display:none.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#info-and-relationships" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/wai-aria-1.2/#main" },
    { type: "WAI", link: "https://w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html" }
  ]
};
