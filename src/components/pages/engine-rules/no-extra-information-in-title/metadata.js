// Generated metadata for no-extra-information-in-title
// This file is auto-generated from index.ts to avoid module resolution issues

export const NoExtraInformationInTitle = {
  id: "no-extra-information-in-title",
  title: `The title attribute should not be the only method used of providing information`,
  description: `The title attribute is announced inconsistently across screen readers and browsers, making it unreliable for labeling interactive controls. Because many users may never hear the content, reliance on the attribute risks loss of information. Instead, it should be used to provide extra help text in addition to a valid label.`,
  advice: `Make sure that the title attribute is not the only means of providing a label by assigning an aria-label or aria-labelledby attribute to the interactive control.`,
  impact: "minor",
  refs: [
    { type: "Non-Standard", link: "https://www.a11yproject.com/posts/title-attributes/" },
    { type: "Non-Standard", link: "https://www.tpgi.com/html5-accessibility-chops-title-attribute-use-and-abuse/" }
  ]
};
