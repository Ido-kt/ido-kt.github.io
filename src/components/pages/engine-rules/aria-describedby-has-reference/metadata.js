// Generated metadata for aria-describedby-has-reference
// This file is auto-generated from index.ts to avoid module resolution issues

export const AriaDescribedByHasReference = {
  id: "aria-describedby-has-reference",
  title: `aria-describedby should reference a valid element id`,
  description: `The element’s aria-describedby attribute points to an id that does not exist or is not valid, preventing assistive technologies from announcing the intended description and causing users to miss important context.`,
  advice: `Make the value of aria-describedby exactly match the id of an existing, unique element on the page. Remove or update the attribute if the target is missing or no longer relevant`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA1" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16" },
    { type: "ACT", link: "https://act-rules.github.io/rules/in6db8" }
  ]
};
