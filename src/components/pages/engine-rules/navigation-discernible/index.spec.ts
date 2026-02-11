import { NavigationDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NavigationDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed elements if a nav element has a proper aria-label", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "main menu";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have a failed element if the nav element doesn't have aria-label", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes[0]).toEqual(nav);
  });

  it("should have passed elements if the nav is discernible", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "main menu";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes[0]).toEqual(nav);
  });
});
