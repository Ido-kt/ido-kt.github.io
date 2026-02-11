// Generated metadata for pixel-image-not-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const PixelImageNotDiscernible = {
  id: "pixel-image-not-discernible",
  title: `Pixels should be hidden from assistive technology`,
  description: `Visually hidden pixel images (often used for analytics or marketing purposes) should not be announced by screen readers.`,
  advice: `If the pixel image is an <img> element, assign an empty alt attribute. For other cases, add role="none" or role="presentation" to the pixel element.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "1.1.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role" }
  ]
};
