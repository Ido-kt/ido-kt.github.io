import { HeadingMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HeadingMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when a custom heading has role=heading and appropriate aria-level", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div id="custom-heading" role="heading" aria-level="2">Custom Heading</div>
    `;
    const heading = document.getElementById("custom-heading");

    jest.spyOn(classifier, "getMatched").mockReturnValue([heading]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await HeadingMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(heading);
  });

  it("should fail when a custom heading has no role=heading", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div id="custom-heading">Custom Heading</div>
    `;
    const heading = document.getElementById("custom-heading");

    jest.spyOn(classifier, "getMatched").mockReturnValue([heading]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await HeadingMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(heading);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should fail when a custom heading has role=heading but no aria-level", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <div id="custom-heading" role="heading">Custom Heading</div>
    `;
    const heading = document.getElementById("custom-heading");

    jest.spyOn(classifier, "getMatched").mockReturnValue([heading]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await HeadingMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toContain(heading);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when a native heading element is used", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
          <h2 id="native-heading">Native Heading</h2>
    `;
    const heading = document.getElementById("native-heading");

    jest.spyOn(classifier, "getMatched").mockReturnValue([heading]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await HeadingMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(heading);
  });
});
