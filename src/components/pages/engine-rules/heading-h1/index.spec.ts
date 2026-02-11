import { HeadingH1 } from "."; // Adjust the path as necessary
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("headingH1 Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should pass when an h1 element is present", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = "<h1>Main Heading</h1>";

    await HeadingH1.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0].tagName).toBe("H1");
  });

  it('should pass when an element with role=heading and aria-level="1" is present', async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = '<div role="heading" aria-level="1">Accessible Main Heading</div>';

    await HeadingH1.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0].getAttribute("role")).toBe("heading");
    expect(response.passedNodes[0].getAttribute("aria-level")).toBe("1");
  });

  it("should not pass or fail when no h1 or equivalent is present", async () => {
    const { response } = validateMethodArguments;

    await HeadingH1.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
  });

  it.each(["h1", "h2", "h3", "h4", "h5", "h6"])("should pass when %s element with aria-level=1 is present", async (heading) => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `<${heading} aria-level="1">Heading</${heading}>`;

    await HeadingH1.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0].tagName).toBe(heading.toUpperCase());
  });
});
