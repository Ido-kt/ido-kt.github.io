import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentArea, PerceivableTraitTabbable } from "@acsbe/core-engine-classifier";

export const MapAreaDiscernible: Rule = {
  id: "map-area-discernible",
  metadata: {
    category: "Graphics",
    profile: "Blind",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "serious",
  title: "Each area element within an image map should have a text alternative",
  description: "Providing a text alternative for each area element inside a map element ensures that the content is announced by screen readers, enabling users to understand and navigate the content.",
  advice: "Provide a text alternative to each <area> element using the alt attribute.",
  associatedDetectors: [CompliantComponentArea, PerceivableTraitTabbable],
  refs: [
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG21/Techniques/html/H24",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/TR/WCAG20-TECHS/H24",
    },
    {
      type: "Non-Standard",
      link: "https://dequeuniversity.com/rules/axe/4.0/area-alt",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/WCAG21/Techniques/failures/F65",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const areas = classifier.getMatched([CompliantComponentArea]);

    for (const area of areas) {
      const { contentInfo } = classifier.getOperations(area);

      if (Boolean(contentInfo.accessibleName || contentInfo.title)) {
        response.passedNodes.push(area);
      } else {
        response.failedNodes.push(area);
      }
    }
  },
};
