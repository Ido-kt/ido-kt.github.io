// Generated metadata for color-contrast
// This file is auto-generated from index.ts to avoid module resolution issues

export const ColorContrast = {
  id: "color-contrast",
  title: `The color contrast ratio between text and its background should provide a readable experience`,
  description: `The color contrast between foreground text and its background must be at lease at least 4.5:1 for normal text. Large-scale text, equal to or greater than 24px font size, or bold text that is equal to or greater than 18px, may meet a lower ratio of 3:1. However, it is recommended to meet the ratio 4.5:1 in all cases for readability.`,
  advice: `Work with the website's designers to choose colors that properly meet the minimum contrast ratio requirements. To check color contrast with different potential colors, use Webaim's contrast checker at https://webaim.org/resources/contrastchecker`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.4.3", level: "AA", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#contrast-minimum" },
    { type: "WAI", link: "https://www.w3.org/WAI/GL/wiki/Relative_luminance" },
    { type: "Non-Standard", link: "https://dequeuniversity.com/rules/axe/4.7/color-contrast" },
    { type: "ACT", link: "https://act-rules.github.io/rules/afw4f7" },
    { type: "ACT", link: "https://act-rules.github.io/rules/09o5cg" }
  ]
};
