import { InteractiveTargetSize, isElementInSentence } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("InteractiveTargetSize Rule", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { classifier } = validateMethodArguments;
    jest.spyOn(classifier, "getOperations").mockImplementation((element: HTMLElement) => ({
      layoutInfo: {
        absoluteRect: element.getBoundingClientRect(),
      },
    }));
  });

  it("should pass elements that meet the minimum size requirement", async () => {
    const { response, classifier } = validateMethodArguments;

    const elements = [createElement(24, 24), createElement(30, 30)];
    jest.spyOn(classifier, "getMatched").mockReturnValue(elements);

    await InteractiveTargetSize.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(2);
    expect(response.passedNodes).toContain(elements[0]);
    expect(response.passedNodes).toContain(elements[1]);
  });

  it("should fail elements that do not meet the minimum size requirement and have insufficient spacing", async () => {
    const { response, classifier } = validateMethodArguments;

    const elements = [createElement(18, 18, 0, 0), createElement(24, 24, 18, 0)];
    jest.spyOn(classifier, "getMatched").mockReturnValue(elements);

    await InteractiveTargetSize.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(elements[0]);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(elements[1]);
  });

  it("should pass elements that are undersized and have sufficient spacing", async () => {
    const { response, classifier } = validateMethodArguments;

    const elements = [createElement(18, 18, 0, 0), createElement(18, 18, 20, 20)];
    jest.spyOn(classifier, "getMatched").mockReturnValue(elements);

    await InteractiveTargetSize.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(2);
    expect(response.passedNodes).toContain(elements[0]);
    expect(response.passedNodes).toContain(elements[1]);
  });

  it("should fail when an undersized interactable intersects the cicle of another undersized target", async () => {
    const { response, classifier } = validateMethodArguments;

    const elements = [createElement(4, 10, 0, 0), createElement(34, 10, 0, 10)];
    jest.spyOn(classifier, "getMatched").mockReturnValue(elements);

    await InteractiveTargetSize.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(2);
    expect(response.failedNodes).toContain(elements[0]);
    expect(response.failedNodes).toContain(elements[1]);
    expect(response.passedNodes.length).toBe(0);
  });

  function createElement(width = 0, height = 0, left = 0, top = 0): HTMLElement {
    const element = document.createElement("div");
    Object.defineProperty(element, "getBoundingClientRect", {
      value: () => ({
        width,
        height,
        left,
        top,
        right: left + width,
        bottom: top + height,
      }),
    });
    return element;
  }
});

describe("isElementInSentence", () => {
  it("should return true for an element in a sentence, element.previousSibling is not Node.TEXT_NODE", () => {
    document.body.innerHTML = `<p>This <b>is a</b> <a href="https://example.com">link</a> in a sentence.</p>`;
    const link = document.querySelector("a") as HTMLElement;
    expect(isElementInSentence(link)).toBe(true);
  });

  it("should return true for an element in a sentence, element.nextSibling is not Node.TEXT_NODE", () => {
    document.body.innerHTML = `<div><a href="https://example.com">link</a> <b>This</b> is a link in a div.</div>`;
    const link = document.querySelector("a") as HTMLElement;
    expect(isElementInSentence(link)).toBe(true);
  });

  it("should return true for an element in a sentence", () => {
    document.body.innerHTML = `<span>This is a <a href="https://example.com">link</a> in a span.</span>`;
    const link = document.querySelector("a") as HTMLElement;
    expect(isElementInSentence(link)).toBe(true);
  });

  it("should return false for an element not surrounded by text nodes", () => {
    document.body.innerHTML = `<p><a href="https://example.com">link</a></p>`;
    const link = document.querySelector("a") as HTMLElement;
    expect(isElementInSentence(link)).toBe(false);
  });
});
