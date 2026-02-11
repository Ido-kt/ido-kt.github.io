import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { CompliantComponentFigure, PerceivableTraitDiscernibleText } from "@acsbe/core-engine-classifier";

export const FigureDiscernible: Rule = {
  id: "figure-discernible",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "General Guidelines",
    wcagLevel: "N/A",
  },
  impact: "minor",
  title: "Figure elements should receive text description or lose figure role",
  description: "Figure elements are often incorrectly used to display images on the screen. Incorrectly using the figure tag, without providing a proper figcaption, adds unnecessary clutter to the screen reader user's experience.",
  advice:
    "Standard images should be coded regularly without having a figure parent element. The figure tag should only be used for images you wish to provide additional visual descriptions for, like the date and time a photo was taken or other metadata. To make a figure tag non-cluttering for screen-readers, add the role=presentation attribute to replace it with another element like DIV. Alternatively, if you did intend to use the figure tag, make sure to add a figcaption tag with the additional metadata",
  associatedDetectors: [CompliantComponentFigure, PerceivableTraitDiscernibleText],
  refs: [
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role",
    },
    {
      type: "Non-Standard",
      link: "https://www.tpgi.com/html5-accessibility-chops-the-figure-and-figcaption-elements/",
    },
    {
      type: "W3C",
      link: "https://www.w3.org/TR/2011/WD-html5-author-20110809/the-figure-element.html",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const figures = classifier.getMatched([CompliantComponentFigure]);

    for (const figure of figures) {
      const isDiscernible = classifier.assert(figure, PerceivableTraitDiscernibleText);
      const hasDiscernible = classifier.getMatched([PerceivableTraitDiscernibleText], figure);

      if (isDiscernible || hasDiscernible.length) {
        response.passedNodes.push(figure);
      } else {
        response.failedNodes.push(figure);
      }
    }
  },
};
