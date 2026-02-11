import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const TextSpacingParagraphSpacing: Rule = {
  id: "text-spacing-paragraph-spacing",
  metadata: {
    category: "Lists",
    profile: "Vision Impaired",
    wcagVersion: "2.1",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Paragraph spacing should scale to at least 2 times the font size without loss of content or functionality",
  description: "When paragraph spacing is increased to 2 times the font size, text may be clipped or overflow its container if styles like fixed heights, hidden overflow, or absolute positioning prevent proper reflow.",
  advice: "Use flexible heights and widths, position elements in ways that allow text reflow, enable text wrapping, and avoid hidden overflow to make sure content remains readable when paragraph spacing is scaled to 2 times the font size.",
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "1.4.12",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({}) {
    //TODO: We don't have a way to detect Paragraphs yet, will be implemented in the future
  },
};
