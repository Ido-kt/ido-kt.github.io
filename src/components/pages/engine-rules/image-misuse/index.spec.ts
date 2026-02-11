import { ImageMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ImageMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when image is visible and perceived as one", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    element.role = "img";
    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await ImageMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes).toContain(element);
  });

  it("should fail when image is visible but not perceived as one", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    element.role = "img";
    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await ImageMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toContain(element);
  });

  it("should add element to inapplicableNodes array if image is sr-only element", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await ImageMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toContain(element);
  });
});
