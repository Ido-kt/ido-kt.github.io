import { IconDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("IconDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass when an icon has role presentation", async () => {
    const { document, classifier, response } = validateMethodArguments;

    const element = document.createElement("div");
    element.setAttribute("role", "presentation");
    document.body.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    await IconDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(element);
  });

  it("should pass when an icon has aria-label", async () => {
    const { document, classifier, response } = validateMethodArguments;

    const element = document.createElement("div");
    document.body.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    await IconDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(element);
  });

  it("should fail when an icon is visible, has no role=presentation, and no dicernible text", async () => {
    const { document, classifier, response } = validateMethodArguments;

    const element = document.createElement("div");
    document.body.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    await IconDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(element);
  });
});
