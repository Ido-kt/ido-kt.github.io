import { FormSubmitButtonMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("FormSubmitButtonMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;
  let assertSpy: jest.Mock;
  let getMatchedSpy: jest.Mock;
  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    assertSpy = validateMethodArguments.classifier.assert as jest.Mock;
    getMatchedSpy = validateMethodArguments.classifier.getMatched as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("should have no failed nodes when a perceivable submit button has type submit", async () => {
    const { response } = validateMethodArguments;
    getMatchedSpy.mockReturnValueOnce([document.createElement("button")]);
    assertSpy.mockReturnValueOnce(true);

    await FormSubmitButtonMismatch.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
  });

  it("should have failed nodes when form has a submit button with type=button", async () => {
    const { response } = validateMethodArguments;
    getMatchedSpy.mockReturnValueOnce([document.createElement("button")]);
    assertSpy.mockReturnValue(false);

    await FormSubmitButtonMismatch.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
  });

  it("shouldn't have failed or passed nodes when there are no submit buttons", async () => {
    const { response } = validateMethodArguments;
    getMatchedSpy.mockReturnValueOnce([]);
    assertSpy.mockReturnValue(false);

    await FormSubmitButtonMismatch.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });
});
