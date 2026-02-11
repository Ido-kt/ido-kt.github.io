import { EmphasisMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("StrongMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should fail when element is compliant generic", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const element = document.createElement("div");
    document.body.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true); // Simulate that the element matches "CompliantTraitGeneric"

    await EmphasisMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toContain(element);
    expect(response.inapplicableNodes).toHaveLength(0);
  });

  it("should pass when element has the emphasis role", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const element = document.createElement("div");
    element.setAttribute("role", "emphasis");
    document.body.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest
      .spyOn(classifier, "assert")
      .mockReturnValueOnce(false) // Simulate that the element does not match "CompliantTraitGeneric"
      .mockReturnValueOnce(true); // Simulate that the element matches "CompliantComponentEmphasis"

    await EmphasisMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(element);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toHaveLength(0);
  });

  it("should mark elements as inapplicable when they don't match CompliantTraitGeneric and don't match CompliantComponentEmphasis", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const element = document.createElement("div");
    document.body.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest
      .spyOn(classifier, "assert")
      .mockReturnValueOnce(false) // Simulate that the element does not match "CompliantTraitGeneric"
      .mockReturnValueOnce(false); // Simulate that the element does not match "CompliantComponentEmphasis"

    await EmphasisMismatch.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toContain(element);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should handle cases where no elements match the PerceivableComponentEmphasis detector", async () => {
    const { classifier, response } = validateMethodArguments;

    jest.spyOn(classifier, "getMatched").mockReturnValue([]);

    await EmphasisMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toHaveLength(0);
  });
});
