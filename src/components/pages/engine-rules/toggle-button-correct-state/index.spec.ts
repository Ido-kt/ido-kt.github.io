import { ToggleButtonCorrectState } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ToggleButtonCorrectState Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when aria-pressed matches expected value", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("button");
    element.setAttribute("aria-pressed", "true");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.getContextData as jest.Mock).mockReturnValue({ elementStore: new Map([[element, "true"]]) });

    await ToggleButtonCorrectState.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(element);
  });

  it("should have failed nodes when aria-pressed does not match expected value", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("button");
    element.setAttribute("aria-pressed", "false");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.getContextData as jest.Mock).mockReturnValue({ elementStore: new Map([[element, "true"]]) });

    await ToggleButtonCorrectState.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toContain(element);
  });
});
