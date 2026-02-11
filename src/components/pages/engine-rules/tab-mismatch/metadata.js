// Generated metadata for tab-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabMismatch = {
  id: "tab-mismatch",
  title: `Tab controls should be tagged for assistive technology`,
  description: `Custom tabs must be explicitly defined for screen readers since there are no native HTML tab elements. Without assigning role="tab" to the interactive elements, assistive technology will not identify them as tabs, preventing users from understanding their function or navigating them as part of a tab interface.`,
  advice: `Apply role="tab" to each tab control.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://www.digitala11y.com/tab-role/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role" },
    { type: "W3C", link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/" }
  ]
};
