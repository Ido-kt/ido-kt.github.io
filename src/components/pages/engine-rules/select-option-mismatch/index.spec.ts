import { SelectOptionMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

// eslint-disable-next-line jest/no-disabled-tests
describe("SelectOptionMismatch Rule Validation", () => {
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

    const selectOptions = Array.from(document.querySelectorAll("option"));
    jest.spyOn(classifier, "getMatched").mockReturnValue(selectOptions);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await SelectOptionMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(selectOptions);
    expect(response.failedNodes).toEqual([]);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it("should pass if all options have role='option'", async () => {
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

    const selectOptions = Array.from(document.querySelectorAll<HTMLElement>("[role='option']"));
    jest.spyOn(classifier, "getMatched").mockReturnValue(selectOptions);
    jest.spyOn(classifier, "assert").mockReturnValue(true);
    await SelectOptionMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(selectOptions);
    expect(response.failedNodes).toEqual([]);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it("should pass if all options and sub-options have role='option'", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
      <form>
        <div class="custom-select">
          <button role="combobox">Select an option...</button>
          <div role="listbox" style="opacity:0;">
            <div role="option" onclick="">Option 1</div>
            <div role="option" onclick="">Option 2</div>
            <div role="option" onclick="">Option 3</div>
            <div>
              Sub-options
              <div role="option" onclick="">Sub-option 1</div>
              <div role="option" onclick="">Sub-option 2</div>
              <div role="option" onclick="">Sub-option 3</div>
            </div>
          </div>
        </div>
      </form>
    `;

    const selectOptions = Array.from(document.querySelectorAll<HTMLElement>("[role='option']"));
    jest.spyOn(classifier, "getMatched").mockReturnValue(selectOptions);
    jest.spyOn(classifier, "assert").mockReturnValue(true);
    await SelectOptionMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(selectOptions);
    expect(response.failedNodes).toEqual([]);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it("should fail if one option is missing role='option'", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
      <form>
        <div class="custom-select">
          <button role="combobox">Select an option...</button>
          <div class="option-list" style="opacity:0;">
            <div role="option" onclick="">Option 1</div>
            <div role="option" onclick="">Option 2</div>
            <div id="test-subject" onclick="">Option 3</div>
          </div>
        </div>
      </form>
    `;

    const selectOptions = Array.from(document.querySelectorAll<HTMLElement>("[role='option'], #test-subject"));
    const testSubject = document.getElementById("test-subject");
    const compliantOptions = selectOptions.filter((option) => option !== testSubject);
    jest.spyOn(classifier, "getMatched").mockReturnValue(selectOptions);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    await SelectOptionMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(compliantOptions);
    expect(response.failedNodes).toEqual([testSubject]);
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it("should fail if one sub-option is missing role='option'", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
      <form>
        <div class="custom-select">
          <button role="combobox">Select an option...</button>
          <div role="listbox" style="opacity:0;">
            <div role="option" onclick="">Option 1</div>
            <div role="option" onclick="">Option 2</div>
            <div role="option" onclick="">Option 3</div>
            <div>
              Sub-options
              <div role="option" onclick="">Sub-option 1</div>
              <div id="test-subject" onclick="">Sub-option 2</div>
              <div role="option" onclick="">Sub-option 3</div>
            </div>
          </div>
        </div>
      </form>
    `;

    const selectOptions = Array.from(document.querySelectorAll<HTMLElement>("[role='option'], #test-subject"));
    const testSubject = document.getElementById("test-subject");
    const compliantOptions = selectOptions.filter((option) => option !== testSubject);
    jest.spyOn(classifier, "getMatched").mockReturnValue(selectOptions);
    jest.spyOn(classifier, "assert").mockImplementation((element: HTMLElement) => {
      return element.getAttribute("role") === "option";
    });
    await SelectOptionMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(compliantOptions);
    expect(response.failedNodes).toEqual([testSubject]);
  });
});
