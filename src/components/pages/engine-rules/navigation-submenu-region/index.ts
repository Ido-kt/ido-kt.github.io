import { CompliantComponentNavigation, PerceivableComponentSubmenu } from "@acsbe/core-engine-classifier";
import type { Rule } from "../interfaces";
import { PassCondition } from "../interfaces";

export const NavigationSubmenuRegion: Rule = {
  id: "navigation-submenu-region",
  metadata: {
    category: "ARIA",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Tagging submenus is recommended",
  description: 'Complex menu structures often contain multiple groups of links that can feel like undifferentiated page content to screen reader users. Assigning role="region" with a label makes each submenu a distinct, named section, clarifying its relationship to the trigger and improving orientation.',
  advice: 'Assign role="region" to each menu panel so screen reader users can distinguish submenus from surrounding page content. Adding a label (e.g., with aria-labelledby) helps users quickly identify each panel within a complex menu structure.',
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
        if (submenu.getAttribute("role") === "region") {
          response.passedNodes.push(submenu);
          continue;
        }

        response.failedNodes.push(submenu);
      }
    }
  },
};
