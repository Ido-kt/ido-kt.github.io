import { ColorContrast } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

const prepareMocks = (classifier: ValidationMethodArguments["classifier"], mocks: { fontSize: number; colorContrastRatio: number; visibleText?: string }) => {
  const { fontSize, colorContrastRatio, visibleText = "Content" } = mocks;

  const div = document.createElement("div");
  div.id = "main";
  (classifier.getMatched as jest.Mock).mockReturnValue([div]);

  jest.spyOn(classifier, "getOperations").mockReturnValue({
    contentInfo: { visibleText, directText: visibleText },
    typographyInfo: { fontSize },
    colorInfo: { colorContrastRatio },
  });

  return div;
};

describe("ColorContrast Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes if there are no visible elements", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await ColorContrast.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed nodes if there are no elements with text", async () => {
    const { response, classifier } = validateMethodArguments;
    prepareMocks(classifier, { fontSize: 16, colorContrastRatio: 4.5, visibleText: "" });

    await ColorContrast.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed nodes if the element has good contrast ratio, font-size is 16px", async () => {
    const { response, classifier } = validateMethodArguments;
    prepareMocks(classifier, { fontSize: 16, colorContrastRatio: 4.5 });

    await ColorContrast.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed nodes if the element has good contrast ratio, font-size is 20px", async () => {
    const { response, classifier } = validateMethodArguments;
    prepareMocks(classifier, { fontSize: 20, colorContrastRatio: 3.1 });

    await ColorContrast.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have a failed node if the element has bad contrast ratio, font-size is 16px", async () => {
    const { response, classifier } = validateMethodArguments;
    const element = prepareMocks(classifier, { fontSize: 16, colorContrastRatio: 4 });

    await ColorContrast.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(element);
  });

  it("should have a failed node if the element has bad contrast ratio, font-size is 20px", async () => {
    const { response, classifier } = validateMethodArguments;
    const element = prepareMocks(classifier, { fontSize: 20, colorContrastRatio: 3 });

    await ColorContrast.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(element);
  });
});
