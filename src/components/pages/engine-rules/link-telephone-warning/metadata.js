// Generated metadata for link-telephone-warning
// This file is auto-generated from index.ts to avoid module resolution issues

export const LinkTelephoneWarning = {
  id: "link-telephone-warning",
  title: `Warning a user when a link triggers a phone application is recommended`,
  description: `It's good practice to warn users about the expected behavior when activating a link triggers a phone application.`,
  advice: `Add a visibly hidden text element that contains 'Opens phone application'. Assign a unique id attribute to the element and add aria-describedby to the link, referencing the text element's id.`,
  impact: "minor",
  refs: [
    { type: "WCAG", id: "3.2.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html" }
  ]
};
