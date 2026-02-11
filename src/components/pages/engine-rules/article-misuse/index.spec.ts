import { ArticleMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ArticleMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes if there no elements tagged as articles", async () => {
    const { response, classifier } = validateMethodArguments;
    document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await ArticleMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes if article elements are perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const article = document.createElement("article");
    (classifier.getMatched as jest.Mock).mockReturnValue([article]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await ArticleMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have one failed node if article is not perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const article = document.createElement("article");
    (classifier.getMatched as jest.Mock).mockReturnValue([article]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await ArticleMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([article]);
  });

  it("shuold return paseedNodes if article is perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const article = document.createElement("article");
    (classifier.getMatched as jest.Mock).mockReturnValue([article]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await ArticleMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([article]);
  });
});
