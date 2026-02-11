import { TabindexValid } from "."; // Adjust the path as necessary
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TabindexValid Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should pass when tabindex is valid (-1 or 0)", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
            <div tabindex="0"></div>
            <button tabindex="-1"></button>
        `;

    await TabindexValid.validate(validateMethodArguments);

    // Expect elements with valid tabindex values to pass validation
    expect(response.passedNodes.length).toBe(2);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when tabindex is a positive integer", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = '<div tabindex="1"></div>';

    await TabindexValid.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when tabindex is used on non-interactive elements with positive integers", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = '<div tabindex="3"></div>';

    await TabindexValid.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
  });

  it("should not consider elements without tabindex", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = "<div></div>";

    await TabindexValid.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should not consider non HTMLElements", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = '<svg tabindex="7"></svg>';

    await TabindexValid.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toContain(document.querySelector("svg"));
    expect(response.inapplicableNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });
});
