// Generated metadata for list-not-empty
// This file is auto-generated from index.ts to avoid module resolution issues

export const ListNotEmpty = {
  id: "list-not-empty",
  title: `Lists should contain at least one list item`,
  description: `An empty list will still be announced by screen readers, which may confuse users, leaving them unsure if the list is empty or an issue prevents the screen reader from announcing the list items.`,
  advice: `Remove the empty HTML list elements (<ul>/<ol>) or assign aria-hidden="true" to make sure they are ignored by screen readers.`,
  impact: "minor",
  refs: [
    { type: "Non-Standard", link: "https://help.siteimprove.com/support/solutions/articles/80001051793-accessibility-rule-container-element-is-empty-explained" },
    { type: "W3C", link: "https://www.w3.org/WAI/standards-guidelines/act/rules/bc4a75/proposed/" },
    { type: "W3C", link: "https://www.w3.org/TR/wai-aria-1.2/#mustContain" }
  ]
};
