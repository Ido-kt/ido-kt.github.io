// Generated metadata for tab-panel-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabPanelMismatch = {
  id: "tab-panel-mismatch",
  title: `Tab panels should be tagged for assistive technology`,
  description: `The role="tabpanel" identifies an element as the content region of a tab interface. Without this role, panels are exposed only by their native role (such as a generic div or a named section) and screen reader users may not perceive them as part of the tab structure.`,
  advice: `Apply role="tabpanel" to each container that is exposed when selecting a tab.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://www.digitala11y.com/tabpanel-role/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role" },
    { type: "W3C", link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/" }
  ]
};
