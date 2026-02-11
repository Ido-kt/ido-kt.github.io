// Generated metadata for interactive-target-size
// This file is auto-generated from index.ts to avoid module resolution issues

export const InteractiveTargetSize = {
  id: "interactive-target-size",
  title: `Targets for interactive elements should meet a minimum size (at least 24 by 24 CSS pixels) or have enough spacing around them`,
  description: `Interactive elements, such as buttons and links, should have a minimum size of 24 by 24 CSS pixels or have enough spacing to avoid accidental activation of adjacent elements. This is crucial for users with motor impairments or those using the website in unstable environments, like on a bus.`,
  advice: `Make sure all interactive targets meet the minimum size of 24 by 24 CSS pixels. If resizing is not possible, provide spacing with a diameter of at least 24 CSS pixels around smaller targets to ensure they don't intersect with adjacent controls.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "2.5.8", level: "AA", link: "https://www.wcag.com/developers/2-5-8-target-size-minimum-level-aa/" },
    { type: "WAI", link: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum" },
    { type: "W3C", link: "https://www.w3.org/WAI/WCAG22/Techniques/css/C42.html" },
    { type: "Non-Standard", link: "https://www.digitala11y.com/understanding-sc-2-5-8-target-size-minimum/" },
    { type: "Non-Standard", link: "https://dubbot.com/dubblog/2024/staying-on-target.html" },
    { type: "Non-Standard", link: "https://tetralogical.com/blog/2022/12/20/foundations-target-size/" }
  ]
};
