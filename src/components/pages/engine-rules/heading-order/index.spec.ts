import { HeadingOrder } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HeadingHierarchyConsistent Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;
  let getContextSpy: jest.SpyInstance;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);
    document.body.innerHTML = "";

    getContextSpy = jest.spyOn(validateMethodArguments.classifier, "getContext");
    getContextSpy.mockReturnValue({
      getCompliantHeadingLevel: jest.fn((heading: HTMLElement) => {
        const level = parseInt(heading.getAttribute("aria-level") ?? heading.tagName.replace("H", ""), 10);
        return isNaN(level) ? 0 : level;
      }),
    });
  });

  it("should pass when there are no headings", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when headings are consecutive starting from 1", async () => {
    const { response, classifier, document } = validateMethodArguments;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    (classifier.getMatched as jest.Mock).mockReturnValue([h1, h2, h3]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(3);
    expect(response.passedNodes).toContain(h1);
    expect(response.passedNodes).toContain(h2);
    expect(response.passedNodes).toContain(h3);
  });

  it("should fail when headings are not consecutive starting from 1", async () => {
    const { response, classifier, document } = validateMethodArguments;
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    document.body.appendChild(h1);
    document.body.appendChild(h3);
    (classifier.getMatched as jest.Mock).mockReturnValue([h1, h3]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(h1);
    expect(response.failedNodes).toContain(h3);
  });

  it("should fail when headings are missing level 1", async () => {
    const { response, classifier, document } = validateMethodArguments;
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    (classifier.getMatched as jest.Mock).mockReturnValue([h2, h3]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(2);
    expect(response.failedNodes).toContain(h2);
    expect(response.failedNodes).toContain(h3);
  });

  it("should pass when headings use aria-level and are consecutive starting from 1", async () => {
    const { response, classifier, document } = validateMethodArguments;
    const h1 = document.createElement("div");
    h1.setAttribute("role", "heading");
    h1.setAttribute("aria-level", "1");
    const noLevel = document.createElement("div");
    noLevel.setAttribute("role", "heading");
    const h2 = document.createElement("div");
    h2.setAttribute("role", "heading");
    h2.setAttribute("aria-level", "2");
    const h3 = document.createElement("div");
    h3.setAttribute("role", "heading");
    h3.setAttribute("aria-level", "3");
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    (classifier.getMatched as jest.Mock).mockReturnValue([h1, h2, h3]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(3);
    expect(response.passedNodes).toContain(h1);
    expect(response.passedNodes).toContain(h2);
    expect(response.passedNodes).toContain(h3);
  });

  it("should fail when headings use aria-level and are not consecutive starting from 1", async () => {
    const { response, classifier, document } = validateMethodArguments;
    const h1 = document.createElement("div");
    h1.setAttribute("role", "heading");
    h1.setAttribute("aria-level", "1");
    const h3 = document.createElement("div");
    h3.setAttribute("role", "heading");
    h3.setAttribute("aria-level", "3");
    const h4 = document.createElement("div");
    h4.setAttribute("role", "heading");
    h4.setAttribute("aria-level", "4");
    document.body.appendChild(h1);
    document.body.appendChild(h3);
    document.body.appendChild(h4);
    (classifier.getMatched as jest.Mock).mockReturnValue([h1, h3, h4]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(2);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(h1);
    expect(response.failedNodes).toContain(h3);
    expect(response.failedNodes).toContain(h4);
  });

  it("should fail when headings are missing level 3 after the second level 2", async () => {
    const { response, classifier, document } = validateMethodArguments;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h2_second = document.createElement("h2");
    const h4 = document.createElement("h4");
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    document.body.appendChild(h2_second);
    document.body.appendChild(h4);
    (classifier.getMatched as jest.Mock).mockReturnValue([h1, h2, h3, h2_second, h4]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(4);
    expect(response.passedNodes).toContain(h1);
    expect(response.passedNodes).toContain(h2);
    expect(response.passedNodes).toContain(h3);
    expect(response.passedNodes).toContain(h2_second);
    expect(response.failedNodes).toContain(h4);
  });

  it("should pass when there is no body element", async () => {
    const { response, classifier, document } = validateMethodArguments;
    document.body.remove();
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await HeadingOrder.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });
});
