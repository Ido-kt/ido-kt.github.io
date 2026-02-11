// Generated metadata for page-meta-viewport-valid
// This file is auto-generated from index.ts to avoid module resolution issues

export const PageMetaViewportValid = {
  id: "page-meta-viewport-valid",
  title: `Meta viewport should allow content scaling`,
  description: `The meta viewport should allow scalability, typically with width=device-width, initial-scale=1, so text can be resized up to 200% without loss of functionality. Using user-scalable=no or maximum-scale=1 prevents users from enlarging content, making it difficult for people with low vision to read or interact.`,
  advice: `Set content="width=device-width, initial-scale=1" on the meta viewport element and avoid values like user-scalable=no or maximum-scale=1 to preserve zoom and text scaling.`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "1.4.4", level: "AA", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#resize-text" },
    { type: "W3C", link: "https://www.w3.org/TR/mobile-accessibility-mapping/#use-viewport-meta-tag-to-identify-visual-scale-properties" }
  ]
};
