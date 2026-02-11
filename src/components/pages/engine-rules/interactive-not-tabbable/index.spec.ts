import { InteractiveNotTabbable } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { PerceivableTraitClickable } from "@acsbe/core-engine-classifier";

describe("InteractiveNotTabbable rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should pass when an interactive element is clickable and has tabindex greater than -1", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    div.setAttribute("tabindex", "0");
    div.onclick = () => alert("click!");
    div.textContent = "Interactive";
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await InteractiveNotTabbable.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(div);
  });

  it("should pass when an interactive element has no tabindex", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const button = document.createElement("button");
    button.textContent = "Click here";
    document.body.appendChild(button);

    jest.spyOn(classifier, "getMatched").mockReturnValue([button]);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await InteractiveNotTabbable.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(button);
  });

  it("should fail when interactive element has tabindex=-1", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const button = document.createElement("button");
    button.setAttribute("tabindex", "-1");
    button.textContent = "Interactive";
    document.body.appendChild(button);

    jest.spyOn(classifier, "getMatched").mockReturnValue([button]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true); // First assert for visibility
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false); // Second assert for tabbable

    await InteractiveNotTabbable.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(button);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should fail when a clickable element has no tabindex greater than -1", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    div.textContent = "Interactive";
    div.onclick = () => alert("click!");
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true); // First assert for visibility
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false); // Second assert for tabbable

    await InteractiveNotTabbable.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(div);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when an interactive element is not tabbable and not visible", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const div = document.createElement("div");
    div.setAttribute("tabindex", "-1");
    div.onclick = () => alert("click!");
    div.textContent = "Interactive";
    div.style.display = "none";
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false); // First assert for visibility
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false); // Second assert for tabbable

    await InteractiveNotTabbable.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toContain(div);
  });

  it("should mark an interactive element as inapplicable if it has a clickable parent", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const parentDiv = document.createElement("div");
    parentDiv.onclick = () => alert("Parent clickable");
    parentDiv.textContent = "Parent";
    document.body.appendChild(parentDiv);

    const childDiv = document.createElement("div");
    childDiv.textContent = "Child";
    parentDiv.appendChild(childDiv);

    jest.spyOn(classifier, "getMatched").mockReturnValue([childDiv]);
    jest.spyOn(classifier, "getParent").mockImplementation((element, trait) => {
      if (element === childDiv && trait === PerceivableTraitClickable) {
        return parentDiv; // Simulate that the parent is clickable
      }
      return null;
    });
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await InteractiveNotTabbable.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toContain(childDiv);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
  });
});
