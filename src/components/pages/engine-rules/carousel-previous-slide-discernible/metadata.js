// Generated metadata for carousel-previous-slide-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const CarouselPreviousSlideDiscernible = {
  id: "carousel-previous-slide-discernible",
  title: `Carousel navigation previous arrows should be labelled for assistive technology`,
  description: `Carousel arrow buttons are essential for operating carousels. By design, carousels are difficult for assistive technology to handle. If the navigation arrows aren't accessible, carousels may be impossible for blind users to operate.`,
  advice: `When using arrow button to change the carousel slide to the previous in order, include an "aria-label" or a screen-reader-only text noting this button will show the previous slide.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/carousels/" }
  ]
};
