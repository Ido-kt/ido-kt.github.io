import { RadioMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CheckboxMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a custom radio button has role=radio", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div role="radio">
              <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
              <label class="pointer" for="example-1">radio</label>
          </div>
    `;
    const radio = document.querySelector("input");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await RadioMisuse.validate(validateMethodArguments);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(radio);
  });

  it("should fail when a custom radio button has no role=radio", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div>
              <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
              <label class="pointer" for="example-1">radio</label>
          </div>
    `;
    const radio = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await RadioMisuse.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(radio);
    expect(response.passedNodes).toHaveLength(0);
  });
});
