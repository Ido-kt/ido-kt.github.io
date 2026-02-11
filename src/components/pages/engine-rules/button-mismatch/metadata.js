// Generated metadata for button-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const ButtonMismatch = {
  id: "button-mismatch",
  title: `Buttons should be tagged for assistive technology`,
  description: `If interactive elements cannot be identified as buttons, screen reader users may not realize the element is actionable, which can stop them from submitting forms, opening dialogs, or performing other intended actions.`,
  advice: `Add role="button" to the custom navigation region, or use a HTML <button> element.`,
  impact: "critical",
  refs: [
    { type: "ACT", link: "https://act-rules.github.io/rules/97a4e1" },
    { type: "ACT", link: "https://act-rules.github.io/rules/59796f" }
  ]
};
