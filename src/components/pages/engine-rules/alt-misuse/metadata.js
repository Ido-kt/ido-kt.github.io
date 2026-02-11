// Generated metadata for alt-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const AltMisuse = {
  id: "alt-misuse",
  title: `Elements other than image (Tag: IMG) should not have alt attribute`,
  description: `The alt attribute is used to provide a text alternative for images. It is not meant to be used on elements other than images and therefore will not be read using screen-readers.`,
  advice: `Use a screen-reader-only element to add the accessibility description of the element that was misusing the alt attribute and remove the alt attribute.`,
  impact: "minor",
  refs: [
    { type: "WCAG", id: "4.1.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html" },
    { type: "WCAG", id: "3.3.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt" }
  ]
};
