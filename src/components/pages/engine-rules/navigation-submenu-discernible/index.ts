import { CompliantComponentNavigation, PerceivableComponentSubmenu } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const NavigationSubmenuDiscernible: Rule = {
  id: "navigation-submenu-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Labeling submenus is recommended",
  description: "Complex menu structures that include nested submenus can unintentionally cause screen reader users to lose orientation. This can be mitigated by applying a unique label to each submenu to provide additional context for assistive technology.",
  advice: "Add an aria-label to each submenu region. Screen readers will announce the label to users when they navigate into the submenu.",
  associatedDetectors: [CompliantComponentNavigation, PerceivableComponentSubmenu],
  refs: [
    {
      type: "WCAG",
      id: "1.3.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const navs = classifier.getMatched([CompliantComponentNavigation]);

    for (const nav of navs) {
      const submenus = classifier.getMatched([PerceivableComponentSubmenu], nav);
      for (const submenu of submenus) {
        const { accessibleName } = classifier.getOperations(submenu).contentInfo;
        if (accessibleName) {
          response.passedNodes.push(submenu);
          continue;
        }

        response.failedNodes.push(submenu);
      }
    }
  },
};
