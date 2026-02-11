import { LinkNewWindowWarning } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("LinkNewWindowWarning Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when links do not open in a new window", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const link = document.createElement("a");
    link.href = "http://example.com";
    link.target = "_self";
    document.body.appendChild(link);

    jest.spyOn(classifier, "getMatched").mockReturnValue([link]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { allText: "Example Link" },
    });

    await LinkNewWindowWarning.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when links open in a new window and have new window in their content", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const link = document.createElement("a");
    link.href = "http://example.com";
    link.target = "_blank";
    document.body.appendChild(link);

    jest.spyOn(classifier, "getMatched").mockReturnValue([link]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { allText: "Example Link to new window" },
    });

    await LinkNewWindowWarning.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when links open in a new window and don't have new window in their content", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const link = document.createElement("a");
    link.href = "http://example.com";
    link.target = "_blank";
    document.body.appendChild(link);

    jest.spyOn(classifier, "getMatched").mockReturnValue([link]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { allText: "Example Link to somewhere else" },
    });

    await LinkNewWindowWarning.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(link);
  });
});
