import { VisibilityMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("VisibilityMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;
  let classifier: ValidationMethodArguments["classifier"];
  let response: ValidationMethodArguments["response"];

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = ""; // Reset document.body before each test

    classifier = validateMethodArguments.classifier;
    response = validateMethodArguments.response;
    jest.spyOn(classifier, "getMatched").mockReturnValue([]);
  });

  it("should add compliant visible element to passed nodes", async () => {
    const element = document.createElement("div");
    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await VisibilityMismatch.validate(validateMethodArguments);
    expect(response.passedNodes).toEqual([element]);
  });

  it("should add non-explicitly hidden element with no visible text and is graphic to passed nodes", async () => {
    const element = document.createElement("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      visibilityInfo: {
        isExplicitlyHiddenFromScreenReader: false,
      },
    });

    await VisibilityMismatch.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([element]);
  });

  it("should add explicitly hidden element with no visible content to inapplicable nodes", async () => {
    const element = document.createElement("div");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      visibilityInfo: {
        isExplicitlyHiddenFromScreenReader: true,
      },
      contentInfo: {
        hasVisibleText: false,
      },
      colorInfo: {
        backgroundImage: "none",
      },
    });

    await VisibilityMismatch.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([element]);
  });

  it("should add explicitly hidden element with visible text to failed nodes", async () => {
    const element = document.createElement("div");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      visibilityInfo: {
        isExplicitlyHiddenFromScreenReader: true,
      },
      contentInfo: {
        hasVisibleText: true,
      },
      colorInfo: {
        backgroundImage: "none",
      },
    });

    await VisibilityMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([element]);
  });

  it("should add explicitly hidden element with background image to failed nodes", async () => {
    const element = document.createElement("div");
    element.setAttribute("aria-hidden", "true");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      visibilityInfo: {
        isExplicitlyHiddenFromScreenReader: true,
      },
      contentInfo: {
        hasVisibleText: false,
      },
      colorInfo: {
        backgroundImage: "path/to/image.jpg",
      },
    });

    await VisibilityMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([element]);
  });

  it("should explicitly hidden element that is a graphic to failed nodes", async () => {
    const element = document.createElement("div");
    element.setAttribute("aria-hidden", "true");

    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false).mockReturnValueOnce(true);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      visibilityInfo: {
        isExplicitlyHiddenFromScreenReader: true,
      },
      contentInfo: {
        hasVisibleText: false,
      },
      colorInfo: {
        backgroundImage: "none",
      },
    });
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await VisibilityMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([element]);
  });

  it("should explicitly hidden element that contains a graphic to failed nodes", async () => {
    const element = document.createElement("div");
    element.setAttribute("aria-hidden", "true");

    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      visibilityInfo: {
        isExplicitlyHiddenFromScreenReader: true,
      },
      contentInfo: {
        hasVisibleText: false,
      },
      colorInfo: {
        backgroundImage: "none",
      },
    });

    await VisibilityMismatch.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([element]);
  });
});
