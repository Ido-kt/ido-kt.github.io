// Generated metadata for carousel-redundant-discernible-text
// This file is auto-generated from index.ts to avoid module resolution issues

export const CarouselRedundantDiscernibleText = {
  id: "carousel-redundant-discernible-text",
  title: `Carousels should be labelled properly without redundancy`,
  description: `Unlabeled carousel areas are difficult for screen reader users because content gets hidden and shown unexpectedly. However, when labelled, the label should not be redundant.`,
  advice: `When using the "aria-label" or "aria-labelledby" element to describe the contents of the carouse, do not use the word "carousel" in it, as it is redundant when used with the "role" and "aria-roledescription" attributes. Using all three of these attributes, assistive technology users will understand that this is a carousel region and what it contains.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/carousels/" }
  ]
};
