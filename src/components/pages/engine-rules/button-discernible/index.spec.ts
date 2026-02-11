import { ButtonDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ButtonDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should pass when buttons have discernible text", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
            <button>Click me</button>
            <div role="button">Press me</div>
        `;

    const buttons = document.querySelectorAll("button, [role=button]");
    jest.spyOn(classifier, "getMatched").mockReturnValue(buttons);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ButtonDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(Array.from(buttons));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when any button does not have discernible text", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
            <button aria-label=""></button>
            <div role="button" aria-hidden="true"></div>
        `;

    const buttons = document.querySelectorAll("button, [role=button]");

    jest.spyOn(classifier, "getMatched").mockReturnValue(buttons);
    jest.spyOn(classifier, "getMatched").mockReturnValue(buttons);
    await ButtonDiscernible.validate(validateMethodArguments);

    // Assert that buttons without discernible text failed validation
    expect(response.failedNodes).toEqual(Array.from(buttons));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should correctly handle the absence of buttons", async () => {
    const { document, classifier } = validateMethodArguments;
    document.body.innerHTML = "<p>No buttons here</p>";

    jest.spyOn(classifier, "getMatched").mockReturnValue([]);
    await ButtonDiscernible.validate(validateMethodArguments);

    // Expect no failed or passed nodes due to the absence of buttons
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });
});
