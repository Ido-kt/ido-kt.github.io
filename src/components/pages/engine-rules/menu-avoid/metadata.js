// Generated metadata for menu-avoid
// This file is auto-generated from index.ts to avoid module resolution issues

export const MenuAvoid = {
  id: "menu-avoid",
  title: `Avoid using role="menu" for web navigation links`,
  description: `In most cases, using role=menu on navigation elements within a web page can negatively impact screen reader users, especially those using JAWS. The attribute should be used for menu types that function like those found in desktop applications.`,
  advice: `Remove role="menu" from the failing element.`,
  impact: "serious",
  refs: [
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/menus/structure/" },
    { type: "W3C", link: "https://www.w3.org/WAI/tutorials/menus/application-menus/" },
    { type: "W3C", link: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/" },
    { type: "Non-Standard", link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role" }
  ]
};
