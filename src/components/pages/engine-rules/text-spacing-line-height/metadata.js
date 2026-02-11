// Generated metadata for text-spacing-line-height
// This file is auto-generated from index.ts to avoid module resolution issues

export const TextSpacingLineHeight = {
  id: "text-spacing-line-height",
  title: `Line height should scale to at least 1.5 times the font size without loss of content or functionality`,
  description: `When line height is increased to 1.5 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed heights, fixed widths, hidden overflow, or absolute positioning prevent proper reflow`,
  advice: `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to make sure content remains readable when line spacing is scaled to 1.5 times the font size.`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "1.4.12", level: "AA", link: "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html" },
    { type: "ACT", link: "https://act-rules.github.io/rules/78fd32" }
  ]
};
