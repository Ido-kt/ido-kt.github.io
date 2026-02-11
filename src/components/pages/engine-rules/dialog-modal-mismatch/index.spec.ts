import { DialogModalMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("DialogModalMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("modal with role=dialog and aria-modal=true should pass", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const div = document.createElement("div");
    div.setAttribute("role", "dialog");
    div.setAttribute("aria-modal", "true");
    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await DialogModalMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("dialog [open] element should pass", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const dialog = document.createElement("dialog");
    dialog.setAttribute("open", "");
    jest.spyOn(classifier, "getMatched").mockReturnValue([dialog]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await DialogModalMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("modal without aria-modal=true should fail", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const div = document.createElement("div");
    div.setAttribute("role", "dialog");
    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await DialogModalMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(div);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("modal without role=dialog should fail", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const div = document.createElement("div");
    div.setAttribute("aria-modal", "true");
    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await DialogModalMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(div);
    expect(response.passedNodes).toHaveLength(0);
  });
});
