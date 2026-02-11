import { RedundantDiscernibleContent } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

const getElement = (options?: { elementContent?: string; ariaLabelContent?: string; ariaLabelBy?: string }) => {
  const { elementContent, ariaLabelContent, ariaLabelBy } = options ?? {};
  const element = document.createElement("button");
  if (elementContent) {
    const textNode = document.createTextNode(elementContent);
    element.appendChild(textNode);
  }

  if (ariaLabelBy && ariaLabelContent) {
    element.setAttribute("aria-labelledby", ariaLabelBy);
    // This is needed to properly test for the associated label element
    document.body.appendChild(element);
    const label = document.createElement("label");
    label.id = ariaLabelBy;
    const textNode = document.createTextNode(ariaLabelContent);
    label.appendChild(textNode);
    document.body.appendChild(label);
  } else if (ariaLabelContent) {
    element.setAttribute("aria-label", ariaLabelContent);
  }

  return element;
};

describe("RedundantDiscernibleContent Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  afterAll(() => {
    // Clear any html that might have been added by the tests
    document.body.innerHTML = "";
  });

  it("should add to failed nodes an element with the same content and aria-label", async () => {
    const elementContent = "test";
    const ariaLabelContent = "test";
    const element = getElement({ elementContent, ariaLabelContent });
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: elementContent, ariaText: ariaLabelContent },
    });

    await RedundantDiscernibleContent.validate(validateMethodArguments);

    const { response } = validateMethodArguments;
    expect(response.failedNodes.length).toBe(1);
  });

  it("should add to failed nodes an element with the same content and aria-label with different case", async () => {
    const elementContent = "tEsT";
    const ariaLabelContent = "TeSt";
    const element = getElement({ elementContent, ariaLabelContent });
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([element]);

    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: elementContent, ariaText: ariaLabelContent },
    });

    await RedundantDiscernibleContent.validate(validateMethodArguments);

    const { response } = validateMethodArguments;
    expect(response.failedNodes.length).toBe(1);
  });

  it("should add to failed nodes an element with associated label with the same content as the element", async () => {
    const elementContent = "test";
    const element = getElement({ elementContent, ariaLabelContent: elementContent, ariaLabelBy: "btn-label" });

    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: elementContent, ariaText: elementContent },
    });

    await RedundantDiscernibleContent.validate(validateMethodArguments);

    const { response } = validateMethodArguments;
    expect(response.failedNodes.length).toBe(1);
  });

  it("should not add to failed nodes an element with different content and aria-label", async () => {
    const elementContent = "test-1";
    const ariaLabelContent = "test-2";
    const element = getElement({ elementContent, ariaLabelContent });
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: elementContent, ariaText: ariaLabelContent },
    });

    await RedundantDiscernibleContent.validate(validateMethodArguments);

    const { response } = validateMethodArguments;
    expect(response.failedNodes.length).toBe(0);
  });

  it("should not add to failed nodes an element without content", async () => {
    const elementContent = "";
    const ariaLabelContent = "test-2";
    const element = getElement({ elementContent, ariaLabelContent });
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: elementContent, ariaText: ariaLabelContent },
    });

    await RedundantDiscernibleContent.validate(validateMethodArguments);

    const { response } = validateMethodArguments;
    expect(response.failedNodes.length).toBe(0);
  });

  it("should not add to failed nodes an element without aria-label", async () => {
    const elementContent = "test-1";
    const element = getElement({ elementContent });
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: elementContent },
    });

    await RedundantDiscernibleContent.validate(validateMethodArguments);

    const { response } = validateMethodArguments;
    expect(response.failedNodes.length).toBe(0);
  });

  it("should not add to failed nodes an element with associated label with the different content as the element", async () => {
    const elementContent = "test";
    const ariaLabelContent = "test- 2";
    const element = getElement({ elementContent, ariaLabelContent, ariaLabelBy: "btn-label" });

    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([element]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: elementContent, ariaText: ariaLabelContent, relatedText: ariaLabelContent },
    });

    await RedundantDiscernibleContent.validate(validateMethodArguments);

    const { response } = validateMethodArguments;
    expect(response.failedNodes.length).toBe(0);
  });
});
