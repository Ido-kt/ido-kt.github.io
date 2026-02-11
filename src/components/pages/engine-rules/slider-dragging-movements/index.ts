import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentSlider, PerceivableComponentInput } from "@acsbe/core-engine-classifier";

export const SliderDraggingMovements: Rule = {
  id: "slider-dragging-movements",
  metadata: {
    category: "Dragging Alternative",
    profile: "Motor Impaired",
    wcagVersion: "2.2",
    wcagLevel: "AA",
  },
  impact: "serious",
  title: "Sliders requiring dragging movements must offer alternative single-pointer operation methods",
  description:
    "Sliders that require dragging movements should also provide alternative ways to set their value, such as an option to tap or click anywhere on the track to set the value or an adjacent input field. This ensures users can operate the slider without relying solely on dragging. The rule checks whether there are input fields adjacent to the slider, and does not verify whether the slider itself supports tapping or clicking to set its value.",
  advice: "Make sure the slider can be operated with a single pointer, or provide an input field that allows users to set the value directly. For example, a slider should allow users to tap or click anywhere on the track to set the value, or offer a numeric/text input beside the slider for direct value entry.",
  refs: [
    {
      type: "WCAG",
      id: "2.5.7",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html",
    },
  ],
  associatedDetectors: [PerceivableComponentSlider, PerceivableComponentInput],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    // We are checking in this role if there are input elements in the grand parent of the slider, we are not checking if the slider itself supports tap or click to set value
    const sliders = classifier.getMatched([PerceivableComponentSlider]);

    for (const slider of sliders) {
      const sliderGrandParent = slider.parentElement?.parentElement || slider.parentElement || slider;
      if (classifier.getMatched([PerceivableComponentInput], sliderGrandParent).length > 1) {
        response.passedNodes.push(slider);
      } else {
        // No input found in the grand parent of the slider
        response.failedNodes.push(slider);
      }
    }
  },
};
