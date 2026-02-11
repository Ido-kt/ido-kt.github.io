// Generated metadata for region-main-content-misuse
// This file is auto-generated from index.ts to avoid module resolution issues

export const RegionMainContentMisuse = {
  id: "region-main-content-misuse",
  title: `An element without main content is tagged as a main landmark`,
  description: `Incorrectly tagging the main landmark may cause screen reader users to misunderstand where the primary content begins or ends, leading to confusion and inefficient navigation.`,
  advice: `If the failing element is a custom main landmark, remove role="main". If the failing element is coded using a HTML <main> tag, change the tag to a <div> or an element with a suitable role.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role" },
    { type: "WAI", link: "https://www.digitala11y.com/main-role/" }
  ]
};
