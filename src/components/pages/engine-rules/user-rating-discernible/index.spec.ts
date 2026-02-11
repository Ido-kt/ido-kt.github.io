import { UserRatingDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("UserRatingDiscernible rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should have no failed nodes if all user ratings are discernible", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    (classifier.getMatchedInclusive as jest.Mock).mockReturnValue([div]);
    (classifier.assert as jest.Mock).mockResolvedValue(true);

    await UserRatingDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have failed nodes if all user ratings are discernible", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    (classifier.getMatchedInclusive as jest.Mock).mockReturnValue([]);
    (classifier.assert as jest.Mock).mockResolvedValue(false);

    await UserRatingDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes[0]).toBe(div);
  });

  it("should have passed nodes if all user ratings are discernible", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    (classifier.getMatchedInclusive as jest.Mock).mockReturnValue([div]);
    (classifier.assert as jest.Mock).mockResolvedValue(true);

    await UserRatingDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes[0]).toBe(div);
  });
});
