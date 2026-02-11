import { IframeDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ButtonDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const document = validateMethodArguments.document;
    document.body.innerHTML = "";
    jest.resetAllMocks();
  });

  it("should pass when iframes have discernible text", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
            <iframe title="Iframe with discernible text"></iframe>
            <iframe aria-label="Accessible iframe"></iframe>
        `;

    const iframes = document.querySelectorAll("iframe");
    jest.spyOn(classifier, "getMatched").mockReturnValue(Array.from(iframes));
    jest.spyOn(classifier, "assert").mockResolvedValue(true);

    await IframeDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(Array.from(iframes));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when any iframe does not have discernible text", async () => {
    const { classifier, document } = validateMethodArguments;

    document.body.innerHTML = `
            <iframe></iframe> <!-- Missing discernible text -->
        `;

    const iframes = document.querySelectorAll("iframe");
    jest.spyOn(classifier, "getMatched").mockReturnValue(Array.from(iframes));
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await IframeDiscernible.validate(validateMethodArguments);

    expect(validateMethodArguments.response.failedNodes).toEqual(Array.from(iframes));
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
  });

  it("should correctly handle the absence of iframes", async () => {
    const { classifier, document } = validateMethodArguments;

    document.body.innerHTML = "<p>No iframes here</p>";

    jest.spyOn(classifier, "getMatched").mockReturnValue([]);
    await IframeDiscernible.validate(validateMethodArguments);

    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });
});
