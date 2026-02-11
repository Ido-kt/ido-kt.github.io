// Generated metadata for tab-list-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabListMisuse = {
  id: "tab-list-misuse",
  title: `Only elements that function as tablists should receive role="tablist"`,
  description: `Applying role="tablist" to an element without tabs misleads screen reader users by suggesting a group of tabs that does not exist.`,
  advice: `Remove role="tablist" from the failing element.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://www.digitala11y.com/tablist-role/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/" }
  ]
};
