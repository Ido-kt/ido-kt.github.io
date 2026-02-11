import { CompliantComponentMenuItem } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const MenuItemAvoid: Rule = {
  id: "menu-item-avoid",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: 'Avoid using role="menuitem" for web navigation links',
  description: 'In most cases, using ARIA menu roles within a web page can negatively impact screen reader users, especially those using JAWS. role="menuitem" should be used for menu items in menu types that function like those found in desktop applications.',
  advice: 'Use standard lists with links and buttons (or custom buttons with role="button") and remove role="menuitem".',
  associatedDetectors: [CompliantComponentMenuItem],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/tutorials/menus/structure/",
    },
    {
      type: "Non-Standard",
      link: "https://www.boia.org/blog/avoiding-common-mistakes-with-arias-menu-role",
    },
    {
      type: "Non-Standard",
      link: "https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    response.failedNodes = classifier.getMatched([CompliantComponentMenuItem]);
  },
};
