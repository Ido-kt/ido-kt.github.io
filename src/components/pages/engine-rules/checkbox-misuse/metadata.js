// Generated metadata for checkbox-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const CheckboxMisuse = {
  id: "checkbox-misuse",
  title: `Only elements that function as checkbox controls should receive role="checkbox"`,
  description: `Setting role="checkbox" on elements that do not function as checkbox controls can mislead screen reader users by announcing them as selectable options in a group, causing unreliable navigation and interaction.`,
  advice: `Remove role="checkbox" from the failing element.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role" }
  ]
};
