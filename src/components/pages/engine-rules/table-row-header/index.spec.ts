import { TableRowHeader } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TableRowHeader Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass when a div table's rowheaders has role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
          <div role="row">
            <div role="rowheader">Row 1</div>
            <div role="cell">Row 1, Cell 1</div>
          </div>
          <div role="row">
            <div role="rowheader">Row 2</div>
            <div role="cell">Row 2, Cell 1</div>
          </div>
          <div role="row">
            <div role="rowheader">Row 3</div>
            <div role="cell">Row 3, Cell 1</div>
          </div>
      </div>
    `;
    const rows = Array.from(document.querySelectorAll<HTMLElement>("tr:not([role]), [role='row']"));
    const rowHeaders = rows.map((row) => row.querySelector<HTMLElement>("td:not([role]), td[role='rowheader'], [role='cell'], [role='rowheader']")).filter((cell) => cell);
    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(rowHeaders));
  });

  it("should pass when a table's rowheaders has role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
          <tr>
            <td role="rowheader">Row 1</td>
            <td role="rowheader">Row 1, Cell 1</tr>
          </tr>
          <tr>
            <td role="rowheader">Row 2</td>
            <td role="rowheader">Row 2, Cell 1</td>
          </tr>
          <tr>
            <td role="rowheader">Row 3</td>
            <td role="rowheader">Row 3, Cell 1</td>
          </tr>
      </table>
    `;
    const rows = Array.from(document.querySelectorAll<HTMLElement>("tr:not([role]), [role='row']"));
    const rowHeaders = rows.map((row) => row.querySelector<HTMLElement>("td:not([role]), td[role='rowheader'], [role='cell'], [role='rowheader']")).filter((cell) => cell);

    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(rowHeaders));
  });

  it("should pass when multiple tables's rowheaders has role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
          <tr>
            <td role="rowheader">Row 1</td>
            <td role="rowheader">Row 1, Cell 1</tr>
          </tr>
          <tr>
            <td role="rowheader">Row 2</td>
            <td role="rowheader">Row 2, Cell 1</td>
          </tr>
      </table>
      <table>
          <tr>
            <td role="rowheader">Row 1</td>
            <td role="rowheader">Row 1, Cell 1</tr>
          </tr>
          <tr>
            <td role="rowheader">Row 2</td>
            <td role="rowheader">Row 2, Cell 1</td>
          </tr>
      </table>
    `;
    const rows = Array.from(document.querySelectorAll<HTMLElement>("tr:not([role]), [role='row']"));
    const rowHeaders = rows.map((row) => row.querySelector<HTMLElement>("td:not([role]), td[role='rowheader'], [role='cell'], [role='rowheader']")).filter((cell) => cell);

    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(rowHeaders));
  });

  it("should pass when multiple div tables's rowheaders has role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
          <div role="row">
            <div role="rowheader">Row Header</div>
            <div role="cell">Row 1, Cell 1</div>
          </div>
          <div role="row">
            <div role="rowheader">Row Header</div>
            <div role="cell">Row 2, Cell 1</div>
          </div>
      </div>
      <div role="table">
          <div role="row">
            <div role="rowheader">Row Header</div>
            <div role="cell">Row 1, Cell 1</div>
          </div>
          <div role="row">
            <div role="rowheader">Row Header</div>
            <div role="cell">Row 2, Cell 1</div>
          </div>
      </div>
    `;
    const rows = Array.from(document.querySelectorAll<HTMLElement>("tr:not([role]), [role='row']"));
    const rowHeaders = rows.map((row) => row.querySelector<HTMLElement>("td:not([role]), td[role='rowheader'], [role='cell'], [role='rowheader']")).filter((cell) => cell);

    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(Array.from(rowHeaders));
  });

  it("should fail when div table's rowheaders has no role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
          <div role="row">
            <div role="cell">Row Header</div>
            <div role="cell">Row 1, Cell 1</div>
          </div>
          <div role="row">
            <div role="cell">Row Header</div>
            <div role="cell">Row 2, Cell 1</div>
          </div>
          <div role="row">
            <div role="cell">Row Header</div>
            <div role="cell">Row 3, Cell 1</div>
          </div>
      </div>
    `;
    const rows = Array.from(document.querySelectorAll<HTMLElement>("tr:not([role]), [role='row']"));
    const rowHeaders = rows.map((row) => row.querySelector<HTMLElement>("td:not([role]), td[role='rowheader'], [role='cell'], [role='rowheader']")).filter((cell) => cell);
    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(rowHeaders));
  });

  it("should fail when table's rowheaders has no role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
          <tr>
            <td>Row 1</td>
            <td>Row 1, Cell 1</tr>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2, Cell 1</td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>Row 3, Cell 1</td>
          </tr>
      </table>
    `;
    const rows = Array.from(document.querySelectorAll<HTMLElement>("tr:not([role]), [role='row']"));
    const rowHeaders = rows.map((row) => row.querySelector<HTMLElement>("td:not([role]), td[role='rowheader'], [role='cell'], [role='rowheader']")).filter((cell) => cell);
    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual(Array.from(rowHeaders));
  });

  it("should fail when table's rowheaders has partial role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
          <tr>
            <td class="test-candidate">Row 1</td>
            <td>Row 1, Cell 1</tr>
          </tr>
          <tr>
            <td class="test-candidate" role="rowheader">Row 2</td>
            <td>Row 2, Cell 1</td>
          </tr>
          <tr>
            <td class="test-candidate" role="rowheader">Row 3</td>
            <td>Row 3, Cell 1</td>
          </tr>
      </table>
          `;

    const rowHeaders = document.querySelectorAll<HTMLElement>(".test-candidate");

    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(2);
    expect(response.failedNodes).toHaveLength(1);
  });

  it("should fail when div table's rowheaders has partial role=rowheader", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
          <div role="row">
            <div class="test-candidate" role="cell">Row 1</div>
            <div role="cell">Row 1, Cell 1</div>
          </div>
          <div role="row">
            <div class="test-candidate" role="rowheader">Row 2</div>
            <div role="cell">Row 2, Cell 1</div>
          </div>
          <div role="row">
            <div class="test-candidate" role="rowheader">Row 3</div>
            <div role="cell">Row 3, Cell 1</div>
          </div>
      </div>
    `;

    const rowHeaders = document.querySelectorAll<HTMLElement>(".test-candidate");
    (classifier.getMatched as jest.Mock).mockReturnValue(rowHeaders);
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true);

    await TableRowHeader.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(2);
    expect(response.failedNodes).toHaveLength(1);
  });
});
