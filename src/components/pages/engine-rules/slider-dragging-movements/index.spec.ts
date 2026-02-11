import { SliderDraggingMovements } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SliderDraggingMovements Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when slider has input controls", async () => {
    const { classifier, response } = validateMethodArguments;

    const slider = document.createElement("div");
    const sliderParent = document.createElement("div");
    const sliderGrandParent = document.createElement("div");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    sliderGrandParent.appendChild(sliderParent);
    sliderParent.appendChild(slider);
    sliderGrandParent.appendChild(input1);
    sliderGrandParent.appendChild(input2);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slider]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([input1, input2]);

    await SliderDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(slider);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when slider has input controls (no grandparent)", async () => {
    const { classifier, response } = validateMethodArguments;

    const slider = document.createElement("div");
    const sliderParent = document.createElement("div");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    sliderParent.appendChild(slider);
    sliderParent.appendChild(input1);
    sliderParent.appendChild(input2);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slider]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([input1, input2]);

    await SliderDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(slider);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when slider has input controls (no parent)", async () => {
    const { classifier, response } = validateMethodArguments;

    const slider = document.createElement("div");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    slider.appendChild(input1);
    slider.appendChild(input2);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slider]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([input1, input2]);

    await SliderDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(slider);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when slider has just one input control", async () => {
    const { classifier, response } = validateMethodArguments;

    const slider = document.createElement("div");
    const sliderParent = document.createElement("div");
    const sliderGrandParent = document.createElement("div");
    const input1 = document.createElement("input");

    sliderGrandParent.appendChild(sliderParent);
    sliderParent.appendChild(slider);
    sliderGrandParent.appendChild(input1);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slider]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([input1]);

    await SliderDraggingMovements.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(slider);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should fail when slider doesn't have input controls", async () => {
    const { classifier, response } = validateMethodArguments;

    const slider = document.createElement("div");
    const sliderParent = document.createElement("div");
    const sliderGrandParent = document.createElement("div");

    sliderGrandParent.appendChild(sliderParent);
    sliderParent.appendChild(slider);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slider]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);

    await SliderDraggingMovements.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(slider);
    expect(response.passedNodes).toHaveLength(0);
  });
});
