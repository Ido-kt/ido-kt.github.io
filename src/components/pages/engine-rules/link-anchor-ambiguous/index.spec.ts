import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { LinkAnchorAmbiguous } from ".";

describe("LinkAnchorAmbiguous Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no nodes in failed nodes if there are no link in the page", async () => {
    const { classifier, response } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await LinkAnchorAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have no nodes in failed nodes if links exist and they are not ambiguous", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const link = document.createElement("a");
    link.href = "#faq";
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contextInfo: { isAmbiguous: false },
      contentInfo: { srVisibleText: "go to faq section" },
    });

    await LinkAnchorAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes[0]).toBe(link);
  });

  it("should have a failed node if links exist and have content that is considered ambiguous", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const link = document.createElement("a");
    link.href = "#prices";
    link.setAttribute("aria-label", "click");
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contextInfo: { isAmbiguous: true },
      contentInfo: { srVisibleText: "Click here" },
    });

    await LinkAnchorAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes[0]).toBe(link);
  });

  it("should have inapplicable node if the link has NO sr-visible text", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const link = document.createElement("a");
    link.href = "#top";
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "" },
      contextInfo: { isAmbiguous: false },
    });

    await LinkAnchorAmbiguous.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toHaveLength(1);
    expect(response.inapplicableNodes).toContain(link);
  });
});
