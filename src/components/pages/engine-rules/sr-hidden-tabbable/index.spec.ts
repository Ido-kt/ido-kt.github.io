import { SRHiddenTabbable } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SRHiddenTabbable rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should pass hidden element with tabIndex=-1", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    div.setAttribute("tabindex", "-1");
    div.hidden = true;
    div.textContent = "Not Tabbable";
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await SRHiddenTabbable.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(div);
  });

  it("should pass when a non-tabbable element is hidden", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    div.hidden = true;
    div.textContent = "Hidden";
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await SRHiddenTabbable.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when a tabbable element is hidden [will no be detected as a tabbable in the first place]", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const button = document.createElement("button");
    button.textContent = "Click here";
    button.hidden = true;
    document.body.appendChild(button);

    jest.spyOn(classifier, "getMatched").mockReturnValue([]);

    await SRHiddenTabbable.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when an interactive element is inside hidden container", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const container = document.createElement("div");
    container.hidden = true;
    const button = document.createElement("button");
    button.textContent = "Click here";
    container.appendChild(button);
    document.body.appendChild(container);

    jest.spyOn(classifier, "getMatched").mockReturnValue([button]);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await SRHiddenTabbable.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(button);
  });
});
