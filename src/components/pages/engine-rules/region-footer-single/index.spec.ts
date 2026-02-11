import { RegionFooterSingle } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("Region-Footer-Single Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when there is only one footer", async () => {
    const { response, document } = validateMethodArguments;

    const footerElement = document.createElement("footer");
    document.body.appendChild(footerElement);

    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([footerElement]);

    await RegionFooterSingle.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when there are multiple footer elements", async () => {
    const { response, document } = validateMethodArguments;

    const footerElement = document.createElement("footer");
    const contentInfoElement = document.createElement("div");
    contentInfoElement.setAttribute("role", "contentinfo");
    document.body.appendChild(footerElement);
    document.body.appendChild(contentInfoElement);

    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([footerElement, contentInfoElement]);
    await RegionFooterSingle.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toContain(contentInfoElement);
  });
});
