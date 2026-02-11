import { CheckboxDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CheckboxDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a custom checkbox has discernible text", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div class="checkbox-wrapper-1" tabindex="0" role="checkbox" aria-checked="false" style="display: inline-block">
        <input class="substituted" type="checkbox" aria-hidden="true" />
        <span>I agree to the terms</span>
      </div>
    `;

    const checkbox = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([checkbox]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await CheckboxDiscernible.validate(validateMethodArguments);
    expect(response.passedNodes).toContain(checkbox);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when a custom checkbox has no discernible text", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div class="checkbox-wrapper-1" tabindex="0" role="checkbox" aria-checked="false" style="display: inline-block">
        <input class="substituted" type="checkbox" aria-hidden="true" />
        <span></span>
      </div>
      <b class="pointer">I agree to the terms</b>
    `;

    const checkbox = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([checkbox]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await CheckboxDiscernible.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(checkbox);
    expect(response.passedNodes).toHaveLength(0);
  });
});
