import { FocusNotObscuredHeader } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("FocusNotObscuredHeader Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);
  });

  it("should pass when there are no sticky headers", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await FocusNotObscuredHeader.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when there are sticky headers without valid scroll-padding-top", async () => {
    const { response, classifier } = validateMethodArguments;
    const header = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([header]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      layoutInfo: {
        height: 50,
        scrollPaddingTop: 0,
      },
    });

    await FocusNotObscuredHeader.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(header);
  });

  it("should pass when there are sticky headers with valid scroll-padding-top", async () => {
    const { response, classifier } = validateMethodArguments;
    const parent = document.createElement("div");
    const header = document.createElement("div");
    parent.appendChild(header);
    Object.defineProperty(parent, "scrollHeight", { value: 200, writable: true });
    Object.defineProperty(parent, "clientHeight", { value: 100, writable: true });
    (classifier.getMatched as jest.Mock).mockReturnValue([header]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      layoutInfo: {
        scrollPaddingTop: 60,
        height: 50,
      },
    });

    await FocusNotObscuredHeader.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });
});
