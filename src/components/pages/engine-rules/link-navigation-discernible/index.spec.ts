import { LinkNavigationDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("LinkNavigationDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const document = validateMethodArguments.document;
    document.body.innerHTML = "";
    jest.resetAllMocks();
  });

  it("should pass when links have discernible text", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
            <a href="http://example.com" >Example Link</a>
            <div role="link" aria-label="Decorative link"></div>
        `;

    const links = document.querySelectorAll("a, [role=link]");
    jest.spyOn(classifier, "getMatched").mockReturnValue(links);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await LinkNavigationDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(Array.from(links));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when any link does not have discernible text", async () => {
    const { classifier, document } = validateMethodArguments;

    document.body.innerHTML = `
            <a href="http://example.com"></a> <!-- Missing discernible text -->
            <div role="link"></div> <!-- missing aria-label or aria-labelledby -->
        `;

    const links = document.querySelectorAll("a, [role=link]");
    jest.spyOn(classifier, "getMatched").mockReturnValue(links);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await LinkNavigationDiscernible.validate(validateMethodArguments);

    expect(validateMethodArguments.response.failedNodes).toEqual(Array.from(links));
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
  });

  it("should correctly handle the absence of links", async () => {
    const { document, classifier } = validateMethodArguments;

    document.body.innerHTML = "<p>No links here</p>";

    jest.spyOn(classifier, "getMatched").mockReturnValue([]);
    await LinkNavigationDiscernible.validate(validateMethodArguments);

    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });
});
