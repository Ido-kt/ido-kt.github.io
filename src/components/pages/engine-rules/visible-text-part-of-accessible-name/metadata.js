// Generated metadata for visible-text-part-of-accessible-name
// This file is auto-generated from index.ts to avoid module resolution issues

export const VisibleTextPartOfAccessibleName = {
  id: "visible-text-part-of-accessible-name",
  title: `Aria labels should not override or replace visible text`,
  description: `Aria labels should describe elements that don't have proper text, like icons and field labels. It should not be used to override element texts. Screen reader users need to receive the exact text as visually on the screen, with more context if it is ambiguous. An exception applies to landmarks such as nav or other landmarks: here, ARIA labels can provide additional context or clarification.`,
  advice: `Remove the aria-label. If you need to add context for screen reader users only because of the ambiguity of the text, use the screen-reader-only technique.`,
  impact: "critical",
  refs: [
    {
      type: "WCAG",
      id: "2.5.3",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html",
    },
    {
      type: "Non-Standard",
      id: "",
      level: "",
      link: "https://www.useragentman.com/enable/screen-reader-only-text.php",
    },
    {
      type: "ACT",
      id: "2ee8b8",
      level: "",
      link: "https://act-rules.github.io/rules/2ee8b8",
    },
  ],
};
