import { AriaInvalidMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("AriaInvalidMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should fail when element is empty, required, and lacks aria-invalid", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <input required />
    `;

    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(input);
  });

  it("should pass when element is not empty and required", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <input required value="filled" />
    `;

    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(input);
  });

  it("should pass when element is empty but not required", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <input />
    `;

    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(input);
  });

  it("should pass when element is empty, required, but has aria-invalid", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <input required aria-invalid="true" />
    `;

    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(input);
  });

  it("should fail when element is empty, required, and aria-invalid is 'false'", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <input required aria-invalid="false" />
    `;

    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(input);
    expect(response.passedNodes).not.toContain(input);
  });

  it("should fail when textarea is empty, required, and lacks aria-invalid", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <textarea required></textarea>
    `;

    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(textarea);
  });

  it("should pass when textarea is not empty and required", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <textarea required>filled</textarea>
    `;

    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(textarea);
  });

  it("should pass when textarea is empty but not required", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <textarea></textarea>
    `;

    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(textarea);
  });

  it("should pass when textarea is empty, required, but has aria-invalid", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <textarea required aria-invalid="true"></textarea>
    `;

    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(textarea);
  });

  it("should fail when textarea is empty, required, and aria-invalid is 'false'", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <textarea required aria-invalid="false"></textarea>
    `;

    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(textarea);
    expect(response.passedNodes).not.toContain(textarea);
  });

  it("should fail when select is empty, required, and lacks aria-invalid", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <select required></select>
    `;

    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(select);
  });

  it("should pass when select is not empty and required", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <select required>
        <option value="value">Option</option>
      </select>
    `;

    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(select);
  });

  it("should fail when select has a placeholder option selected and is required", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <select required>
        <option value="" disabled selected hidden>Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    `;

    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(select);
    expect(response.passedNodes).not.toContain(select);
  });

  it("should pass when select has a valid option selected and is required", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <select required>
        <option value="" disabled hidden>Select an option</option>
        <option selected>Option 1</option>
        <option>Option 2</option>
      </select>
    `;

    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(select);
    expect(response.failedNodes).not.toContain(select);
  });

  it("should fail when select has a placeholder option selected and aria-invalid is 'false'", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <select required aria-invalid="false">
        <option value="" disabled selected hidden>Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    `;

    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);

    await AriaInvalidMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(select);
    expect(response.passedNodes).not.toContain(select);
  });
});
