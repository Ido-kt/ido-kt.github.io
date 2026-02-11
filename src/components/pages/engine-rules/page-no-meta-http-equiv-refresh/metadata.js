// Generated metadata for page-no-meta-http-equiv-refresh
// This file is auto-generated from index.ts to avoid module resolution issues

export const PageNoMetaHttpEquivRefresh = {
  id: "page-no-meta-http-equiv-refresh",
  title: `Pages should not contain <meta> elements with http-equiv='refresh' attribute`,
  description: `<meta> elements with http-equiv='refresh' should be avoided as they can negatively impact accessibility and user experience. The <meta> element with http-equiv='refresh' specifies a delay in seconds before the page reloads or redirects to a provided URL. This can be disorienting for users, especially for those who rely on screen readers because the page content changes without any user interaction.`,
  advice: `Remove <meta> elements with http-equiv="refresh" and use server-side redirects or JavaScript for page refreshes or redirects.`,
  impact: "serious",
  refs: [
    { type: "W3C", link: "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-no-extreme-changes-context" },
    { type: "W3C", link: "https://www.w3.org/TR/WCAG20-TECHS/H76.html" },
    { type: "W3C", link: "https://www.w3.org/TR/2012/WD-html-markup-20121025/meta.http-equiv.refresh.html" },
    { type: "ACT", link: "https://act-rules.github.io/rules/bc659a" },
    { type: "ACT", link: "https://act-rules.github.io/rules/bisz58" }
  ]
};
