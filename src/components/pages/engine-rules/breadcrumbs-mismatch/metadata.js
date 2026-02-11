// Generated metadata for breadcrumbs-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const BreadcrumbsMismatch = {
  id: "breadcrumbs-mismatch",
  title: `Breadcrumb navigation region should have a label`,
  description: `A breadcrumb region presents a trail of links showing the user’s current page in relation to higher-level pages on a site. Without a label, it may be announced by screen reades simply as "navigation", making it hard to distinguish from other navigation regions on the page.`,
  advice: `Add an aria-label=Breadcrumbs attribute so screen readers can announce that to users.`,
  impact: "serious",
  refs: [
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/" },
    { type: "Non-Standard", link: "https://www.aditus.io/patterns/breadcrumbs/" },
    { type: "Non-Standard", link: "https://www.magentaa11y.com/checklist-web/breadcrumbs/" }
  ]
};
