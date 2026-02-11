import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentMainContent, PerceivableComponentMainContent } from "@acsbe/core-engine-classifier";

export const RegionMainContentMisuse: Rule = {
  id: "region-main-content-misuse",
  metadata: {
    category: "Landmarks",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "An element without main content is tagged as a main landmark",
  description: "Incorrectly tagging the main landmark may cause screen reader users to misunderstand where the primary content begins or ends, leading to confusion and inefficient navigation.",
  advice: 'If the failing element is a custom main landmark, remove role="main". If the failing element is coded using a HTML <main> tag, change the tag to a <div> or an element with a suitable role.',
  associatedDetectors: [PerceivableComponentMainContent, CompliantComponentMainContent],
  refs: [
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role",
    },
    {
      type: "WAI",
      link: "https://www.digitala11y.com/main-role/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const mainLandmarks = classifier.getMatched([CompliantComponentMainContent]);

    for (const mainLandmark of mainLandmarks) {
      if (await classifier.assert(mainLandmark, PerceivableComponentMainContent)) {
        response.passedNodes.push(mainLandmark);
      } else {
        response.failedNodes.push(mainLandmark);
      }
    }
  },
};
