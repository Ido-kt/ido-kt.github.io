import { LinkAnchorDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("LinkAnchorDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const document = validateMethodArguments.document;
    document.body.innerHTML = "";
    jest.resetAllMocks();
  });

  it("should pass when anchor link has discernible text", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
        <a href="#sec123">=></a>
        <section>
            <h3 id="sec123">About us</h3>
            <p>Our company is a leader in the industry.</p>
        </section>
        `;

    const anchor = document.querySelector("a");
    jest.spyOn(classifier, "getMatched").mockReturnValue([anchor]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await LinkAnchorDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(anchor);
    expect(response.failedNodes).toHaveLength(0);
  });
  it("should fail when anchor link has no discernible text", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
        <a href="#sec123"></a>
        <section>
            <h3 id="sec123">About us</h3>
            <p>Our company is a leader in the industry.</p>
        </section>
        `;

    const anchor = document.querySelector("a");
    jest.spyOn(classifier, "getMatched").mockReturnValue([anchor]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await LinkAnchorDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(anchor);
    expect(response.passedNodes).toHaveLength(0);
  });
});
