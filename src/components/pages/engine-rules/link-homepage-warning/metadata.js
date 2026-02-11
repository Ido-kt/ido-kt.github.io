// Generated metadata for link-homepage-warning
// This file is auto-generated from index.ts to avoid module resolution issues

export const LinkHomepageWarning = {
  id: "link-homepage-warning",
  title: `Links that redirect to the homepage shouldn't do so without warning the user`,
  description: `Standalone redirection links to the homepage can unexpectedly shift the user's context by redirecting them to the homepage. They should therefore display a clear warning so that the user is informed before proceeding`,
  advice: `Include a clear warning that will be visible for screen-readers, indicating that clicking the link will redirect the user to the homepage`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "3.2.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html" }
  ]
};
