import { CompliantTraitExposed, PerceivableComponentIcon, PerceivableTraitDiscernibleText } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const IconDiscernible: Rule = {
  id: "icon-discernible",
  metadata: {
    category: "Forms",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "moderate",
  title: "Icons should be labeled or excluded from assistive technology",
  description: "Icons used as decorative or complementary elements, like icons or illustrations that do not provide additional information, will often add unnecessary clutter to a screen reader user's browsing experience.",
  advice: `If the icon provides additional context or necessary information, provide an aria-label or a screen-reader-only text describing the functionality. If the element is used for decorative or complementary purposes, exclude it from assistive technology using role=presentation.`,
  associatedDetectors: [CompliantTraitExposed, PerceivableComponentIcon, PerceivableTraitDiscernibleText],
  refs: [
    {
      type: "WCAG",
      id: "1.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    },
    {
      type: "ACT",
      ruleId: "46ca7f",
      link: "https://act-rules.github.io/rules/46ca7f",
    },
    {
      type: "ACT",
      ruleId: "e88epe",
      link: "https://act-rules.github.io/rules/e88epe",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const icons = classifier.getMatched([PerceivableComponentIcon]);

    for (const icon of icons) {
      const isCompliantVisible = classifier.assert(icon, CompliantTraitExposed);
      const hasDiscernibleText = classifier.assert(icon, PerceivableTraitDiscernibleText);

      if (!isCompliantVisible || hasDiscernibleText) {
        response.passedNodes.push(icon);
      } else {
        response.failedNodes.push(icon);
      }
    }
  },
};
