// Generated metadata for letter-spacing-positive
// This file is auto-generated from index.ts to avoid module resolution issues

export const LetterSpacingPositive = {
  id: "letter-spacing-positive",
  title: `Letter spacing should scale to at least 0.12 times the font size without loss of content or functionality`,
  description: `When letter spacing is increased to 0.12 times the font size, text may be clipped, overlap, or overflow its container if styles like fixed widths, fixed heights, hidden overflow, or forced no-wrap prevent proper reflow.`,
  advice: `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to ensure text remains readable when letter spacing is scaled to 0.12 times the font size.`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "1.4.12", level: "AA", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C211%2C1412#text-spacing" },
    { type: "ACT", link: "https://act-rules.github.io/rules/24afc2" }
  ]
};
