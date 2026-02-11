// Generated metadata for tabbable-visible
// This file is auto-generated from index.ts to avoid module resolution issues

export const TabbableVisible = {
  id: "tabbable-visible",
  title: `Use tabindex attribute correctly to manage docus for custom interactive elements`,
  description: `When interactive elements remain focusable while they are visually hidden, keyboard users may encounter controls that they cannot see and that should not be available in the current interface.`,
  advice: `Apply tabindex="0" to custom interactive elements so they follow the natural tab sequence, and tabindex="-1" when an element should only be reachable programmatically. Avoid positive numbers such as tabindex="1" or higher, do not use invalid values such as letters or decimals, and ensure tabindex is not applied to static elements.Use tabindex="-1" to remove elements from the tab order when they are offscreen. Consider using CSS techniques, such as display:none or visibility:hidden when content should be hidden from all users.`,
  impact: "critical",
  refs: [
    { type: "Non-Standard", link: "https://docs.deque.com/issue-help/1.0.0/en/focus-on-hidden-item" }
  ]
};
