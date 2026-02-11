import { FormContextChangeWarning, textContainsWordOrString } from ".";
import * as FormContextChangeWarningModule from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { textContainsWord, textContainsString } from "@acsbe/core-engine-dictionary";

const mockTextContainsWord = textContainsWord as jest.MockedFunction<typeof textContainsWord>;
const mockTextContainsString = textContainsString as jest.MockedFunction<typeof textContainsString>;

jest.mock("@acsbe/core-engine-dictionary");

describe("FormContextChangeWarning Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);

    jest.spyOn(validateMethodArguments.classifier, "getContext").mockReturnValue({
      data: {
        formInputs: new Map([]),
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should have no failed nodes when form has a submit button with type=submit", async () => {
    const { response } = validateMethodArguments;
    const formElement = document.createElement("form");
    const submitElement = document.createElement("button");
    submitElement.setAttribute("type", "submit");
    formElement.appendChild(submitElement);
    document.body.appendChild(formElement);
    (validateMethodArguments.classifier.getMatched as jest.Mock)
      .mockReturnValue([])
      .mockReturnValueOnce([formElement])
      .mockReturnValueOnce([...formElement.children]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed nodes when form has an input with type=submit", async () => {
    const { response } = validateMethodArguments;
    const formElement = document.createElement("form");
    const submitElement = document.createElement("input");
    submitElement.setAttribute("type", "submit");
    formElement.appendChild(submitElement);
    document.body.appendChild(formElement);
    (validateMethodArguments.classifier.getMatched as jest.Mock)
      .mockReturnValue([])
      .mockReturnValueOnce([formElement])
      .mockReturnValueOnce([...formElement.children]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed nodes when form has an element with role=button and type=submit", async () => {
    const { response } = validateMethodArguments;
    const formElement = document.createElement("form");
    const submitElement = document.createElement("div");
    submitElement.setAttribute("role", "button");
    submitElement.setAttribute("type", "submit");
    formElement.appendChild(submitElement);
    document.body.appendChild(formElement);
    (validateMethodArguments.classifier.getMatched as jest.Mock)
      .mockReturnValue([])
      .mockReturnValueOnce([formElement])
      .mockReturnValueOnce([...formElement.children]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed nodes when there is no form in the page", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have a failed node when there's a form without a submit button", async () => {
    const { response } = validateMethodArguments;
    validateMethodArguments.document.body.innerHTML = `
      <form>
        <input type="password">
      </form>
    `;
    const form = validateMethodArguments.document.body.querySelector("form");
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]).mockReturnValueOnce([form]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(validateMethodArguments.document.body.querySelector("form"));
  });

  it("should have passed nodes when there's a form with a submit button", async () => {
    const { response } = validateMethodArguments;
    validateMethodArguments.document.body.innerHTML = `
      <form>
        <input type="submit">
      </form>
    `;
    const form = validateMethodArguments.document.body.querySelector("form");
    const formChildren = form.children;
    (validateMethodArguments.classifier.getMatched as jest.Mock)
      .mockReturnValue([])
      .mockReturnValueOnce([form])
      .mockReturnValueOnce([...formChildren]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.passedNodes[0]).toBe(form);
  });

  it("should have both passed and failed nodes when there are multiple forms", async () => {
    const { response } = validateMethodArguments;
    validateMethodArguments.document.body.innerHTML = `
      <form id="first-form">
        <input type="submit">
      </form>
      <form id="second-form">
        <input type="password">
      </form>
    `;
    const firstForm = validateMethodArguments.document.body.querySelector("#first-form");
    const secondForm = validateMethodArguments.document.body.querySelector("#second-form");
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValueOnce([firstForm, secondForm]);
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValueOnce([...firstForm.children]);
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.passedNodes[0]).toBe(validateMethodArguments.document.body.querySelector("#first-form"));
    expect(response.failedNodes[0]).toBe(validateMethodArguments.document.body.querySelector("#second-form"));
  });

  it("should have passed nodes when there's a submit button outside the form but associated to it", async () => {
    const { response } = validateMethodArguments;
    validateMethodArguments.document.body.innerHTML = `
      <form id="associated-form"></form>
      <button form="associated-form"></button>
    `;

    jest.spyOn(validateMethodArguments.classifier, "getContext").mockReturnValue({
      data: {
        formInputs: new Map([[validateMethodArguments.document.body.querySelector("#associated-form"), [validateMethodArguments.document.body.querySelector("button")]]]),
      },
    });
    const form = validateMethodArguments.document.body.querySelector("form");
    const button = validateMethodArguments.document.body.querySelector("button");
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]).mockReturnValueOnce([form]).mockReturnValueOnce([]).mockReturnValueOnce([button]);

    await FormContextChangeWarning.validate(validateMethodArguments);

    expect(response.passedNodes[0]).toBe(form);
  });

  it(`should have passed nodes when there's an sr-only element with 'form' & 'submit' related text`, async () => {
    const { response } = validateMethodArguments;
    const form = validateMethodArguments.document.body.querySelector("form");
    const srOnlyElement = validateMethodArguments.document.body.querySelector(".sr-only");
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValueOnce([form]).mockReturnValueOnce([]).mockReturnValueOnce([srOnlyElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({ contentInfo: { srVisibleText: "" } } as any);
    jest.spyOn(FormContextChangeWarningModule, "textContainsWordOrString").mockReturnValue(true);
    await FormContextChangeWarning.validate(validateMethodArguments);
    expect(response.passedNodes.length).toBe(1);
  });

  it(`should have passed nodes when there's an sr-only element with 'form' & 'submission' related text`, async () => {
    const { response } = validateMethodArguments;
    const form = validateMethodArguments.document.body.querySelector("form");
    const srOnlyElement = validateMethodArguments.document.body.querySelector(".sr-only");
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValueOnce([form]).mockReturnValueOnce([]).mockReturnValueOnce([srOnlyElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({ contentInfo: { srVisibleText: "" } } as any);
    jest.spyOn(FormContextChangeWarningModule, "textContainsWordOrString").mockReturnValue(true).mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(true);
    await FormContextChangeWarning.validate(validateMethodArguments);
    expect(response.passedNodes.length).toBe(1);
  });

  it(`should have failed nodes when there's an sr-only element without 'form' & 'submit' related text`, async () => {
    const { response } = validateMethodArguments;
    const form = validateMethodArguments.document.body.querySelector("form");
    const srOnlyElement = validateMethodArguments.document.body.querySelector(".sr-only");
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValueOnce([form]).mockReturnValueOnce([]).mockReturnValueOnce([srOnlyElement]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({ contentInfo: { srVisibleText: "" } } as any);
    jest.spyOn(FormContextChangeWarningModule, "textContainsWordOrString").mockReturnValue(false);
    await FormContextChangeWarning.validate(validateMethodArguments);
    expect(response.failedNodes.length).toBe(1);
  });

  describe("textContainsWordOrString", () => {
    it("should return true when text contains the word", () => {
      mockTextContainsWord.mockReturnValue(true);

      expect(textContainsWordOrString("text", "form")).toBe(true);
    });

    it("should return true when text contains the string", () => {
      mockTextContainsString.mockReturnValue(true);

      expect(textContainsWordOrString("text", "form")).toBe(true);
    });

    it("should return false when text doesn't contain the word or the string", () => {
      mockTextContainsWord.mockReturnValue(false);
      mockTextContainsString.mockReturnValue(false);

      expect(textContainsWordOrString("text", "form")).toBe(false);
    });
  });
});
