import { ToggleButtonMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ToggleButtonMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when toggle button is compliant", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await ToggleButtonMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have failed nodes when toggle button is not compliant", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await ToggleButtonMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toContain(element);
  });
});
