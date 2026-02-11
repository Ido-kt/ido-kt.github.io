// Generated metadata for list-item-within-list
// This file is auto-generated from index.ts to avoid module resolution issues

export const ListItemWithinList = {
  id: "list-item-within-list",
  title: `List items should not exist outside of a list element`,
  description: `When list items are not contained in a list element, screen readers will not announce them as list items, preventing users from understanding the content as part of a structured list.`,
  advice: `Enclose the list items in an <ol>, <ul>, or an element with role="list".`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://dequeuniversity.com/rules/axe/4.1/listitem" },
    { type: "WCAG Technique", link: "https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html" },
    { type: "W3C", link: "https://www.w3.org/TR/html401/struct/lists.html" }
  ]
};
