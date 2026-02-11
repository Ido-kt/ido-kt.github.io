// Generated metadata for image-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const ImageDiscernible = {
  id: "image-discernible",
  title: `Functional image should have a text alternative`,
  description: `Images require a text alternative when the image conveys meaningful content or serves a functional purpose. If the image is decorative, it must be hidden from assistive technology.`,
  advice: `If the image is meaningful, assign a text alternative with a description of the image content using the alt attribute for image elements, or aria-label for elements with role="img". If the image is decorative, provide an empty alt attribute for image elements, or role="presentation" for elements with role="img".`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "1.1.1", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0#non-text-content" },
    { type: "ACT", link: "https://act-rules.github.io/rules/23a2a8" },
    { type: "ACT", link: "https://act-rules.github.io/rules/qt1vmo" }
  ]
};
