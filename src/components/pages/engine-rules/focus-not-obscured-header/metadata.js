// Generated metadata for focus-not-obscured-header
// This file is auto-generated from index.ts to avoid module resolution issues

export const FocusNotObscuredHeader = {
  id: "focus-not-obscured-header",
  title: `Focused elements should not be obscured by a sticky header`,
  description: `A sticky header remains anchored to the top of the screen while the rest of the page content can be scrolled. If it is not offset from interactive elements, it can overlap and obscure the item in focus.`,
  advice: `When a page has a sticky header, make sure that any element receiving focus is not fully covered by the header. One way to achieve this is by using the CSS property scroll-padding-top.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "2.4.11", level: "AA", link: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html" },
    { type: "WCAG", id: "2.4.12", level: "AAA", link: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html" },
    { type: "WAI", link: "https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum" },
    { type: "WAI", link: "https://www.w3.org/WAI/WCAG22/Techniques/css/C43" },
    { type: "Non-Standard", link: "https://www.w3.org/WAI/WCAG22/Techniques/failures/F110" },
    { type: "Non-Standard", link: "https://www.tpgi.com/how-to-test-2-4-11-focus-not-obscured-minimum/" },
    { type: "Non-Standard", link: "https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/" },
    { type: "ACT", link: "https://act-rules.github.io/rules/0ssw9k" }
  ]
};
