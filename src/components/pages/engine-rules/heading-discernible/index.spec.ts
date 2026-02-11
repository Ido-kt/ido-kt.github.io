import { HeadingDiscernible } from "."; // Adjust the path as necessary
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HeadingDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should pass when an h1 element has discernible text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const h1 = document.createElement("h1");

    (classifier.getMatched as jest.Mock).mockReturnValue([h1]);
    (classifier.assert as jest.Mock).mockReturnValue(true);
    await HeadingDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes).toContain(h1);
  });

  it("should not fail when heading element has no discernible text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const h1 = document.createElement("h1");

    (classifier.getMatched as jest.Mock).mockReturnValue([h1]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    await HeadingDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(1);
  });

  it("should fail when an h1 element has no discernible text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const h1 = document.createElement("h1");

    (classifier.getMatched as jest.Mock).mockReturnValue([h1]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);
    await HeadingDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toContain(h1);
  });
});
