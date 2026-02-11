import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { MenuTriggerMismatch } from ".";

describe("MenuTriggerMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;
  let getMatchedSpy: jest.SpyInstance;
  let assertSpy: jest.SpyInstance;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    getMatchedSpy = jest.spyOn(validateMethodArguments.classifier, "getMatched");
    assertSpy = jest.spyOn(validateMethodArguments.classifier, "assert");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not add nodes to failed if there are no menu trigger elements", async () => {
    const { response } = validateMethodArguments;
    getMatchedSpy.mockReturnValueOnce([]);

    await MenuTriggerMismatch.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should not add nodes to failed if button is a compliant menu trigger", async () => {
    const { response, document } = validateMethodArguments;
    const button = document.createElement("button");
    getMatchedSpy.mockReturnValueOnce([button]);
    assertSpy.mockReturnValueOnce(true);

    await MenuTriggerMismatch.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toEqual([button]);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should add nodes to failed if button is not a compliant submenu controller", async () => {
    const { response, document } = validateMethodArguments;
    const button = document.createElement("button");
    getMatchedSpy.mockReturnValueOnce([button]);
    assertSpy.mockReturnValueOnce(false);

    await MenuTriggerMismatch.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toEqual([button]);
  });
});
