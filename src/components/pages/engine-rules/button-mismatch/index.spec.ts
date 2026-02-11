import { ButtonMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ButtonMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    document.body.innerHTML = "";
    jest.resetAllMocks();
  });

  it("should pass when buttons are correctly marked up", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
            <button>Button without role</button>
            <div role="button">Div as button</div>
        `;

    const buttons = document.querySelectorAll("button:not([role]), [role='button']");
    const classifierButtons = Array.from(buttons); // Simulate classifier finding correctly marked-up buttons
    jest.spyOn(classifier, "getMatched").mockReturnValue(classifierButtons);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await ButtonMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(expect.arrayContaining(classifierButtons));
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when button is a switch", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = '<button role="switch">News</button>';

    const button = document.querySelector("button");
    jest.spyOn(classifier, "getMatched").mockReturnValue([button]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await ButtonMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when button is a menuitem", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = '<button role="menuitem">News</button>';

    const button = document.querySelector("button");
    jest.spyOn(classifier, "getMatched").mockReturnValue([button]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await ButtonMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when a button is not correctly marked up", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
            <button role="link">Incorrectly marked-up button</button>
        `;

    const incorrectlyMarkedButton = [document.querySelector("button[role='link']")];
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce(incorrectlyMarkedButton);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await ButtonMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(expect.arrayContaining(incorrectlyMarkedButton));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should handle absence of buttons correctly", async () => {
    const { classifier, response } = validateMethodArguments;

    // Simulate no buttons found in the document
    jest.spyOn(classifier, "getMatched").mockReturnValue([]);

    await ButtonMismatch.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should handle hidden buttons correctly", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
            <button hidden>Hidden button</button>
        `;

    jest.spyOn(classifier, "getMatched").mockReturnValue([]);

    await ButtonMismatch.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });
});
