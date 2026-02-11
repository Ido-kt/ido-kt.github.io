// Generated metadata for slider-dragging-movements
// This file is auto-generated from index.ts to avoid module resolution issues

export const SliderDraggingMovements = {
  id: "slider-dragging-movements",
  title: `Sliders requiring dragging movements must offer alternative single-pointer operation methods`,
  description: `Sliders that require dragging movements should also provide alternative ways to set their value, such as an option to tap or click anywhere on the track to set the value or an adjacent input field. This ensures users can operate the slider without relying solely on dragging. The rule checks whether there are input fields adjacent to the slider, and does not verify whether the slider itself supports tapping or clicking to set its value.`,
  advice: `Make sure the slider can be operated with a single pointer, or provide an input field that allows users to set the value directly. For example, a slider should allow users to tap or click anywhere on the track to set the value, or offer a numeric/text input beside the slider for direct value entry.`,
  impact: "serious",
  refs: [
    { type: "WCAG", id: "2.5.7", level: "AA", link: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html" }
  ]
};
