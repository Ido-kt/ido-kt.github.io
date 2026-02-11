import { TextSpacingWordSpacing } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TextSpacingWordSpacing Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    jest.resetAllMocks();
  });

  it("should pass when word spacing is at least 0.16 times the font size", async () => {
    const mockElement = {}; // Simplified mock of a text element
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([mockElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { wordSpacing: 1.6, fontSize: 10 },
    });

    await TextSpacingWordSpacing.validate(validateMethodArguments);

    // Expect the mock element to pass validation
    expect(validateMethodArguments.response.passedNodes).toContain(mockElement);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });

  it("should fail when word spacing is less than 0.16 times the font size", async () => {
    const mockElement = {}; // Simplified mock of a text element
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([mockElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      typographyInfo: { wordSpacing: 1.4, fontSize: 10 },
    });

    await TextSpacingWordSpacing.validate(validateMethodArguments);

    // Expect the mock element to fail validation
    expect(validateMethodArguments.response.failedNodes).toContain(mockElement);
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
  });

  it("should correctly handle the absence of matching text elements", async () => {
    jest.spyOn(validateMethodArguments.classifier, "getMatched").mockReturnValue([]);

    await TextSpacingWordSpacing.validate(validateMethodArguments);

    // Expect no failed or passed nodes due to the absence of matching elements
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });
});
