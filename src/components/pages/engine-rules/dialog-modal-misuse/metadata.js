// Generated metadata for dialog-modal-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const DialogModalMisuse = {
  id: "dialog-modal-misuse",
  title: `Only elements that function as dialogs should be tagged as dialog`,
  description: `Marking up elements as dialogs without actual dialog behavior causes screen readers to announce a dialog, misleading users into expecting modal interaction and restricted reading order that do not occur.`,
  advice: `Remove role="dialog" from the non-dialog element or add role="presentation" if the HTML DIALOG element is used.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/" }
  ]
};
