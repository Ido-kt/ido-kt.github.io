import { SearchFormMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SearchFormMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes when search-form has 'search' role", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <form role="search">
        <div class="search-container">
          <textarea placeholder="חיפוש"></textarea>
          <button type="submit"></button>
        </div>
      </form>
    `;

    const searchForm = document.querySelector("form[role=search]");
    (classifier.getMatched as jest.Mock).mockReturnValue([searchForm]);
    (classifier.assert as jest.Mock).mockReturnValue(searchForm);

    await SearchFormMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual([searchForm]);
  });

  it("should have no failed nodes when perceivable search-form has a parent with 'search' role", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div role="search">
        <div class="search-container">
          <textarea placeholder="חיפוש"></textarea>
          <button type="submit"></button>
        </div>
      </div>
   `;

    const searchForm = document.querySelector(".search-container");
    (classifier.getMatched as jest.Mock).mockReturnValue([searchForm]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(true);

    await SearchFormMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual([searchForm]);
  });

  it("should fail when search-form is not role search", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div class="search-container">
        <textarea placeholder="חיפוש"></textarea>
        <button type="submit"></button>
      </div>
   `;

    const searchForm = document.querySelector(".search-container");
    (classifier.getMatched as jest.Mock).mockReturnValue([searchForm]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    await SearchFormMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([searchForm]);
  });

  it("should fail when search-form is not role search and has no role search parent", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div role="main">
        <div class="search-container">
          <textarea placeholder="חיפוש"></textarea>
          <button type="submit"></button>
        </div>
      </div>
   `;

    const searchForm = document.querySelector(".search-container");
    (classifier.getMatched as jest.Mock).mockReturnValue([searchForm]);
    (classifier.assert as jest.Mock).mockReturnValue(false);
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    await SearchFormMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([searchForm]);
  });
});
