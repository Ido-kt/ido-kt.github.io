import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { LinkNavigationAmbiguous } from ".";

describe("LinkNavigationAmbiguous Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no nodes in failed nodes if there are no link in the page", async () => {
    const { classifier, response } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await LinkNavigationAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have no nodes in failed nodes if links exist and they are not ambiguous", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const link = document.createElement("a");
    link.href = "https://example.com";
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contextInfo: { isAmbiguous: false },
      contentInfo: { srVisibleText: "go to cart" },
    });

    await LinkNavigationAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes[0]).toBe(link);
  });

  it("should have a failed node if links exist and have content that is considered ambiguous", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const link = document.createElement("a");
    link.href = "https://example.com";
    link.setAttribute("aria-label", "click");
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);
    jest
      .spyOn(validateMethodArguments.classifier, "getOperations")
      .mockReturnValueOnce({
        contextInfo: { isAmbiguous: true },
        contentInfo: { srVisibleText: "Click here" },
      })
      .mockReturnValueOnce({
        contextInfo: { isAmbiguous: true },
        contentInfo: { srVisibleText: "Click here", ariaText: "click", visibleText: "" },
      });

    await LinkNavigationAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes[0]).toBe(link);
  });

  it("should have inapplicable node if the link has NO sr-visible text", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const link = document.createElement("a");
    link.href = "https://example.com";
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "" },
      contextInfo: { isAmbiguous: false },
    });

    await LinkNavigationAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toHaveLength(1);
    expect(response.inapplicableNodes).toContain(link);
  });

  it("should have inapplicable node if the link was remediated with appending visible text to aria-label", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const link = document.createElement("a");
    link.href = "https://example.com";
    link.setAttribute("aria-label", "click | Demo");
    link.textContent = "Demo";
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "Click here", ariaText: "click | Demo", visibleText: "Demo" },
      contextInfo: { isAmbiguous: true },
    });

    await LinkNavigationAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toHaveLength(1);
    expect(response.inapplicableNodes).toContain(link);
  });
});
