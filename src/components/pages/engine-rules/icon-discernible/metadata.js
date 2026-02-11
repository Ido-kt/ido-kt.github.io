// Generated metadata for icon-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const IconDiscernible = {
  id: "icon-discernible",
  title: `Icons should be labeled or excluded from assistive technology`,
  description: `Icons used as decorative or complementary elements, like icons or illustrations that do not provide additional information, will often add unnecessary clutter to a screen reader user's browsing experience.`,
  advice: `If the icon provides additional context or necessary information, provide an aria-label or a screen-reader-only text describing the functionality. If the element is used for decorative or complementary purposes, exclude it from assistive technology using role=presentation.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "1.1.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content" },
    { type: "ACT", link: "https://act-rules.github.io/rules/46ca7f" },
    { type: "ACT", link: "https://act-rules.github.io/rules/e88epe" }
  ]
};
