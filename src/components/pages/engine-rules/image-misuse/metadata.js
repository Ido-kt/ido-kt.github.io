// Generated metadata for image-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const ImageMisuse = {
  id: "image-misuse",
  title: `An element that does not function as an image should be assigned role="img"`,
  description: `Using an image tag for content that isn't an image can obscure relevant information and confuse screen readers and other assistive technologies. This can lead to a poor user experience for people with disabilities.`,
  advice: `Remove role="img" from the failing element.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role" },
    { type: "WAI", link: "https://www.w3.org/WAI/tutorials/images/" }
  ]
};
