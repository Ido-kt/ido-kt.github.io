// Generated metadata for skip-link-exists
// This file is auto-generated from index.ts to avoid module resolution issues

export const SkipLinkExists = {
  id: "skip-link-exists",
  title: `Skip links are the preferred technique for bypassing repeated content`,
  description: `Skip links let keyboard and screen reader users bypass repetitive navigation and jump directly to important sections such as main content, navigation, or footer. This improves efficiency, reduces keystrokes, and makes pages easier to use for those relying on assistive technology.`,
  advice: `Add skip links as the first focusable elements on the page, directing users to regions marked with unique ids and appropriate landmarks such as <main>, <nav>, or <footer>. Keep them visually hidden until focused so they don’t clutter the layout, but ensure they remain accessible to screen readers by avoiding aria-hidden="true" or CSS display:none.`,
  impact: "moderate",
  refs: [
    { type: "Non-Standard", link: "https://dequeuniversity.com/rules/axe/4.7/skip-link" },
    { type: "Non-Standard", link: "https://a11y-101.com/development/skip-link" },
    { type: "WAI", link: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html" },
    { type: "W3C", link: "https://www.w3.org/WAI/test-evaluate/easy-checks/skip-link/" }
  ]
};
