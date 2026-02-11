import { CompliantComponentMenubar } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const MenuBarAvoid: Rule = {
  id: "menu-bar-avoid",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: 'Avoid using role="menubar" for web navigation links',
  description: "In most cases, using role=menubar on navigation elements within a web page can negatively impact screen reader users, especially those using JAWS. The attribute should be used for menu types that function like those found in desktop applications.",
  advice: 'Remove role="menu" from the failing element.',
  associatedDetectors: [CompliantComponentMenubar],
  refs: [
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/menus/structure/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/tutorials/menus/application-menus/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/menubar/",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,

  async validate({ response, classifier }) {
    response.failedNodes = classifier.getMatched([CompliantComponentMenubar]);
  },
};
