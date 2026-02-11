import { TextSpacingLineHeight } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TextSpacingLineHeight Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    jest.resetAllMocks();
  });

  it("should pass when line height is at least 1.5 times the font size", async () => {
    const mockElement = {}; // Simplified mock of a text element
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([mockElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { lineHeight: 18, fontSize: 12 },
    });

    await TextSpacingLineHeight.validate(validateMethodArguments);

    // Expect the mock element to pass validation
    expect(validateMethodArguments.response.passedNodes).toContain(mockElement);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });

  it("should fail when line height is less than 1.5 times the font size", async () => {
    const mockElement = {}; // Simplified mock of a text element
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([mockElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { lineHeight: 14, fontSize: 12 },
    });

    await TextSpacingLineHeight.validate(validateMethodArguments);

    // Expect the mock element to fail validation
    expect(validateMethodArguments.response.failedNodes).toContain(mockElement);
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
  });

  it("should correctly handle the absence of matching text elements", async () => {
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([]);

    await TextSpacingLineHeight.validate(validateMethodArguments);

    // Expect no failed or passed nodes due to the absence of matching elements
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });
});
