// Generated metadata for dialog-modal-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const DialogModalMismatch = {
  id: "dialog-modal-mismatch",
  title: `Modal dialogs should be tagged for assistive technology`,
  description: `Content behind active modal dialogs should not be navigable, otherwise screen reader users may still encounter hidden or unrelated content, disrupting the intended workflow and making it harder to focus on the dialog’s purpose.`,
  advice: `Add aria-modal="true" alongside role="dialog" to indicate to screen readers that the dialog is modal and that content outside of it should be treated as inactive. Screen readers will recognize this and adjust their behavior to keep the user’s focus inside the dialog, providing a clearer and more predictable experience.`,
  impact: "critical",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/" }
  ]
};
