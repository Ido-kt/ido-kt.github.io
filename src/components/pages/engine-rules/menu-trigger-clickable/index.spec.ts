import { MenuTriggerClickable } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MenuTriggerClickable Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    document.body.innerHTML = "";
  });

  it("should have no nodes in failed or passed, when no menu trigger is present", async () => {
    const { response, classifier } = validateMethodArguments;

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await MenuTriggerClickable.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });

  it("should have nodes in passed and not in failed, when menu trigger is asserted as button", async () => {
    const { response, classifier } = validateMethodArguments;

    const element = document.createElement("button");
    document.body.appendChild(element);

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([element]);
    // Assert as Button
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await MenuTriggerClickable.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toEqual([element]);
  });

  it("should have nodes in passed and not in failed, when menu trigger is asserted as link", async () => {
    const { response, classifier } = validateMethodArguments;

    const element = document.createElement("a");
    document.body.appendChild(element);

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([element]);
    // Assert as Button
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);
    // Assert as Link
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await MenuTriggerClickable.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toEqual([element]);
  });

  it("should have nodes in failed and not in passed, when menu trigger is not asserted as button", async () => {
    const { response, classifier } = validateMethodArguments;

    const element = document.createElement("button");
    document.body.appendChild(element);

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([element]);
    // Assert as Button
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);

    await MenuTriggerClickable.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toEqual([element]);
  });
});
