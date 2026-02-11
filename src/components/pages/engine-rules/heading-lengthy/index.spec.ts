import { HeadingLengthy } from "."; // Adjust the path as necessary
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HeadingLengthy Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    document.body.innerHTML = ""; // Clear any existing content
  });

  it("should pass when an h1 element is concise", async () => {
    const { response, document, classifier } = validateMethodArguments;

    // Setup document with a concise h1 element
    document.body.innerHTML = "<h1>" + "A".repeat(159) + "</h1>"; // 159 characters
    jest.spyOn(classifier, "getMatched").mockReturnValue([document.querySelector("h1")]);
    await HeadingLengthy.validate(validateMethodArguments);

    // Expect the concise h1 element to pass validation
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when an h1 element is too lengthy", async () => {
    const { response, document, classifier } = validateMethodArguments;

    // Setup document with a lengthy h1 element
    document.body.innerHTML = "<h1>" + "A".repeat(161) + "</h1>"; // 161 characters
    jest.spyOn(classifier, "getMatched").mockReturnValue([document.querySelector("h1")]);
    await HeadingLengthy.validate(validateMethodArguments);

    // Expect the lengthy h1 element to fail validation
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(1);
  });

  it('should pass when an element with role="heading" and aria-level="1" is concise', async () => {
    const { response, document, classifier } = validateMethodArguments;

    // Setup document with a concise semantic heading
    document.body.innerHTML = '<div role="heading" aria-level="1">' + "A".repeat(159) + "</div>"; // 159 characters
    jest.spyOn(classifier, "getMatched").mockReturnValue([document.querySelector("[role=heading]")]);
    await HeadingLengthy.validate(validateMethodArguments);

    // Expect the concise semantic heading to pass validation
    expect(response.passedNodes.length).toBe(1);
    expect(response.failedNodes.length).toBe(0);
  });

  it('should fail when an element with role="heading" and aria-level="1" is too lengthy', async () => {
    const { response, document, classifier } = validateMethodArguments;

    // Setup document with a lengthy semantic heading
    document.body.innerHTML = '<div role="heading" aria-level="1">' + "A".repeat(161) + "</div>"; // 161 characters
    jest.spyOn(classifier, "getMatched").mockReturnValue([document.querySelector("[role=heading]")]);
    await HeadingLengthy.validate(validateMethodArguments);

    // Expect the lengthy semantic heading to fail validation
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(1);
  });

  it("should correctly handle the absence of headings", async () => {
    const { response, classifier } = validateMethodArguments;

    // Ensure no h1 or semantic equivalent setup in the document
    jest.spyOn(classifier, "getMatched").mockReturnValue([]);
    await HeadingLengthy.validate(validateMethodArguments);

    // Expect no failed or passed nodes due to the absence of headings
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });
});
