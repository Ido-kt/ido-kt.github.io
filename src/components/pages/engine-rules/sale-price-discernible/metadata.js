// Generated metadata for sale-price-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const SalePriceDiscernible = {
  id: "sale-price-discernible",
  title: `Original and discounted prices should be indicated to assistive technology`,
  description: `Discounted prices often appear next to the original and distinguished with visual cues like strikethroughs or color changes. Both prices must also be conveyed by screen readers in a way that enables users to differentiate between the values, ensuring they can understand when a discount is applied.`,
  advice: `Add visually hidden text that explicitly identifies each value as the original price or the discounted price.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
    { type: "Non-Standard", link: "https://www.includia.com/blog/posts/strikethrough-accessibility" },
    { type: "Non-Standard", link: "https://www.webaxe.org/strikethrough-html-accessibility/" }
  ]
};
