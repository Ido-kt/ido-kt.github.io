import { InputDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("InputDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should add input-like elements to passed nodes if they have aria-label", async () => {
    const { response, classifier } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}, {}, {}]);
    (validateMethodArguments.classifier.assert as jest.Mock).mockResolvedValue(true);
    (classifier.getOperations as jest.Mock).mockImplementation(() => ({
      contentInfo: { accessibleName: "1" },
    }));

    await InputDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(3);
  });

  it("should ignore elements that are not input-like", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);

    await InputDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });

  it("should add input-like elements to failed nodes if they have no label associated with them", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getOperations as jest.Mock).mockImplementation(() => ({
      contentInfo: { accessibleName: "" },
    }));
    const elements = [{ id: 1 }, { id: 1 }, { id: 1 }];
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue(elements);
    (validateMethodArguments.classifier.assert as jest.Mock).mockResolvedValue(false);

    await InputDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(elements);
    expect(response.passedNodes.length).toBe(0);
  });
});
