import { MainNavigationDiscernible } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MainNavigationDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when all main navigation elements have accessible names", async () => {
    const { response, classifier } = validateMethodArguments;
    const mainNav = document.createElement("nav");
    (classifier.getMatched as jest.Mock).mockReturnValue([mainNav]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      contentInfo: { accessibleName: "Main Menu" },
    });

    await MainNavigationDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(mainNav);
  });

  it("should fail when a main navigation element does not have an accessible name", async () => {
    const { response, classifier } = validateMethodArguments;
    const mainNav = document.createElement("nav");
    (classifier.getMatched as jest.Mock).mockReturnValue([mainNav]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      contentInfo: { accessibleName: "" },
    });

    await MainNavigationDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes).toContain(mainNav);
  });

  it("should handle multiple main navigation elements correctly", async () => {
    const { response, classifier } = validateMethodArguments;
    const mainNav1 = document.createElement("nav");
    const mainNav2 = document.createElement("nav");
    (classifier.getMatched as jest.Mock).mockReturnValue([mainNav1, mainNav2]);
    (classifier.getOperations as jest.Mock).mockImplementation((element) => {
      if (element === mainNav1) {
        return { contentInfo: { accessibleName: "Main Navigation" } };
      } else {
        return { contentInfo: { accessibleName: "" } };
      }
    });

    await MainNavigationDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(mainNav2);
    expect(response.passedNodes).toContain(mainNav1);
  });

  it("should pass when there are no main navigation elements", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await MainNavigationDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });
});
