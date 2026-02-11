import { NoUiSliderSinglePointer } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NoUiSliderSinglePointer Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass if the slider has undefined behavior (default tap behavior)", async () => {
    const { response, classifier } = validateMethodArguments;
    const slider = document.createElement("div");
    slider.className = "noUi-target";

    Object.defineProperty(slider, "noUiSlider", {
      value: {
        options: {},
      },
      writable: true,
    });

    (classifier.getMatched as jest.Mock).mockReturnValue([slider]);

    await NoUiSliderSinglePointer.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(slider);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass if the slider has 'tap' behavior", async () => {
    const { response, classifier } = validateMethodArguments;
    const slider = document.createElement("div");
    slider.className = "noUi-target";

    Object.defineProperty(slider, "noUiSlider", {
      value: {
        options: { behaviour: "tap" },
      },
      writable: true,
    });

    (classifier.getMatched as jest.Mock).mockReturnValue([slider]);

    await NoUiSliderSinglePointer.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(slider);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass if the slider has 'snap' behavior", async () => {
    const { response, classifier } = validateMethodArguments;
    const slider = document.createElement("div");
    slider.className = "noUi-target";

    Object.defineProperty(slider, "noUiSlider", {
      value: {
        options: { behaviour: "snap" },
      },
      writable: true,
    });

    (classifier.getMatched as jest.Mock).mockReturnValue([slider]);

    await NoUiSliderSinglePointer.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(slider);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail if the slider has invalid behavior (e.g., 'drag')", async () => {
    const { response, classifier } = validateMethodArguments;
    const slider = document.createElement("div");
    slider.className = "noUi-target";

    Object.defineProperty(slider, "noUiSlider", {
      value: {
        options: { behaviour: "drag" },
      },
      writable: true,
    });

    (classifier.getMatched as jest.Mock).mockReturnValue([slider]);

    await NoUiSliderSinglePointer.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(slider);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should handle multiple sliders correctly", async () => {
    const { response, classifier } = validateMethodArguments;

    const validSlider = document.createElement("div");
    validSlider.className = "noUi-target";
    Object.defineProperty(validSlider, "noUiSlider", {
      value: {
        options: { behaviour: "tap" },
      },
      writable: true,
    });

    const invalidSlider = document.createElement("div");
    invalidSlider.className = "noUi-target";
    Object.defineProperty(invalidSlider, "noUiSlider", {
      value: {
        options: { behaviour: "drag" },
      },
      writable: true,
    });

    (classifier.getMatched as jest.Mock).mockReturnValue([validSlider, invalidSlider]);

    await NoUiSliderSinglePointer.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(validSlider);
    expect(response.failedNodes).toContain(invalidSlider);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.failedNodes).toHaveLength(1);
  });

  it("should handle slider without noUiSlider API", async () => {
    const { response, classifier } = validateMethodArguments;
    const slider = document.createElement("div");
    slider.className = "noUi-target";

    (classifier.getMatched as jest.Mock).mockReturnValue([slider]);

    await NoUiSliderSinglePointer.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should handle when no sliders are found", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await NoUiSliderSinglePointer.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });
});
