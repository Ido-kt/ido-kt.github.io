import { TabbableVisible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TabbableVisible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetParent", {
      get() {
        return this.parentNode;
      },
    });
  });
  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should fail when element is invisible but still tabbable", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const div = document.createElement("div");
    const input = document.createElement("input");
    div.appendChild(input);
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await TabbableVisible.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(input);
  });

  it("should pass when a tabbable element is visible", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const input = document.createElement("input");
    document.body.appendChild(input);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([input]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await TabbableVisible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when an element is invisible and not tabbable", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const button = document.createElement("button");
    button.setAttribute("tabindex", "-1");

    document.body.appendChild(button);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await TabbableVisible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when an element has hidden dimensions and is tabbable", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const div = document.createElement("div");
    div.style.width = "0";
    div.style.height = "0";
    const input = document.createElement("input");
    div.appendChild(input);
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await TabbableVisible.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(input);
  });

  it("should pass when an element is a skip link", async () => {
    const { response, classifier, document } = validateMethodArguments;

    const input = document.createElement("input");
    document.body.appendChild(input);

    jest.spyOn(classifier, "getMatched").mockReturnValue([input]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await TabbableVisible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });
});
