// Generated metadata for input-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const InputDiscernible = {
  id: "input-discernible",
  title: `Inputs must include a descriptive label`,
  description: `Screen readers rely on correctly coded and associated labels to announce the purpose of a form field. If a label isn't properly associated with its input field, screen reader users won't know the expected input.`,
  advice: `Provide a <label> element and associate it with the <input> using the for and id attributes. Alternatively, you can assign an aria-label attribute directly to the <input> element.`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
    { type: "ACT", link: "https://act-rules.github.io/rules/e086e5" },
    { type: "WAI", link: "https://www.w3.org/WAI/tutorials/forms/labels/" }
  ]
};
