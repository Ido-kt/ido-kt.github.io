import { MainNavigationMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MainNavigationMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass if the main navigation's parent is compliant", async () => {
    const { classifier, response } = validateMethodArguments;

    const mainNav = document.createElement("div");
    const parentNav = document.createElement("nav");
    parentNav.appendChild(mainNav);

    (classifier.getMatched as jest.Mock).mockReturnValue([mainNav]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await MainNavigationMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(parentNav);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail if the main navigation's parent is not compliant", async () => {
    const { classifier, response } = validateMethodArguments;

    const mainNav = document.createElement("div");
    const parentNav = document.createElement("div");
    parentNav.appendChild(mainNav);

    (classifier.getMatched as jest.Mock).mockReturnValue([mainNav]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await MainNavigationMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(parentNav);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should do nothing if no main navigation elements are found", async () => {
    const { classifier, response } = validateMethodArguments;

    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await MainNavigationMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should do nothing if the main navigation has no parent element", async () => {
    const { classifier, response } = validateMethodArguments;

    const mainNav = document.createElement("div");

    (classifier.getMatched as jest.Mock).mockReturnValue([mainNav]);

    await MainNavigationMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });
});
