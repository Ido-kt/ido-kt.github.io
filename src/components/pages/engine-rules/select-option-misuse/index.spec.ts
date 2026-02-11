import { SelectOptionMisuse } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SelectOptionMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when all select options are perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const selectOption = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([selectOption]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await SelectOptionMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(selectOption);
  });

  it("should fail when a select option is not perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const selectOption = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([selectOption]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await SelectOptionMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes).toContain(selectOption);
  });

  it("should handle multiple select options correctly", async () => {
    const { response, classifier } = validateMethodArguments;
    const selectOption1 = document.createElement("div");
    const selectOption2 = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([selectOption1, selectOption2]);
    (classifier.assert as jest.Mock).mockImplementation((element) => element === selectOption1);

    await SelectOptionMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(selectOption2);
    expect(response.passedNodes).toContain(selectOption1);
  });

  it("should pass when there are no select options", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await SelectOptionMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });
});
