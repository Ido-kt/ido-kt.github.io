// Generated metadata for checkbox-discernible
// This file is auto-generated from index.ts to avoid module resolution issues

export const CheckboxDiscernible = {
  id: "checkbox-discernible",
  title: `Checkbox controls should have a label`,
  description: `Screen readers rely on properly coded and associated labels to announce the purpose of a form field. A checkbox control without an identifiable label may prevent screen reader users from completing the form.`,
  advice: `Assign a label to each checkbox control using <label for> with a matching id (or by wrapping the <label> around the control), or using ARIA attributes such as aria-label or aria-labelledby.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=246#info-and-relationships" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role" }
  ]
};
