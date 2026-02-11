import { FocusNotObscuredFooter } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("FocusNotObscuredFooter Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);
  });

  it("should pass when there are no sticky footers", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await FocusNotObscuredFooter.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when there are sticky footers without valid scroll-padding-bottom", async () => {
    const { response, classifier } = validateMethodArguments;
    const footer = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([footer]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      layoutInfo: {
        height: 50,
        scrollPaddingBottom: 0,
      },
    });

    await FocusNotObscuredFooter.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(footer);
  });

  it("should pass when there are sticky footers with valid scroll-padding-bottom", async () => {
    const { response, classifier } = validateMethodArguments;
    const parent = document.createElement("div");
    const footer = document.createElement("div");
    parent.appendChild(footer);
    Object.defineProperty(parent, "scrollHeight", { value: 200, writable: true });
    Object.defineProperty(parent, "clientHeight", { value: 100, writable: true });
    (classifier.getMatched as jest.Mock).mockReturnValue([footer]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      layoutInfo: {
        scrollPaddingBottom: 60,
        height: 50,
      },
    });

    await FocusNotObscuredFooter.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });
});
