import { CompliantTraitVisible } from "@acsbe/core-engine-classifier";
import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const ColorContrast: Rule = {
  id: "color-contrast",
  metadata: {
    category: "Graphics",
    profile: "Vision Impaired",
    wcagVersion: "2.1",
    wcagLevel: "AA",
  },
  impact: "serious",
  title: "The color contrast ratio between text and its background should provide a readable experience",
  description:
    "The color contrast between foreground text and its background must be at lease at least 4.5:1 for normal text. Large-scale text, equal to or greater than 24px font size, or bold text that is equal to or greater than 18px, may meet a lower ratio of 3:1. However, it is recommended to meet the ratio 4.5:1 in all cases for readability.",
  advice: "Work with the website's designers to choose colors that properly meet the minimum contrast ratio requirements. To check color contrast with different potential colors, use Webaim's contrast checker at https://webaim.org/resources/contrastchecker",
  associatedDetectors: [CompliantTraitVisible],
  refs: [
    {
      type: "WCAG",
      id: "1.4.3",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=144%2C1412%2C211%2C143#contrast-minimum",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/GL/wiki/Relative_luminance",
    },
    {
      type: "Non-Standard",
      link: "https://dequeuniversity.com/rules/axe/4.7/color-contrast",
    },
    {
      type: "ACT",
      ruleId: "afw4f7",
      link: "https://act-rules.github.io/rules/afw4f7",
    },
    {
      type: "ACT",
      ruleId: "09o5cg",
      link: "https://act-rules.github.io/rules/09o5cg",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ classifier, response }) {
    const elements = classifier.getMatched([CompliantTraitVisible]);

    for (const element of elements) {
      const {
        contentInfo: { visibleText, directText },
        colorInfo,
        typographyInfo,
      } = classifier.getOperations(element);

      if (!visibleText || !directText) continue;

      const { colorContrastRatio } = colorInfo;
      const { fontSize } = typographyInfo;

      // WCAG recommendation for color contrast.
      // There are two different ratios, one for large text and the other for standard text.
      if (fontSize > 18) {
        // 3.1 comes from the WCAG recommendation for large text (the recommended ratio is 3:1 for large text)
        const isRatioValid = colorContrastRatio >= 3.1;
        if (!isRatioValid) {
          response.failedNodes.push(element);
          continue;
        }
      } else {
        // 4.5 comes from the WCAG recommendation for standard text (the recommended ratio is 4.5:1 for standard text)
        const isRatioValid = colorContrastRatio >= 4.5;
        if (!isRatioValid) {
          response.failedNodes.push(element);
          continue;
        }
      }
      response.passedNodes.push(element);
    }
  },
};
