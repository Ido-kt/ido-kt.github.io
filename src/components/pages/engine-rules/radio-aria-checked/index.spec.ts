import { RadioAriaChecked } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RadioAriaChecked Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a custom radio button has aria-checked attribute", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div tabindex="0" role="radio" aria-checked="false">
              <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
              <label class="pointer" for="example-1">radio</label>
          </div>
    `;
    const radio = document.querySelector("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);

    await RadioAriaChecked.validate(validateMethodArguments);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(radio);
  });

  it("should fail when a custom radio button has no aria-checked attribute", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div tabindex="0" role="radio" aria-checked="false">
              <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
              <label class="pointer" for="example-1">radio</label>
          </div>
    `;
    const radio = document.querySelector("div");

    radio.removeAttribute("aria-checked");
    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);

    await RadioAriaChecked.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(radio);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when a radio button is an input", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div>
              <input id="radio-1" class="substituted" type="radio"/>
              <label class="pointer" for="radio-1">radio</label>
          </div>
    `;
    const radio = document.querySelector("input");

    jest.spyOn(classifier, "getMatched").mockReturnValue([radio]);

    await RadioAriaChecked.validate(validateMethodArguments);
    expect(response.passedNodes).toContain(radio);
    expect(response.failedNodes).toHaveLength(0);
  });
});
