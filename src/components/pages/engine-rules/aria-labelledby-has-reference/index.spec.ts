import { AriaLabelledByHasReference } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("AriaLabelledByHasReference Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = "";
  });

  it("should have no failed nodes when element with aria-labelledby attribute has an element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label">Label</div>
    `;

    await AriaLabelledByHasReference.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have 1 failed nodes when element with aria-labelledby attribute has no element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label-bad-id">Label</div>
    `;

    await AriaLabelledByHasReference.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(document.body.querySelector("input"));
  });

  it("should have passed nodes when element with aria-labelledby attribute has element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label">Label</div>
    `;

    await AriaLabelledByHasReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
  });

  it("should have no passed nodes when element with aria-labelledby attribute has no element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label-bad-id">Label</div>
    `;

    await AriaLabelledByHasReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
  });
});
