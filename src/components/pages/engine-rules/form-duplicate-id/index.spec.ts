import { FormDuplicateId } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("FormContextChangeWarning Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
  });

  it("should pass when there are no duplicate ids", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <form id="form">
        <input id="name-field" type="text" />
        <input id="password-field" type="password" />
        <button type="submit">Confirm</button>
      </form>
    `;

    const formElements = Array.from(document.querySelectorAll("form, input"));
    jest.spyOn(classifier, "getMatched").mockReturnValue(formElements);

    await FormDuplicateId.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(3);
    expect(response.passedNodes).toContain(formElements[0]);
    expect(response.passedNodes).toContain(formElements[1]);
    expect(response.passedNodes).toContain(formElements[2]);
  });

  it("should fail when there are duplicate ids", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <form id="form">
        <input id="name-field" type="text" />
        <input id="name-field" type="password" />
        <button type="submit">Confirm</button>
      </form>
    `;

    const formElements = Array.from(document.querySelectorAll("form, input"));
    const duplicates = Array.from(document.querySelectorAll("input"));
    jest.spyOn(classifier, "getMatched").mockReturnValue(formElements);

    await FormDuplicateId.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes).toContain(formElements[0]);
    expect(response.failedNodes).toHaveLength(2);
    expect(response.failedNodes).toContain(duplicates[0]);
    expect(response.failedNodes).toContain(duplicates[1]);
  });
});
