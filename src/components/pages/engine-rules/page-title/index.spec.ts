import { PageTitle } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("PageTitle Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = ""; // Clear any existing content in <head>
  });

  it("should correctly handle absence of a title element", async () => {
    const { response } = validateMethodArguments;

    // Ensure no title element is setup in the document

    await PageTitle.validate(validateMethodArguments);

    // Expect validation to neither pass nor fail, as no title is present to evaluate
    // This behavior may need to be adjusted based on rule's intent to handle missing titles
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0); // Depending on rule logic, might expect a failure here
  });

  it("should pass when a empty title element is present", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document with an empty title element
    document.head.innerHTML = "<title></title>";

    await PageTitle.validate(validateMethodArguments);

    // Expect the title element to pass validation
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when a non-empty title element is present", async () => {
    const { response, document } = validateMethodArguments;

    // Setup document with a non-empty title element
    document.head.innerHTML = "<title>Valid Page Title</title>";

    await PageTitle.validate(validateMethodArguments);

    // Expect the title element to pass validation
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(0);
  });
});
