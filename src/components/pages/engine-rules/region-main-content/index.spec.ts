import { RegionMainContent } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RegionMainContent Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);

    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = "";
  });

  it("should have no passed nodes when there are no main elements", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);

    await RegionMainContent.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
  });

  it("should have a single passed node when there is a single visible main element", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{ id: 1 }]);

    await RegionMainContent.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0]).toEqual({ id: 1 });
  });

  it("should have a single passed node even when there are more than a single visible main element", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{ id: 1 }, { id: 2 }, { id: 3 }]);

    await RegionMainContent.validate(validateMethodArguments);

    expect(response.passedNodes.length).toEqual(1);
    expect(response.passedNodes[0]).toEqual({ id: 1 });
  });
});
