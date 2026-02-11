import { AriaControlsHasReference } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("AriaControlsHasReference Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = "";
  });

  it("should have no failed nodes when element with aria-controls attribute has an element with fitting id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled" ></button>
      <div id="controlled">controller</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have 1 failed nodes when element with aria-controls attribute has no element with fitting id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled" ></button>
      <div id="controlled-bad-id">controller</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(document.body.querySelector("button"));
  });

  it("should have passed nodes when element with aria-controls attribute has element with fitting id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled" ></button>
      <div id="controlled">controller</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
  });

  it("should have no passed nodes when element with aria-controls attribute has no element with fitting id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled" ></button>
      <div id="controlled-bad-id">controller</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
  });

  it("should have no failed nodes when element with aria-controls attribute has multiple elements with fitting id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled controlled-2" ></button>
      <div id="controlled">controller 1</div>
      <div id="controlled-2">controller 2</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });
  it("should have 1 failed nodes when element with aria-controls attribute has multiple elements with fitting id and one with bad id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled controlled-2 controlled-bad-id" ></button>
      <div id="controlled">controller 1</div>
      <div id="controlled-2">controller 2</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
  });
  it("should have passed node when element with aria-controls attribute has multiple elements with fitting id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled controlled-2" ></button>
      <div id="controlled">controller 1</div>
      <div id="controlled-2">controller 2</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
  });
  it("should have multiple passed nodes when element with aria-controls attribute has multiple elements with fitting id", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button aria-controls="controlled"></button>
      <button aria-controls="controlled-2"></button>
      <div id="controlled">controller 1</div>
      <div id="controlled-2">controller 2</div>
    `;

    await AriaControlsHasReference.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(2);
  });
});
