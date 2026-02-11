import { BrokenAriaReference } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("BrokenAriaReference Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = "";
  });

  it("should have no failed nodes when element with aria-describedby attribute has an element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-describedby="description" />
      <div id="description">Description</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have 1 failed nodes when element with aria-describedby attribute has no element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-describedby="description" />
      <div id="description-bad-id">Description</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(document.body.querySelector("input"));
  });

  it("should have no failed nodes when element with aria-labelledby attribute has an element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label">Label</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have 1 failed nodes when element with aria-labelledby attribute has no element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label-bad-id">Label</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(document.body.querySelector("input"));
  });

  it("should have passed nodes when element with aria-labelledby attribute has element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label">Label</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
  });

  it("should have no passed nodes when element with aria-labelledby attribute has no element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-labelledby="label" />
      <div id="label-bad-id">Label</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
  });

  it("should have passed nodes when element with aria-describedby attribute has element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-describedby="description" />
      <div id="description">Description</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
  });
  it("should have no passed nodes when element with aria-describedby attribute has no element with fitting id", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input aria-describedby="description" />
      <div id="description-bad-id">Description</div>
    `;

    await BrokenAriaReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
  });
});
