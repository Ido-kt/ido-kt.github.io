import { FocusNoticeable } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("FocusNoticeable Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);
  });

  it("should pass when there are no focusable elements", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await FocusNoticeable.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when an element has focus related style", async () => {
    const { response, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      stateStyleInfo: { focusStyle: { outline: "rgb(255, 0, 0) none 1px" } },
    });
    await FocusNoticeable.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0]).toBe(element);
  });

  it("should fail when an element doesn't have a focus related style", async () => {
    const { response, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      stateStyleInfo: { focusStyle: {} },
    });

    await FocusNoticeable.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(element);
  });

  it("should call cleanup function provided by getStateStyleInfo", async () => {
    const { classifier } = validateMethodArguments;
    const element = document.createElement("div");
    const cleanup = jest.fn();
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      stateStyleInfo: { focusStyle: {}, cleanup },
    });

    await FocusNoticeable.validate(validateMethodArguments);

    expect(cleanup).toHaveBeenCalledTimes(1);
  });
});
