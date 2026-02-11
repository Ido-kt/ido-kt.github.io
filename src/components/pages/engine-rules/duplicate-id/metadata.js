// Generated metadata for duplicate-id
// This file is auto-generated from index.ts to avoid module resolution issues

export const DuplicateId = {
  id: "duplicate-id",
  title: `The id attribute should have a unique value`,
  description: `The id attribute is a unique identifier in the DOM, and using the same value more than once creates ambiguity. This can cause styles and scripts to behave unpredictably, and may also disrupt label or ARIA references that depend on unique IDs.`,
  advice: `Make sure all id attributes on a page have unique values.`,
  impact: "minor",
  refs: [
    { type: "WCAG", id: "4.1.1", level: "A", link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-parses" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/WCAG20-TECHS/F77.html" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/WCAG20-TECHS/H93.html" }
  ]
};
