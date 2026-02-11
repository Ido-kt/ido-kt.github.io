import { TableColumnHeader } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TableColumnHeader Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass if div table's headers has role=columnheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
          <div role="columnheader">Header 1</div>
          <div role="columnheader">Header 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 1, Cell 1</div>
          <div role="cell">Row 1, Cell 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 2, Cell 1</div>
          <div role="cell">Row 2, Cell 2</div>
        </div>
      </div>
    `;

    const colHeaders = document.querySelectorAll<HTMLElement>("[role='columnheader']");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(colHeaders));
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TableColumnHeader.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(colHeaders));
  });

  it("should pass if multiple div table's headers have role=columnheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
          <div role="columnheader">Header 1</div>
          <div role="columnheader">Header 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 2, Cell 1</div>
          <div role="cell">Row 2, Cell 2</div>
        </div>
      </div>
      <div role="table">
        <div role="row">
          <div role="columnheader">Header 1</div>
          <div role="columnheader">Header 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 2, Cell 1</div>
          <div role="cell">Row 2, Cell 2</div>
        </div>
      </div>
    `;

    const colHeaders = document.querySelectorAll<HTMLElement>("[role='columnheader']");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(colHeaders));
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TableColumnHeader.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(colHeaders));
  });

  it("should pass if table's headers are in <th></th>", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
          <tr role="row">
            <th scope="col">
              <button>First Name</button>
            </th>
            <th scope="col">
              <button>Last Name</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
        </tbody>
      </table>
    `;

    const colHeaders = document.querySelectorAll<HTMLElement>("th");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(colHeaders));
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TableColumnHeader.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(colHeaders));
  });

  it("should fail if div table's headers has no role=columnheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
          <div class="header">Header 1</div>
          <div class="header">Header 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 1, Cell 1</div>
          <div role="cell">Row 1, Cell 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 2, Cell 1</div>
          <div role="cell">Row 2, Cell 2</div>
        </div>
      </div>
    `;

    const colHeaders = document.querySelectorAll<HTMLElement>(".header");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(colHeaders));
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await TableColumnHeader.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(colHeaders));
  });

  it("should fail if table's headers are not inside <th></th>", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
          <tr role="row">
            <td class="header">
              <button>First Name</button>
            </td>
            <td class="header">
              <button>Last Name</button>
            </td>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
      </table>
    `;

    const colHeaders = document.querySelectorAll<HTMLElement>(".header");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(colHeaders));
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await TableColumnHeader.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(colHeaders));
  });

  it("should fail if multiple div table's headers have no role=columnheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
          <div class="header">Header 1</div>
          <div class="header">Header 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 1, Cell 1</div>
          <div role="cell">Row 1, Cell 2</div>
        </div>
      </div>
      <div role="table">
        <div role="row">
          <div class="header">Header 1</div>
          <div class="header">Header 2</div>
        </div>
        <div role="row">
          <div role="cell">Row 1, Cell 1</div>
          <div role="cell">Row 1, Cell 2</div>
        </div>
      </div>
    `;

    const colHeaders = document.querySelectorAll<HTMLElement>(".header");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(colHeaders));
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await TableColumnHeader.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(colHeaders));
  });
});
