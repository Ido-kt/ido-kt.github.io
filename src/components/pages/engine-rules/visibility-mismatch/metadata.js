// Generated metadata for visibility-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const VisibilityMismatch = {
  id: "visibility-mismatch",
  title: `Visible content should not be hidden from assistive technology`,
  description: `If content remains visible on the screen but assigned aria-hidden="true", it will be excluded from the accessibility tree. As a result, screen reader users will not have access to the same information as sighted users.`,
  advice: `Remove aria-hidden="true" from visible elements. Make sure that the attribute is only used to hide redundant or inactive content.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://www.tpgi.com/html5-accessibility-chops-hidden-and-aria-hidden/" },
    { type: "ACT", link: "https://act-rules.github.io/rules/6cfa84" },
    { type: "ACT", link: "https://act-rules.github.io/rules/e88epe" }
  ]
};
