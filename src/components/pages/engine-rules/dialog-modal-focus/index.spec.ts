import { DialogModalFocus } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("DialogModalFocus Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a popup is focused when opened", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const element = document.createElement("div");
    document.body.appendChild(element);

    jest.spyOn(document, "activeElement", "get").mockReturnValue(element);
    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);

    await DialogModalFocus.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(element);
  });

  it("should pass when detecting nested popups and one of them has focus", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const outerPopup = document.createElement("div");
    const innerPopup = document.createElement("div");
    outerPopup.appendChild(innerPopup);
    document.body.appendChild(outerPopup);

    jest.spyOn(document, "activeElement", "get").mockReturnValue(innerPopup);
    jest.spyOn(classifier, "getMatched").mockReturnValue([outerPopup, innerPopup]);

    await DialogModalFocus.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(outerPopup);
  });

  it("should fail when a popup is not focused when opened", async () => {
    const { response, classifier } = validateMethodArguments;

    const element = document.createElement("div");
    document.body.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);

    await DialogModalFocus.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(element);
  });
});
