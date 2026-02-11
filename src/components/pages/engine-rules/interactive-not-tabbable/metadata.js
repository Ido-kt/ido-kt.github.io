// Generated metadata for interactive-not-tabbable
// This file is auto-generated from index.ts to avoid module resolution issues

export const InteractiveNotTabbable = {
  id: "interactive-not-tabbable",
  title: `Interactive elements should be keyboard navigable`,
  description: `Interactive elements should be keyboard navigable. If a custom interactive element is not keyboard navigable, keyboard users will not be able to interact with it.`,
  advice: `Add tabindex="0" to the custom interactive element.`,
  impact: "serious",
  refs: [
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#accessibility_concerns" },
    { type: "Non-Standard", link: "https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/" },
    { type: "Non-Standard", link: "https://dequeuniversity.com/rules/axe/4.4/tabindex" },
    { type: "ACT", link: "https://act-rules.github.io/rules/46ca7f" }
  ]
};
