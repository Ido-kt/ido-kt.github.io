// Generated metadata for breadcrumbs-nav
// This file is auto-generated from index.ts to avoid module resolution issues

export const BreadcrumbsNav = {
  id: "breadcrumbs-in-nav",
  title: `Breadcrumbs navigation should be tagged properly`,
  description: `Breadcrumb navigation regions are essential for user orientation. If not appropriately tagged, screen reader users will not know that such an option exists on the page and will face more difficulties browsing around.`,
  advice: `Add a role=navigation or code the breadcrumbs using the HTML NAV tag. This will indicate to screen readers that it is a navigation region. Lastly, add an aria-label=Breadcrumbs attribute so screen readers can announce that to users.`,
  impact: "serious",
  refs: [
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/" },
    { type: "Non-Standard", link: "https://www.aditus.io/patterns/breadcrumbs/" },
    { type: "Non-Standard", link: "https://www.magentaa11y.com/checklist-web/breadcrumbs/" }
  ]
};
