import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantTraitVisible } from "@acsbe/core-engine-classifier";

export const NoExtraInformationInTitle: Rule = {
  id: "no-extra-information-in-title",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "minor",
  title: "The title attribute should not be the only method used of providing information",
  description: "The title attribute is announced inconsistently across screen readers and browsers, making it unreliable for labeling interactive controls. Because many users may never hear the content, reliance on the attribute risks loss of information. Instead, it should be used to provide extra help text in addition to a valid label.",
  advice: "Make sure that the title attribute is not the only means of providing a label by assigning an aria-label or aria-labelledby attribute to the interactive control.",
  associatedDetectors: [CompliantTraitVisible],
  refs: [
    {
      type: "Non-Standard",
      link: "https://www.a11yproject.com/posts/title-attributes/",
    },
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/html5-accessibility-chops-title-attribute-use-and-abuse/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, document, classifier }) {
    const elements = document.querySelectorAll<HTMLElement>("[title]");

    for (const element of elements) {
      if (!classifier.assert(element, CompliantTraitVisible)) {
        response.inapplicableNodes.push(element);
        continue;
      }
      const title = element.getAttribute("title").trim();

      const {
        contentInfo: { accessibleName },
      } = classifier.getOperations(element);

      const titleInSrVisibleText = accessibleName.includes(title);

      if (titleInSrVisibleText) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
