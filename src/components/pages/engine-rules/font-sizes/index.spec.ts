import { FontSizes } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("FontSizes Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);
  });

  it("should pass when an element has a readable font-size", async () => {
    const { response } = validateMethodArguments;
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { fontSize: 12 },
    });

    await FontSizes.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when an element doesn't have a readable font-size", async () => {
    const { response } = validateMethodArguments;
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { fontSize: 10 },
    });

    await FontSizes.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(1);
  });
});
