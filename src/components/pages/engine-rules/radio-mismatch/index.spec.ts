import { RadioMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RadioMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a custom radio button has role=radio", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div role="radio">
              <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
              <label class="pointer" for="example-1">radui</label>
          </div>
    `;
    const radio = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await RadioMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(radio);
  });

  it("should fail when a custom radio has no role=radio", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div>
              <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
              <label class="pointer" for="example-1">option 1</label>
          </div>
    `;
    const radio = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await RadioMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(radio);
    expect(response.passedNodes).toHaveLength(0);
  });
});
