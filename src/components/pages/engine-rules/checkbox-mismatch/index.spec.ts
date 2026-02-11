import { CheckboxMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CheckboxMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a custom checkbox has role=checkbox", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div id="custom-checkbox" class="checkbox-wrapper-1" role="checkbox">
              <input id="example-1" class="substituted" type="checkbox" aria-hidden="true" />
              <label class="pointer" for="example-1">Checkbox</label>
          </div>
    `;
    const checkbox = document.getElementById("custom-checkbox");

    jest.spyOn(classifier, "getMatched").mockReturnValue([checkbox]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await CheckboxMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(checkbox);
  });

  it("should fail when a custom checkbox has no role=checkbox", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div id="custom-checkbox" class="checkbox-wrapper-1">
              <input id="example-1" class="substituted" type="checkbox" aria-hidden="true" />
              <label class="pointer" for="example-1">Checkbox</label>
          </div>
    `;
    const checkbox = document.getElementById("custom-checkbox");

    jest.spyOn(classifier, "getMatched").mockReturnValue([checkbox]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await CheckboxMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(checkbox);
    expect(response.passedNodes).toHaveLength(0);
  });
});
