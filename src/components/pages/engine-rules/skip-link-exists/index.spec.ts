import { SkipLinkExists } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SkipLinkExists rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should fail when skip-link does not exist in the page", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const notASkipLink = document.createElement("a");
    notASkipLink.href = "/info";
    document.body.appendChild(notASkipLink);

    jest.spyOn(classifier, "getMatched").mockReturnValue([]);

    await SkipLinkExists.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when skip-link exists in the page", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    document.body.appendChild(skipLink);

    jest.spyOn(classifier, "getMatched").mockReturnValue([skipLink]);

    await SkipLinkExists.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(1);
    expect(response.failedNodes).toHaveLength(0);
  });
});
