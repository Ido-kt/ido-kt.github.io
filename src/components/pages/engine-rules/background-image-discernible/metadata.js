// Generated metadata for background-image-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const BackgroundImageDiscernible = {
  id: "background-image-discernible",
  title: `Non decorative Background images should be tagged and labeled`,
  description: `Background images should receive alternative text just like regular images do unless used as decorative elements and do not provide any information or additional context to the users.`,
  advice: `Use the screen-reader-only technique combined with the role=img and aria-label attributes to indicate to screen readers that there's an image and the description for that image. Make sure to include the embedded text of the image alongside the objects that comprise it in the aria-label description.`,
  impact: "moderate",
  refs: [
    { type: "W3C", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content" },
    { type: "Non-Standard", link: "https://www.davidmacd.com/blog/alternate-text-for-css-background-images.html" },
    { type: "W3C", link: "https://www.w3.org/WAI/GL/wiki/ARIATechnique_usingImgRole_with_aria-label_forCSS-backgroundImage" },
    { type: "W3C", link: "https://www.w3.org/WAI/alt/" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/images/decorative/" }
  ]
};
