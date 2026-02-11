import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentNoUiSlider } from "@acsbe/core-engine-classifier";

interface NoUiSliderOptions {
  behaviour?: string;
}

interface NoUiSliderAPI {
  options: NoUiSliderOptions;
}

interface NoUiSliderElement extends HTMLElement {
  noUiSlider?: NoUiSliderAPI;
}

export const NoUiSliderSinglePointer: Rule = {
  id: "no-ui-slider-single-pointer",
  metadata: {
    category: "Dragging Alternative",
    profile: "Motor Impaired",
    wcagVersion: "2.2",
    wcagLevel: "AA",
  },
  impact: "serious",
  title: "A slider should be operated with a single pointer",
  description: "A slider should be operable with a single pointer",
  advice: "Ensure that the slider can be operated with a single pointer. For example by using the `behaviour: 'tap'` option in noUiSlider or using input alternative to operate the same function",
  associatedDetectors: [PerceivableComponentNoUiSlider],
  refs: [
    {
      type: "WCAG",
      id: "2.5.7",
      level: "AA",
      link: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html",
    },
    {
      type: "Non-Standard",
      link: "https://refreshless.com/nouislider/behaviour-option/",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const sliders = classifier.getMatched([PerceivableComponentNoUiSlider]);
    const validBehaviours = new Set(["tap", "snap", "hover-snap", "unconstrained-tap"]);

    for (const slider of sliders) {
      const sliderElement = slider as NoUiSliderElement;
      const noUiSliderAPI = sliderElement.noUiSlider;
      if (noUiSliderAPI) {
        // if the noUiSlider API is exposed
        const behaviour = noUiSliderAPI.options?.behaviour;
        if (behaviour === undefined || validBehaviours.has(behaviour)) {
          // The 'tap' behaviour is the default behavior. If no behaviour is defined, the behavior is undefined and it is treated as 'tap'
          response.passedNodes.push(sliderElement);
        } else {
          response.failedNodes.push(sliderElement);
        }
      }
    }
  },
};
