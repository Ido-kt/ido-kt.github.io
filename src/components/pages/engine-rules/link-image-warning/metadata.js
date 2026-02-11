// Generated metadata for link-image-warning
// This file is auto-generated from index.ts to avoid module resolution issues

export const LinkImageWarning = {
  id: "link-image-warning",
  title: `Links that open an image shouldn't do so without warning the user`,
  description: `Standalone image links can unexpectedly shift the user's context by redirecting them to an image. They should therefore display a clear warning so that the user is informed before proceeding`,
  advice: `Include a clear warning that will be visible for screen-readers, indicating that clicking the link will open an image.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "3.2.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html" }
  ]
};
