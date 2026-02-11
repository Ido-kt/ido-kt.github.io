import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentButton, CompliantComponentLink, PerceivableTraitDiscernibleText, PerceivableTraitVisible, CompliantTraitExposed } from "@acsbe/core-engine-classifier";

export const SVGDiscernible: Rule = {
  id: "svg-discernible",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "SVG discernible",
  description: "All SVGs that are not used in the context of button icons must have discernible text.",
  advice: "Add a text alternative to the SVG.",
  associatedDetectors: [PerceivableTraitDiscernibleText, CompliantComponentButton, CompliantComponentLink, CompliantTraitExposed],
  refs: [
    {
      type: "WCAG",
      id: "1.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG22/quickref/?versions=2.0#non-text-content",
    },
    {
      type: "WAI",
      link: "https://design-system.w3.org/styles/svg-icons.html#svg-accessibility",
    },
    {
      type: "ACT",
      ruleId: "7d6734",
      link: "https://act-rules.github.io/rules/7d6734",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response, document }) {
    //TODO: make everything receive SVGElements
    const svgs = document.querySelectorAll<SVGSVGElement>("svg") as unknown as HTMLElement[];

    for (const svg of svgs) {
      const isExposed = classifier.assert(svg, CompliantTraitExposed);
      const isPerceivableTraitVisible = classifier.assert(svg, PerceivableTraitVisible);
      const isCompliantTraitDiscernibleText = classifier.assert(svg, PerceivableTraitDiscernibleText);

      if (!isPerceivableTraitVisible) {
        continue;
      }

      /**
       * If the SVG is a child of a button or link, it's likely an icon and doesn't need discernible text.
       * Button/link discernible text is validated in the button/link discernible rules.
       */
      if (classifier.getParent(svg, CompliantComponentLink) || classifier.getParent(svg, CompliantComponentButton)) {
        continue;
      }

      if (isCompliantTraitDiscernibleText || !isExposed) {
        response.passedNodes.push(svg);
      } else {
        response.failedNodes.push(svg);
      }
    }
  },
};
