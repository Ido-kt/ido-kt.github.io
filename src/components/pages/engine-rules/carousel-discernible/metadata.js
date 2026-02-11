// Generated metadata for carousel-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const CarouselDiscernible = {
  id: "carousel-discernible",
  title: `Carousels should have a descriptive label`,
  description: `Carousels need a label so assistive technology announces them with a clear name, such as “Featured products carousel”. This ensures screen reader users know the widget’s purpose and can differentiate it from other carousels on the page.`,
  advice: `Provide a clear label for the carousel using aria-labelledby to reference a visible heading or assign aria-label to the carousel container.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/carousels/" }
  ]
};
