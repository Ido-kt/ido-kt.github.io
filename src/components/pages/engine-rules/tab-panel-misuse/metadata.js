// Generated metadata for tab-panel-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabPanelMisuse = {
  id: "tab-panel-misuse",
  title: `Only elements that function as tab panels should receive role="tabpanel"`,
  description: `Applying role="tabpanel" to an element without a corresponding tab misleads screen reader users by announcing it as tab content, even though no controlling tab exists.`,
  advice: `Remove role="tabpanel" from the failing element.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://www.digitala11y.com/tabpanel-role/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role" },
    { type: "W3C", link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/" }
  ]
};
