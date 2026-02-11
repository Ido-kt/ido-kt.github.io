// Generated metadata for aria-controls-has-reference
// This file is auto-generated from index.ts to avoid module resolution issues

export const AriaControlsHasReference = {
  id: "aria-controls-has-reference",
  title: `aria-controls should reference a valid element id`,
  description: `The element’s aria-controls points to an id that does not exist, or is not valid, breaking the link between the controlling element and the content it manages.`,
  advice: `Make the value of aria-controls exactly match an existing, unique id of an element on the page. Remove or update the attribute if the target element is missing or no longer relevant.`,
  impact: "minor",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131%2C411#parsing" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/wai-aria-1.1/#aria-controls" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls" },
    { type: "ACT", link: "https://act-rules.github.io/rules/in6db8" }
  ]
};
