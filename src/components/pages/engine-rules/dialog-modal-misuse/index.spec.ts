import { DialogModalMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("DialogModalMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("any dialog should pass", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const dialog = document.createElement("dialog");
    jest.spyOn(classifier, "getMatched").mockReturnValue([dialog]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await DialogModalMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(dialog);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("div with role=dialog and aria-modal true that is not a modal should fail", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const div = document.createElement("div");
    div.setAttribute("aria-modal", "true");
    div.setAttribute("role", "dialog");
    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await DialogModalMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(div);
    expect(response.passedNodes).toHaveLength(0);
  });
});
