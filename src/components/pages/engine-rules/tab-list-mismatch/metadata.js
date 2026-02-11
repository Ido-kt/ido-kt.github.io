// Generated metadata for tab-list-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabListMisMatch = {
  id: "tab-list-mismatch",
  title: `Tablists should be tagged for assistive technology`,
  description: `A tablist without role="tablist" is not announced as a group of related tabs, which prevents screen reader users from recognizing the structure and purpose of the component. This makes it harder to navigate between tabs and understand that the controls belong to a single set.`,
  advice: `Apply role="tablist" to the container element that directly holds the tabs.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://www.digitala11y.com/tablist-role/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role" },
    { type: "WAI", link: "https://www.w3.org/WAI/ARIA/apg/patterns/tabs/" }
  ]
};
