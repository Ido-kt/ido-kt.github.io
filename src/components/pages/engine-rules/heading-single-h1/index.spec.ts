import { HeadingSingleH1 } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HeadingSingleH1 Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    document.body.innerHTML = "";
  });

  it("should pass when there is exactly one H1 element", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document with one H1 element
    document.body.innerHTML = "<h1>Page Title</h1>";

    await HeadingSingleH1.validate(validateMethodArguments);

    // Expect exactly one H1 to pass validation
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when there are no H1 elements", async () => {
    const { response } = validateMethodArguments;

    await HeadingSingleH1.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when there are multiple H1 elements", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document with multiple H1 elements
    document.body.innerHTML = "<h1>Page Title</h1><h1>Another Title</h1>";

    await HeadingSingleH1.validate(validateMethodArguments);

    // Expect validation to fail due to multiple H1 elements
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(1);
  });

  it("should correctly handle H1 with aria-level attributes", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document with one H1 element and others with aria-level
    document.body.innerHTML = `
            <h1>Main Title</h1>
            <h2 aria-level="1">Not an H1 due to semantic mismatch</h2>
            <div role="heading" aria-level="1">Semantic H1</div>`;

    await HeadingSingleH1.validate(validateMethodArguments);

    // Based on rule logic, expect the div[role="heading"][aria-level="1"] to pass and the h1 to fail due to being multiple
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(1);
  });
});
