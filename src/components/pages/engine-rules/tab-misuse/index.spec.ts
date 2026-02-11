import { TabMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TabMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when tab has 'tab' role", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TabMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have failed nodes when non-tab element has 'tab' role", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await TabMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toContain(element);
  });
});
