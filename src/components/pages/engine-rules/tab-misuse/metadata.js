// Generated metadata for tab-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabMisuse = {
  id: "tab-misuse",
  title: `Only elements that function as tabs should receive role="tab"`,
  description: `Applying role="tab" to an element that is not part of a functioning tab interface misleads screen reader users by presenting it as a tab without a corresponding panel.`,
  advice: `Remove role="tab" from the failing element.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://www.digitala11y.com/tab-role/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role" },
    { type: "W3C", link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/" }
  ]
};
