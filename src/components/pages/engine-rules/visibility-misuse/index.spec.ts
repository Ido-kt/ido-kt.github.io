import { VisibilityMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("VisibilityMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;
  let classifier: ValidationMethodArguments["classifier"];
  let response: ValidationMethodArguments["response"];

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    classifier = validateMethodArguments.classifier;
    response = validateMethodArguments.response;
    jest.spyOn(classifier, "getMatchedInclusive").mockReturnValue([]);
    jest.spyOn(classifier, "getMatched").mockReturnValue([]);
  });

  it("should add srOnlyElement to inapplicableNodes", async () => {
    const element = document.createElement("div");
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatchedInclusive").mockReturnValueOnce([element]);
    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([element]);
  });

  it("should add element with srOnly parent to inapplicableNodes", async () => {
    const element = document.createElement("div");
    const parent = document.createElement("div");

    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getParent").mockReturnValue(parent);

    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([element]);
  });

  it("should add element with srOnly descendant to inapplicableNodes", async () => {
    const element = document.createElement("div");
    const descendant = document.createElement("div");
    element.appendChild(descendant);

    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatchedInclusive").mockReturnValueOnce([descendant]);

    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([element]);
  });

  it("should add element with interactable parent and is all the srVisibile text of the parent to inapplicableNodes", async () => {
    const element = document.createElement("div");
    const parent = document.createElement("div");

    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(null);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(parent);

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: {
        srVisibleText: "text",
      },
    });

    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([element]);
  });

  it("should add compliant visible element to failedNodes", async () => {
    const element = document.createElement("div");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([element]);
  });

  it("should add not compliant visible element to passedNodes", async () => {
    const element = document.createElement("div");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.passedNodes).toEqual([element]);
  });

  it("should add nested non-compliant visible element to passedNodes", async () => {
    const element = document.createElement("div");
    const parent = document.createElement("div");
    parent.appendChild(element);

    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([parent]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([element]);

    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([parent]);
  });

  it("should add to inapplicableNodes a 'failed' element that has an explicitly-hidden ancestor", async () => {
    const parent = document.createElement("div");
    const element = document.createElement("div");
    parent.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([parent, element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(undefined);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(undefined);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(undefined);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(undefined);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(undefined);
    jest.spyOn(classifier, "getParent").mockReturnValueOnce(parent);

    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.inapplicableNodes).toEqual([element]);
  });

  it("should not add nested compliant visible element to failedNodes", async () => {
    const element = document.createElement("div");
    const parent = document.createElement("div");
    response.failedNodes = [parent];
    parent.appendChild(element);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([parent, element]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await VisibilityMisuse.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([parent]);
  });
});
