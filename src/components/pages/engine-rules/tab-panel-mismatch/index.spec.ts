import { TabPanelMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TabPanelMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when tab-panel has 'tabpanel' role", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TabPanelMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have failed nodes when non-tab-panel element has 'tabpanel' role", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([element]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await TabPanelMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toContain(element);
  });
});
