import { LinkImageWarning } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("LinkImageWarning Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when there is a warning that the link opens an image", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const link = document.createElement("a");
    link.href = "https://example.com/image.png";
    document.body.appendChild(link);

    jest.spyOn(classifier, "getMatched").mockReturnValue([link]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "Opens an image" },
    });

    await LinkImageWarning.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(link);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when there isn't a warning that the link opens an image", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const link = document.createElement("a");
    link.href = "https://example.com/image.png";
    document.body.appendChild(link);

    jest.spyOn(classifier, "getMatched").mockReturnValue([link]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "Surprise!" },
    });

    await LinkImageWarning.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(link);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should skip when a link is not a native anchor element", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const link = document.createElement("button");
    link.setAttribute("role", "link");
    document.body.appendChild(link);

    jest.spyOn(classifier, "getMatched").mockReturnValue([link]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { allText: "Opens an image" },
    });

    await LinkImageWarning.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should skip when a link is not an image link", async () => {
    const { classifier, document, response } = validateMethodArguments;

    const link = document.createElement("a");
    link.href = "https://example.com"; // no image.png in href
    document.body.appendChild(link);

    jest.spyOn(classifier, "getMatched").mockReturnValue([link]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "Opens website" },
    });

    await LinkImageWarning.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });
});
