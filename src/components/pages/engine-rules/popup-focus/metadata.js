// Generated metadata for popup-focus
// This rule is an alias for dialog-modal-focus (backward compatibility)

export const PopupFocus = {
  id: "popup-focus",
  title: `Keyboard focus should move into and lock inside active dialogs`,
  description: `Dialogs that appear on pages without receiving keyboard focus immediately on interaction often leave users navigating content behind the dialog and make it difficult or impossible for keyboard and screen reader users to access the dialog itself.`,
  advice: `When a dialog opens, use JavaScript to place keyboard focus on the first interactive element within the dialog. If static content, such as lists, tables, or paragraphs, appears before any interactive elements and it needs to be perceived in order to easily understand the content, tabindex="-1" can be added to a static element at the start of the content to initially focus that element.`,
  impact: "critical",
  refs: [
    {
      type: "WAI",
      id: "",
      level: "",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/",
    },
    {
      type: "W3C",
      id: "",
      level: "",
      link: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html",
    },
  ],
};
