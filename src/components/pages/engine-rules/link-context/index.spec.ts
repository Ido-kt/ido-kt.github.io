import { LinkContext } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("LinkContext Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes if there is any contextual text on the link", async () => {
    const { classifier, response } = validateMethodArguments;

    const link = document.createElement("a");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contextInfo: { hasContextualText: true },
    });
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);

    await LinkContext.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
  });

  it("should have the link in failed node if there is no contextual text on the link", async () => {
    const { classifier, response } = validateMethodArguments;

    const link = document.createElement("a");
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contextInfo: { hasContextualText: false },
    });
    (classifier.getMatched as jest.Mock).mockReturnValue([link]);

    await LinkContext.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes[0]).toEqual(link);
  });
});
