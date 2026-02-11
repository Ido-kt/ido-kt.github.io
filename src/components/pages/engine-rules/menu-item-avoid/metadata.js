// Generated metadata for menu-item-avoid
// This file is auto-generated from index.ts to avoid module resolution issues

export const MenuItemAvoid = {
  id: "menu-item-avoid",
  title: `Avoid using role="menuitem" for web navigation links`,
  description: `In most cases, using ARIA menu roles within a web page can negatively impact screen reader users, especially those using JAWS. role="menuitem" should be used for menu items in menu types that function like those found in desktop applications.`,
  advice: `Use standard lists with links and buttons (or custom buttons with role="button") and remove role="menuitem".`,
  impact: "serious",
  refs: [
    { type: "WAI", link: "https://www.w3.org/WAI/tutorials/menus/structure/" },
    { type: "Non-Standard", link: "https://www.boia.org/blog/avoiding-common-mistakes-with-arias-menu-role" },
    { type: "Non-Standard", link: "https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html" }
  ]
};
