import { PageMetaDescription } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("PageMetaDescription rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should pass when the page has a meta description", () => {
    const { response, document } = validateMethodArguments;

    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.content = "This is a page meta description.";
    document.head.appendChild(metaDescription);

    PageMetaDescription.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(metaDescription);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should not add any nodes to passedNodes if the page does not have a meta description", () => {
    const { response } = validateMethodArguments;

    PageMetaDescription.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });
});
