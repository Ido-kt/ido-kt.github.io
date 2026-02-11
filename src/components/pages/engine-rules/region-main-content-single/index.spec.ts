import { RegionMainContentSingle } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RegionMainContentSingle Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);

    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = "";
  });

  it("should have no failed nodes when there are no main elements", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([]);

    await RegionMainContentSingle.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed nodes when there is a single visible main element", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);

    await RegionMainContentSingle.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have the excessive main elements in the failed nodes", async () => {
    const { response } = validateMethodArguments;
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{ id: 1 }, { id: 2 }, { id: 3 }]);

    await RegionMainContentSingle.validate(validateMethodArguments);

    expect(response.failedNodes.length).toEqual(2);
    expect(response.failedNodes[0]).toEqual({ id: 2 });
    expect(response.failedNodes[1]).toEqual({ id: 3 });
  });
});
