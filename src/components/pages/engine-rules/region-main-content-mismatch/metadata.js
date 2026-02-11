// Generated metadata for region-main-content-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const RegionMainContentMismatch = {
  id: "region-main-content-mismatch",
  title: `All of the main content on the page is contained in the main landmark`,
  description: `The main landmark represents the primary content of a page. It should include only content unique to that page and must remain separate from repeated elements, such as navigation, header, or footer.`,
  advice: `Add a role='main' attribute to the main content area so that it is correctly identified by assistive technologies.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role" },
    { type: "WAI", link: "https://www.digitala11y.com/main-role/" }
  ]
};
