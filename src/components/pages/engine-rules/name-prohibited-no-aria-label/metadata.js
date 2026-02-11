// Generated metadata for name-prohibited-no-aria-label
// This file is auto-generated from index.ts to avoid module resolution issues

export const NameProhibitedNoAriaLabel = {
  id: "name-prohibited-no-aria-label",
  title: `aria-label should be used with compatible roles`,
  description: `Using aria-label on elements that do not support the attribute can lead to the label being ignored, leaving users without the intended information.`,
  advice: `Use a visually hidden element to provide the name or description instead of an aria-label.`,
  impact: "moderate",
  refs: [
    { type: "W3C", link: "https://www.w3.org/TR/html-aria/#docconformance" },
    { type: "Non-Standard", link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/#:~:text=Example%20of%20misusing%20ARIA%20labels%3A&text=In%20the%20first%20code%20snippet,the%20text%20inside%20it%20already." },
    { type: "Non-Standard", link: "https://www.tpgi.com/short-note-on-aria-label-aria-labelledby-and-aria-describedby/" },
    { type: "W3C", link: "https://www.w3.org/TR/wai-aria-1.2/#aria-label" },
    { type: "W3C", link: "https://www.w3.org/TR/using-aria/#practical-support-aria-label-aria-labelledby-and-aria-describedby" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label" },
    { type: "ACT", link: "https://act-rules.github.io/rules/5c01ea" }
  ]
};
