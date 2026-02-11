// Generated metadata for carousel-slide-picker-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const CarouselSlidePickerDiscernible = {
  id: "carousel-slide-picker-discernible",
  title: `Carousel pagination tabs should have accurate and descriptive labels`,
  description: `If carousel pagination tabs are not given meaningful labels, screen reader users are unable to determine which slide or set of slides will be displayed when a tab is activated.`,
  advice: `Provide each pagination tab with an accurate, descriptive label using aria-label or aria-labelledby. For single-slide navigation, use labels like “Slide 1,” “Slide 2,” etc. For grouped slides such as product cards, describe the range of items (e.g., “Products 1 to 4,” “Products 5 to 8”) and include category context when useful.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#name-role-value" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/carousels/" }
  ]
};
