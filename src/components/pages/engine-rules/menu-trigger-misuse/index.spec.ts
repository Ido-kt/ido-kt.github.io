import { MenuTriggerMisuse } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MenuTriggerMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when all menu triggers are perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValue([menuTrigger]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await MenuTriggerMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(menuTrigger);
  });

  it("should fail when a menu trigger is not perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValue([menuTrigger]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await MenuTriggerMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes).toContain(menuTrigger);
  });

  it("should handle multiple menu triggers correctly", async () => {
    const { response, classifier } = validateMethodArguments;
    const menuTrigger1 = document.createElement("button");
    const menuTrigger2 = document.createElement("button");
    (classifier.getMatched as jest.Mock).mockReturnValue([menuTrigger1, menuTrigger2]);
    (classifier.assert as jest.Mock).mockImplementation((element) => element === menuTrigger1);

    await MenuTriggerMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(menuTrigger2);
    expect(response.passedNodes).toContain(menuTrigger1);
  });

  it("should pass when there are no compliant menu triggers", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await MenuTriggerMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });
});
