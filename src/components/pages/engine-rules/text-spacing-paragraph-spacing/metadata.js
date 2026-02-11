// Generated metadata for text-spacing-paragraph-spacing
// This file is auto-generated from index.ts to avoid module resolution issues

export const TextSpacingParagraphSpacing = {
  id: "text-spacing-paragraph-spacing",
  title: `Paragraph spacing should scale to at least 2 times the font size without loss of content or functionality`,
  description: `When paragraph spacing is increased to 2 times the font size, text may be clipped or overflow its container if styles like fixed heights, hidden overflow, or absolute positioning prevent proper reflow.`,
  advice: `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to make sure content remains readable when paragraph spacing is scaled to 2 times the font size.`,
  impact: "critical",
  refs: [
    {
      type: "WCAG",
      id: "1.4.12",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html",
    },
  ],
};
