import { NavigationRedundantDiscernibleText } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NavigationRedundantDiscernibleText Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed elements if a nav element doesn't have any discernible text", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have no failed elements if a nav element has a proper aria-label without the word 'navigation'", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "main menu";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have a failed element if the nav element has aria-label with the word 'navigation' in it", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "main navigation";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes[0]).toEqual(nav);
  });

  it("should have passed elements if the nav element has aria-label with the word 'navigation' in it", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "main navigation";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
  });

  it("should not have passed nodes and not have failed nodes if the navigation element is not discernible", async () => {
    const { classifier, response } = validateMethodArguments;
    const relatedText = "";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", relatedText);
    (classifier.getMatched as jest.Mock).mockReturnValue([nav]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { relatedText },
    });

    await NavigationRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });
});
