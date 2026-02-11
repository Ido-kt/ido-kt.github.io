import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentNavigation, PerceivableComponentBreadcrumb } from "@acsbe/core-engine-classifier";
export const BreadcrumbsNav: Rule = {
  id: "breadcrumbs-in-nav",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Breadcrumbs navigation should be tagged properly",
  description: "Breadcrumb navigation regions are essential for user orientation. If not appropriately tagged, screen reader users will not know that such an option exists on the page and will face more difficulties browsing around.",
  advice: "Add a role=navigation or code the breadcrumbs using the HTML NAV tag. This will indicate to screen readers that it is a navigation region. Lastly, add an aria-label=Breadcrumbs attribute so screen readers can announce that to users.",
  associatedDetectors: [CompliantComponentNavigation, PerceivableComponentBreadcrumb],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/",
    },
    {
      type: "Non-Standard",
      link: "https://www.aditus.io/patterns/breadcrumbs/",
    },
    {
      type: "Non-Standard",
      link: "https://www.magentaa11y.com/checklist-web/breadcrumbs/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const breadcrumbs = classifier.getMatched([PerceivableComponentBreadcrumb]);

    for (const breadcrumb of breadcrumbs) {
      const isNav = classifier.assert(breadcrumb, CompliantComponentNavigation);
      const navParent = classifier.getParent(breadcrumb, CompliantComponentNavigation);
      if (!isNav && !navParent) {
        response.failedNodes.push(breadcrumb);
      } else {
        response.passedNodes.push(breadcrumb);
      }
    }
  },
};
