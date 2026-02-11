import { CheckboxAriaChecked } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CheckboxAriaChecked Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a custom checkbox has aria-checked attribute", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div id="custom-checkbox" class="checkbox-wrapper-1" tabindex="0" role="checkbox" aria-checked="false">
              <input id="example-1" class="substituted" type="checkbox" aria-hidden="true" />
              <label class="pointer" for="example-1">Checkbox</label>
          </div>
    `;
    const checkbox = document.getElementById("custom-checkbox");

    jest.spyOn(classifier, "getMatched").mockReturnValue([checkbox]);

    await CheckboxAriaChecked.validate(validateMethodArguments);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(checkbox);
  });

  it("should fail when a custom checkbox has no aria-checked attribute", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div id="custom-checkbox" class="checkbox-wrapper-1" tabindex="0" role="checkbox" aria-checked="false">
              <input id="example-1" class="substituted" type="checkbox" aria-hidden="true" />
              <label class="pointer" for="example-1">Checkbox</label>
          </div>
    `;
    const checkbox = document.getElementById("custom-checkbox");

    checkbox.removeAttribute("aria-checked");
    jest.spyOn(classifier, "getMatched").mockReturnValue([checkbox]);

    await CheckboxAriaChecked.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(checkbox);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when a checkbox is an input", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div class="checkbox-wrapper-1">
              <input id="checkbox-1" class="substituted" type="checkbox"/>
              <label class="pointer" for="checkbox-1">Checkbox</label>
          </div>
    `;
    const checkbox = document.getElementById("checkbox-1");

    jest.spyOn(classifier, "getMatched").mockReturnValue([checkbox]);

    await CheckboxAriaChecked.validate(validateMethodArguments);
    expect(response.passedNodes).toContain(checkbox);
    expect(response.failedNodes).toHaveLength(0);
  });
});
