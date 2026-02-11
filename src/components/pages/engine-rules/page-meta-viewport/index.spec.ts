import { PageMetaViewport } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("Page has a meta viewport validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should pass if there is a meta viewport tag in the document", () => {
    const { response, document } = validateMethodArguments;
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1";
    document.head.appendChild(metaViewport);

    PageMetaViewport.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(metaViewport);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail if there is no meta viewport tag in the document", () => {
    const { response } = validateMethodArguments;
    PageMetaViewport.validate(validateMethodArguments);
    expect(response.passedNodes).toHaveLength(0);
  });
});
