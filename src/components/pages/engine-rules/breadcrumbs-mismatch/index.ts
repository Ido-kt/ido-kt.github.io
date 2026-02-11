import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentBreadcrumb, PerceivableComponentBreadcrumb } from "@acsbe/core-engine-classifier";
export const BreadcrumbsMismatch: Rule = {
  id: "breadcrumbs-mismatch",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Breadcrumb navigation region should have a label",
  description: 'A breadcrumb region presents a trail of links showing the user’s current page in relation to higher-level pages on a site. Without a label, it may be announced by screen reades simply as "navigation", making it hard to distinguish from other navigation regions on the page.',
  advice: "Add an aria-label=Breadcrumbs attribute so screen readers can announce that to users.",
  associatedDetectors: [CompliantComponentBreadcrumb, PerceivableComponentBreadcrumb],
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
      const isLabeled = classifier.assert(breadcrumb, CompliantComponentBreadcrumb);
      const labeledParent = classifier.getParent(breadcrumb, CompliantComponentBreadcrumb);
      if (isLabeled || labeledParent) {
        response.passedNodes.push(breadcrumb);
      } else {
        response.failedNodes.push(breadcrumb);
      }
    }
  },
};
