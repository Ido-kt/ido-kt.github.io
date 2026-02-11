import { DuplicateId } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("DuplicateId Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    document.body.innerHTML = ""; // Clear any existing content
  });

  it("should pass when all ids are unique", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document with unique ids
    document.body.innerHTML = `
            <div id="uniqueId1"></div>
            <div id="uniqueId2"></div>
            <div id="uniqueId3"></div>
        `;

    await DuplicateId.validate(validateMethodArguments);

    // Expect all elements with unique ids to pass validation
    expect(response.passedNodes.length).toBe(3);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when duplicate ids are present", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document with duplicate ids
    document.body.innerHTML = `
            <div id="duplicateId"></div>
            <div id="uniqueId"></div>
            <div id="duplicateId"></div>
        `;

    await DuplicateId.validate(validateMethodArguments);

    // Expect elements with duplicate ids to fail validation
    expect(response.failedNodes.length).toBe(2);
    expect(response.passedNodes.length).toBe(1); // Only the uniqueId element should pass
  });

  it("should correctly handle absence of ids", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document without any ids
    document.body.innerHTML = `
            <div></div>
            <div></div>
            <div></div>
        `;

    await DuplicateId.validate(validateMethodArguments);

    // Expect no failed or passed nodes due to absence of ids
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });
});
