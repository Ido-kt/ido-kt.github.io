import { CustomSelectOptionsListListbox } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CustomSelectOptionsListListbox Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass if a select is native", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
    <select>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    `;

    const selects = Array.from(document.querySelectorAll("select"));
    jest.spyOn(classifier, "getMatched").mockReturnValue(selects);

    await CustomSelectOptionsListListbox.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should pass if list has role='listbox'", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
      <form>
        <div class="custom-select">
          <button role="combobox">Select an option...</button>
          <div role="listbox" style="opacity:0;">
            <div role="option" onclick="">Option 1</div>
            <div role="option" onclick="">Option 2</div>
            <div role="option" onclick="">Option 3</div>
          </div>
        </div>
      </form>
    `;

    const selects = Array.from(document.querySelectorAll(".custom-select"));
    const optionsList = document.querySelector("[role=listbox]");
    jest.spyOn(classifier, "getMatched").mockReturnValue(selects);
    jest.spyOn(classifier, "getMatchedDirect").mockReturnValue([optionsList]);
    await CustomSelectOptionsListListbox.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should fail if list does not have role='listbox'", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
      <form>
        <div class="custom-select">
          <button role="combobox">Select an option...</button>
          <div class="option-list" style="opacity:0;">
            <div role="option" onclick="">Option 1</div>
            <div role="option" onclick="">Option 2</div>
            <div role="option" onclick="">Option 3</div>
          </div>
        </div>
      </form>
    `;

    const selects = Array.from(document.querySelectorAll(".custom-select"));
    const optionsList = document.querySelector(".option-list");
    jest.spyOn(classifier, "getMatched").mockReturnValue(selects);
    jest.spyOn(classifier, "getMatchedDirect").mockReturnValue([optionsList]);
    await CustomSelectOptionsListListbox.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([optionsList]);
  });
});
