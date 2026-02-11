import { AriaInvalidMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("AriaInvalidMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = "";
  });

  it("should have no failed nodes when element wan not interacted and has no aria-invalid", async () => {
    const { response, document } = validateMethodArguments;
    document.body.innerHTML = " <input />";

    await AriaInvalidMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have no failed nodes when element wan not interacted and has aria-invalid=false", async () => {
    const { response, document } = validateMethodArguments;
    document.body.innerHTML = " <input aria-invalid='false' />";

    await AriaInvalidMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("Input should fail if was not interacted with and has aria-invalid", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = " <input aria-invalid='true' />";

    const input = document.querySelector("input");

    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    await AriaInvalidMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(input);
  });

  it("Input should pass if it was interacted with and has aria-invalid", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = " <input aria-invalid='true' />";

    const input = document.querySelector("input");

    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    await AriaInvalidMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(input);
    expect(response.failedNodes).toHaveLength(0);
  });
});
