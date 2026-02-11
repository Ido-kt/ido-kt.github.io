import { RadioDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RadioDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a radio button has discernible text", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div tabindex="0" role="radio" aria-checked="false" style="display: inline-block">
        <input class="substituted" type="radio" aria-hidden="true" />
        <span>Option 1</span>
      </div>
    `;

    const radio = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await RadioDiscernible.validate(validateMethodArguments);
    expect(response.passedNodes).toContain(radio);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when a radio button has no discernible text", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div tabindex="0" role="radio" aria-checked="false" style="display: inline-block">
        <input class="substituted" type="radio" aria-hidden="true" />
        <span></span>
      </div>
    `;

    const radio = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await RadioDiscernible.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(radio);
    expect(response.passedNodes).toHaveLength(0);
  });
});
