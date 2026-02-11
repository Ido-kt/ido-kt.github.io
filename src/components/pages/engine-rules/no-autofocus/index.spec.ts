import { NoAutofocus } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NoAutofocus rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should add elements with autofocus attribute to failedNodes", () => {
    const { response, root } = validateMethodArguments;

    // Create elements with autofocus attribute
    const inputWithAutofocus = document.createElement("input");
    inputWithAutofocus.setAttribute("autofocus", "");
    root.appendChild(inputWithAutofocus);

    const buttonWithAutofocus = document.createElement("button");
    buttonWithAutofocus.setAttribute("autofocus", "");
    root.appendChild(buttonWithAutofocus);

    // Perform validation
    NoAutofocus.validate(validateMethodArguments);

    // Expect both elements to be in failedNodes
    expect(response.failedNodes).toContain(inputWithAutofocus);
    expect(response.failedNodes).toContain(buttonWithAutofocus);
    expect(response.failedNodes).toHaveLength(2);
  });

  it("should not add elements without autofocus attribute to failedNodes", () => {
    const { response, root } = validateMethodArguments;

    // Create elements without autofocus attribute
    const inputWithoutAutofocus = document.createElement("input");
    root.appendChild(inputWithoutAutofocus);

    const buttonWithoutAutofocus = document.createElement("button");
    root.appendChild(buttonWithoutAutofocus);

    // Perform validation
    NoAutofocus.validate(validateMethodArguments);

    // Expect failedNodes to be empty
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should not fail when non-HTMLElements (svg) with autofocus attribute are present", () => {
    const { response, root } = validateMethodArguments;

    const svgWithAutofocus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgWithAutofocus.setAttribute("autofocus", "");
    root.appendChild(svgWithAutofocus);

    NoAutofocus.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });
});
