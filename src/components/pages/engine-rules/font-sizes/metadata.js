// Generated metadata for font-sizes
// This file is auto-generated from index.ts to avoid module resolution issues

export const FontSizes = {
  id: "font-sizes",
  title: `Text should be scalable to 200% without loss of content or functionality`,
  description: `When text is scaled to 200%, content may be clipped, overlap, or overflow its container if styles like fixed heights, fixed widths, hidden overflow, or absolute positioning prevent proper reflow.`,
  advice: `Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to ensure content remains readable when text is scaled to 200%.`,
  impact: "moderate",
  refs: [
    {
      type: "WCAG",
      id: "1.4.4",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#resize-text",
    },
    {
      type: "Non-Standard",
      id: "",
      level: "",
      link: "https://www.section508.gov/develop/fonts-typography/",
    },
  ],
};
