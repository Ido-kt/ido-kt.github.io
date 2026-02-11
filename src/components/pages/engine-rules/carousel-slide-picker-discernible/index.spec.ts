import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { CarouselSlidePickerDiscernible } from ".";

describe("CarouselSlidePickerDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed elements when the carousel pagination control buttons have correct content", async () => {
    const { document, response, classifier } = validateMethodArguments;
    const controls = document.createElement("button");
    controls.classList.add("pagination");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([controls]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await CarouselSlidePickerDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed elements when the carousel does not have pagination buttons", async () => {
    const { document, response, classifier } = validateMethodArguments;
    const controls = document.createElement("button");
    controls.classList.add("pagination");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([controls]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await CarouselSlidePickerDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have a failed element when the carousel control buttons have no content", async () => {
    const { document, response, classifier } = validateMethodArguments;
    const controls = document.createElement("button");
    controls.classList.add("pagination");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([controls]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);

    await CarouselSlidePickerDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(controls);
  });
  it("should have a passed element when the carousel control buttons have correct content", async () => {
    const { document, response, classifier } = validateMethodArguments;
    const controls = document.createElement("button");
    controls.classList.add("pagination");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([controls]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await CarouselSlidePickerDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0]).toBe(controls);
  });
});
