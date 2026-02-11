// Generated metadata for required-form-field-aria-required
// This file is auto-generated from index.ts to avoid module resolution issues

export const RequiredFormFieldAriaRequired = {
  id: "required-form-field-aria-required",
  title: `Mandatory form fields should indicate that they are required`,
  description: `If a field is marked as required only through visual cues, but lacks the required attribute or aria-required="true", screen readers will not announce it as mandatory. As a result, users may experience unnecessary delays or confusion when trying to submit the form.`,
  advice: `Add required or aria-required="true" to required input fields.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "3.3.1", level: "AA", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=131%2C221%2C244%2C332%2C333%2C331#error-identification" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html" },
    { type: "WAI", link: "https://www.w3.org/WAI/tutorials/forms/validation/#validating-required-input" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required" }
  ]
};
