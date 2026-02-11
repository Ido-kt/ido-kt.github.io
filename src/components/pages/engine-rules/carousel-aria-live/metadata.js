// Generated metadata for carousel-aria-live
// This file is auto-generated from index.ts to avoid module resolution issues

export const CarouselAriaLive = {
  id: "carousel-aria-live",
  title: `Carousels should not be tagged as live regions`,
  description: `When carousels are tagged as live regions, screen readers will interrupt reading and announce every slide change, even when the user isn't interacting with the carousel or is in another section entirely.`,
  advice: `Remove the aria-live attribute and any live region roles, such as role="alert", from the carousel and its content.`,
  impact: "critical",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live" },
    { type: "Non-Standard", link: "https://www.tpgi.com/screen-reader-support-aria-live-regions/" }
  ]
};
