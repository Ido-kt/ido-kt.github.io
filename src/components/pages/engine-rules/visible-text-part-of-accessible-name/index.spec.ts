import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { VisibleTextPartOfAccessibleName } from ".";

describe("VisibleTextPartOfAccessibleName Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;
  let classifier: ValidationMethodArguments["classifier"];
  let response: ValidationMethodArguments["response"];
  let document: ValidationMethodArguments["document"];
  let assertSpy: jest.SpyInstance;
  let getMatchedSpy: jest.SpyInstance;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document = validateMethodArguments.document;
    classifier = validateMethodArguments.classifier;
    response = validateMethodArguments.response;
    assertSpy = jest.spyOn(classifier, "assert").mockReturnValue(false);
    getMatchedSpy = jest.spyOn(classifier, "getMatched").mockReturnValue([]);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    jest.restoreAllMocks();
  });

  it("should pass when button, and anchor has aria-label that includes their text content", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.innerText = "This Is A Test";
      el.setAttribute("aria-label", "this is a test, with some clarification");
      document.body.appendChild(el);
    }
    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "This Is A Test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should pass when button, and anchor has aria-labelledBy that includes their text content", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.innerText = "this is a test";
      el.setAttribute("aria-labelledby", "l1");

      document.body.appendChild(el);
    }

    const label = document.createElement("label");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should fail when button, and anchor has aria-label that doesnt include their text content", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.innerText = "this is a snake";
      el.setAttribute("aria-label", "this is a test, with some clarification");
      document.body.appendChild(el);
    }
    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a snake", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should fail when button, and anchor has aria-labelledBy that doesnt include their text content", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.innerText = "this is a mineral";
      el.setAttribute("aria-labelledby", "l1");

      document.body.appendChild(el);
    }

    const label = document.createElement("label");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a mineral", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should fail when buttons and links dont have visible text", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.setAttribute("aria-label", "this is a test, with some clarification");
      document.body.appendChild(el);
    }
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValue([buttonAndAnchor]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when buttons and links have visible text but no aria text", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.innerText = "this is a test";
      document.body.appendChild(el);
    }
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test" },
    });
    getMatchedSpy.mockReturnValue([buttonAndAnchor]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when buttons and links have aria-describedby that includes their visible text", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.innerText = "this is a test";
      el.setAttribute("aria-describedby", "l1");
      document.body.appendChild(el);
    }

    const label = document.createElement("p");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby], [aria-describedby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should fail when buttons and links have aria-describedby that doesnt include their visible text", async () => {
    const buttonAndAnchor = ["a", "button"];

    for (const element of buttonAndAnchor) {
      const el = document.createElement(element);
      el.innerText = "this is a snake";
      el.setAttribute("aria-describedby", "l1");
      document.body.appendChild(el);
    }

    const label = document.createElement("p");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby], [aria-describedby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a snake", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should pass when a button has aria-label that includes it's text content", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a test";
    el.setAttribute("aria-label", "this is a test, with some clarification");
    document.body.appendChild(el);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should pass when a button has aria-labelledBy that includes it's text content", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a test";
    el.setAttribute("aria-labelledby", "l1");

    document.body.appendChild(el);

    const label = document.createElement("label");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should fail when a button has aria-label that doesnt include it's text content", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a snake";
    el.setAttribute("aria-label", "this is a test, with some clarification");
    document.body.appendChild(el);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a snake", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should fail when a button has aria-labelledBy that doesnt include it's text content", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a mineral";
    el.setAttribute("aria-labelledby", "l1");

    document.body.appendChild(el);

    const label = document.createElement("label");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a mineral", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should fail when a button dont have visible text", async () => {
    const el = document.createElement("button");
    el.setAttribute("aria-label", "this is a test, with some clarification");
    document.body.appendChild(el);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when a button have visible text but no aria text", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a test";
    document.body.appendChild(el);

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test" },
    });
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when a button have aria-describedby that includes it's visible text", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a test";
    el.setAttribute("aria-describedby", "l1");
    document.body.appendChild(el);

    const label = document.createElement("p");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby], [aria-describedby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should fail when a button have aria-describedby that doesnt include it's visible text", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a snake";
    el.setAttribute("aria-describedby", "l1");
    document.body.appendChild(el);

    const label = document.createElement("p");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby], [aria-describedby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a snake", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should pass when a link has aria-label that includes it's text content", async () => {
    const el = document.createElement("a");
    el.innerText = "this is a test";
    el.setAttribute("aria-label", "this is a test, with some clarification");
    document.body.appendChild(el);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should pass when a link has aria-labelledBy that includes it's text content", async () => {
    const el = document.createElement("a");
    el.innerText = "this is a test";
    el.setAttribute("aria-labelledby", "l1");

    document.body.appendChild(el);

    const label = document.createElement("label");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should fail when a link has aria-label that doesnt include it's text content", async () => {
    const el = document.createElement("a");
    el.innerText = "this is a snake";
    el.setAttribute("aria-label", "this is a test, with some clarification");
    document.body.appendChild(el);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a snake", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should fail when a link has aria-labelledBy that doesnt include it's text content", async () => {
    const el = document.createElement("a");
    el.innerText = "this is a mineral";
    el.setAttribute("aria-labelledby", "l1");

    document.body.appendChild(el);

    const label = document.createElement("label");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby]");

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a mineral", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should fail when a link dont have visible text", async () => {
    const el = document.createElement("a");
    el.setAttribute("aria-label", "this is a test, with some clarification");
    document.body.appendChild(el);

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when a link have visible text but no aria text", async () => {
    const el = document.createElement("a");
    el.innerText = "this is a test";
    document.body.appendChild(el);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test" },
    });
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when a link have aria-describedby that includes it's visible text", async () => {
    const el = document.createElement("a");
    el.innerText = "this is a test";
    el.setAttribute("aria-describedby", "l1");
    document.body.appendChild(el);

    const label = document.createElement("p");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby], [aria-describedby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(els));
  });

  it("should fail when a link have aria-describedby that doesnt include it's visible text", async () => {
    const el = document.createElement("a");
    el.innerText = "this is a snake";
    el.setAttribute("aria-describedby", "l1");
    document.body.appendChild(el);

    const label = document.createElement("p");
    label.setAttribute("id", "l1");
    label.innerText = "this is a test, with some clarification";

    document.body.appendChild(label);

    const els = document.querySelectorAll("[aria-label], [aria-labelledby], [aria-describedby]");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a snake", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([...els]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(els));
  });

  it("should pass when there is no visible text", async () => {
    const el = document.createElement("button");
    document.body.appendChild(el);

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "", ariaLabelText: "" },
    });
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when there is no visible text but there is aria text", async () => {
    const el = document.createElement("button");
    el.setAttribute("aria-label", "this is a test, with some clarification");
    document.body.appendChild(el);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "", ariaLabelText: "this is a test, with some clarification" },
    });
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when the element is not a button or a link", async () => {
    const el = document.createElement("div");
    el.innerText = "this is a test";
    el.setAttribute("aria-label", "something different than the text");
    document.body.appendChild(el);

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "something different than the text" },
    });
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual([el]);
  });

  it("should pass if the visible text is rendered as an icon", async () => {
    const el = document.createElement("button");
    el.innerText = "this is a test";
    el.setAttribute("aria-label", "something different than the text");
    document.body.appendChild(el);

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "this is a test", ariaLabelText: "something different than the text" },
    });
    assertSpy.mockReturnValue(true);
    getMatchedSpy.mockReturnValueOnce([el]);
    await VisibleTextPartOfAccessibleName.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual([el]);
  });
});
