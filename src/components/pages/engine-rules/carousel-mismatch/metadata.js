// Generated metadata for carousel-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const CarouselMismatch = {
  id: "carousel-mismatch",
  title: `Carousels should be tagged for assistive technology`,
  description: `The carousel container should have a role so assistive technology treats it as a distinct section. Using role="region" with a label exposes the carousel as a named region, allowing screen reader users to recognize the purpose of the component and navigate to it efficiently.`,
  advice: `Assign role="region" to the carousel container. Make sure to provide a descriptive label using aria-label or aria-labelledby.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/carousels/" }
  ]
};
