// Generated metadata for carousel-previous-slide-discernible-correctly
// This file is auto-generated from index.ts to avoid module resolution issues

export const CarouselPreviousSlideDiscernibleCorrectly = {
  id: "carousel-previous-slide-discernible-correctly",
  title: `Carousel Previous pagination control should have an accurate and descriptive label`,
  description: `If the Previous control (often marked up using an arrow symbol) in a carousel is not given a descriptive label, screen reader users may not understand that the control activates the previous slide or set of slides in the carousel.`,
  advice: `Assign aria-label="Previous" to the Previous carousel pagination control.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "2.4.6", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#headings-and-labels" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/carousels/" }
  ]
};
