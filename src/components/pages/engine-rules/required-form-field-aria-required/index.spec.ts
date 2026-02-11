import { RequiredFormFieldAriaRequired } from ".";
import type { ValidationMethodArguments } from "~/../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "~/../test/unit/helpers/validation-method-arguments";

describe("RequiredFormFieldAriaRequired", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    document.body.innerHTML = "";
    jest.resetAllMocks();
  });

  it("should pass for perceivable required text field with aria-required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div id="tbLabel">Email Address *</div>
      <div
        role="textbox"
        contenteditable
        aria-labelledby="tblabel"
        id="email1"
        aria-required="true"
        style="border-color: red"></div>
    `;
    const textField = document.querySelector("[role=textbox]");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textField]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should fail for perceivable required text field with no aria-required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div id="tbLabel">Email Address *</div>
      <div
        role="textbox"
        contenteditable
        aria-labelledby="tblabel"
        id="email1"
        style="border-color: red"></div>
    `;

    const textField = document.querySelector("[role=textbox]");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textField]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([textField]);
  });

  it("should fail for perceivable text field with aria-required attribute with no value", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div id="tbLabel">Email Address *</div>
      <div
        role="textbox"
        contenteditable
        aria-labelledby="tblabel"
        id="email1"
        aria-required
        style="border-color: red"></div>
    `;
    const textField = document.querySelector("[role=textbox]");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textField]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([textField]);
  });

  it("should fail for perceivable text field with aria-required='false'", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div id="tbLabel">Email Address *</div>
      <div
        role="textbox"
        contenteditable
        aria-labelledby="tblabel"
        id="email1"
        aria-required="false"
        style="border-color: red"></div>
    `;
    const textField = document.querySelector("[role=textbox]");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textField]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([textField]);
  });

  it("should fail for perceivable input type text with no required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<input type="text" style="border-color: red"/>`;
    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([input]);
  });

  it("should pass for perceivable required input type text with required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<input type="text" required style="border-color: red"/>`;
    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass for perceivable required input type text with aria-required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<input type="text" aria-required="true" style="border-color: red"/>`;
    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should fail for perceivable required select with no required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<select style="border-color: red"/>`;
    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([select]);
  });

  it("should pass for perceivable required select with required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<select required style="border-color: red"/>`;
    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass for perceivable required select with aria-required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<select aria-required="true" style="border-color: red"/>`;
    const select = document.querySelector("select");
    jest.spyOn(classifier, "getMatched").mockReturnValue([select]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should fail for perceivable required textarea with no required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<textarea style="border-color: red"/>`;
    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([textarea]);
  });

  it("should pass for perceivable required textarea with required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<textarea required style="border-color: red"/>`;
    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass for perceivable required textarea with aria-required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<textarea aria-required="true" style="border-color: red"/>`;
    const textarea = document.querySelector("textarea");
    jest.spyOn(classifier, "getMatched").mockReturnValue([textarea]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass for input[type='hidden']", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<input type="hidden" style="border-color: red"/>`;
    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should return passedNodes for input type text with required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<input type="text" required style="border-color: red"/>`;
    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.passedNodes).toContain(input);
  });

  it("should return passedNodes for input type text with aria-required attribute", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `<input type="text" aria-required="true" style="border-color: red"/>`;
    const input = document.querySelector("input");
    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    await RequiredFormFieldAriaRequired.validate(validateMethodArguments);
    expect(response.passedNodes).toContain(input);
  });
});
