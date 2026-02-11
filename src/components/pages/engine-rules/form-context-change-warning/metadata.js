// Generated metadata for form-context-change-warning
// This file is auto-generated from index.ts to avoid module resolution issues

export const FormContextChangeWarning = {
  id: "form-context-change-warning",
  title: `Interacting with form controls should not cause a change in context unless a user is notified beforehand`,
  description: `Interacting with form controls shouldn't automatically submit a form or cause any other change in context without notifying the user in advance. Form controls that cause a context change on input can disorient a user, since the behavior is not expected.`,
  advice: `Make sure that forms can be manually submitted via a submit button, or provide instructions that notify users of the expected behavior before they interact with the control.`,
  impact: "critical",
  refs: [
    { type: "WCAG", id: "3.2.2", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/on-input" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20080430/H32.html" },
    { type: "WCAG Technique", link: "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20080430/G80.html" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG21/Techniques/general/G13" },
    { type: "WAI", link: "https://www.w3.org/WAI/WCAG20/quickref/20080430/#consistent-behavior-unpredictable-change" }
  ]
};
