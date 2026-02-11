import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { CarouselNextSlideDiscernible } from ".";

describe("CarouselPreviousSlideDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed element when there are no buttons within a carousel", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await CarouselNextSlideDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed elements when the carousel control buttons have correct content", async () => {
    const { document, response, classifier } = validateMethodArguments;
    const controls = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([controls]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await CarouselNextSlideDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have a failed element when the carousel control buttons don't have content", async () => {
    const { document, response, classifier } = validateMethodArguments;
    const controls = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([controls]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);

    await CarouselNextSlideDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(controls);
  });

  it("should have a passed element when the carousel control buttons have correct content", async () => {
    const { document, response, classifier } = validateMethodArguments;
    const controls = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([controls]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await CarouselNextSlideDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0]).toBe(controls);
  });
});
