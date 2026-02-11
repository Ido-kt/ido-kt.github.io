import { ImageMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ImageMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when image has 'img' role", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await ImageMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have failed nodes when image element has no 'img' role", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await ImageMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toContain(element);
  });
});
