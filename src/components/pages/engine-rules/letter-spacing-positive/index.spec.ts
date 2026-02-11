import { LetterSpacingPositive } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("LetterSpacingPositive Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // validateMethodArguments.classifier.getMatched = jest.fn();
    jest.resetAllMocks();
  });

  it("should pass when letter spacing is greater than or equal to -1", async () => {
    const mockElement = {}; // Simplified mock of a text element
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([mockElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { letterSpacing: 1.2 },
    });

    await LetterSpacingPositive.validate(validateMethodArguments);

    // Expect the mock element to pass validation
    expect(validateMethodArguments.response.passedNodes).toContain(mockElement);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });

  it("should fail when letter spacing is less than -1", async () => {
    const mockElement = {}; // Simplified mock of a text element
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([mockElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { letterSpacing: -1.1 },
    });

    await LetterSpacingPositive.validate(validateMethodArguments);

    // Expect the mock element to fail validation
    expect(validateMethodArguments.response.failedNodes).toContain(mockElement);
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
  });

  it("should correctly handle the absence of matching text elements", async () => {
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([]);

    await LetterSpacingPositive.validate(validateMethodArguments);

    // Expect no failed or passed nodes due to the absence of matching elements
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });
});
