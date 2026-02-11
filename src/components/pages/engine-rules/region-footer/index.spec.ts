import { RegionFooter } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("Footer Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when footer is present", async () => {
    const { response } = validateMethodArguments;
    const footerElement = document.createElement("footer");
    document.body.appendChild(footerElement);
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([footerElement]);

    await RegionFooter.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when footer is not present", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);

    await RegionFooter.validate(validateMethodArguments);

    expect(response.failedNodes.length).toEqual(0);
    expect(response.passedNodes.length).toEqual(0);
  });
});
