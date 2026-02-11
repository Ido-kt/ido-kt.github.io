// Generated metadata for tabbable-non-interactive
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabbableNonInteractive = {
  id: "tabbable-non-interactive",
  title: `Non-interactive elements should not be keyboard navigable`,
  description: `Allowing static content to receive keyboard focus creates unnecessary stops in the tab order, forcing users to tab through elements that provide no action and making keyboard navigation less intuitive.`,
  advice: `Remove the tabindex attribute from the static element.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#accessibility_concerns" },
    { type: "Non-Standard", link: "https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/" },
    { type: "Non-Standard", link: "https://dequeuniversity.com/rules/axe/4.4/tabindex" }
  ]
};
