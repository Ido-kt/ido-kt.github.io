import { TableNotNested } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TableNotNested Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(async () => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should pass when there is one table with no nested tables", async () => {
    const { classifier, document, response } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    document.body.innerHTML = `
            <table>
                <th>Countries</th>
                <tr><td>Finland</td></tr>
                <tr><td>Jerusalem</td></tr>
                <tr><td>Beirut</td></tr>
                <tr><td>Shanghai</td></tr>
            </table>
    `;
    const tables = document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(tables));

    await TableNotNested.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(Array.from(tables));
  });

  it("should pass when there are few tables with no nested tables", async () => {
    const { classifier, document, response } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockReturnValue(null);

    document.body.innerHTML = `
            <table>
                <th>Countries</th>
                <tr><td>Finland</td></tr>
                <tr><td>Jerusalem</td></tr>
                <tr><td>Beirut</td></tr>
                <tr><td>Shanghai</td></tr>
            </table>
            <table>
                <th>Countries</th>
                <tr><td>Finland</td></tr>
                <tr><td>Jerusalem</td></tr>
                <tr><td>Beirut</td></tr>
                <tr><td>Shanghai</td></tr>
            </table>
    `;
    const tables = document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']");
    (classifier.getMatched as jest.Mock).mockReturnValue(Array.from(tables));

    await TableNotNested.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(Array.from(tables));
  });

  it("should fail when there is one table with a nested table inside of it", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
        <table>
          <th>Table #2</th>
          <tr>
              <td>
              <table id="nested-table">
                  <tr>
                  <td>Tickets</td>
                  <td>5</td>
                  </tr>
              </table>
              </td>
          </tr>
        </table>
    `;
    const nestedTable = document.querySelector<HTMLElement>("#nested-table");
    (classifier.getParent as jest.Mock).mockResolvedValue(document.querySelector("table"));
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedTable]);

    await TableNotNested.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([nestedTable]);
  });

  it("should fail when there is one div with role=table and a nested table inside of it", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
          <div role="table">
              <div role="row">
                  <div role="cell">
                      <table id="nested-table">
                          <tr>
                          <td>Tickets</td>
                          <td>5</td>
                          </tr>
                      </table>
                  </div>
              </div>
          </div>
      `;

    const nestedTable = document.querySelector<HTMLElement>("#nested-table");
    (classifier.getParent as jest.Mock).mockResolvedValue(document.querySelector("div[role='table']"));
    (classifier.getMatched as jest.Mock).mockReturnValue([nestedTable]);

    await TableNotNested.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([nestedTable]);
  });

  it("should fail when there is one table with a nested div with role=table inside of it", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
          <table>
              <tr>
                  <td>
                      <div id="nested-table" role="table">
                          <div role="row">
                              <div role="cell">
                              </div>
                          </div>
                      </div>
                  </td>
              </tr>
          </table>
      `;

    const nestedTable = document.querySelector<HTMLElement>("#nested-table");
    (classifier.getParent as jest.Mock).mockResolvedValue(document.querySelector("table"));
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedTable]);

    await TableNotNested.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([nestedTable]);
  });

  it("should fail when there is a role=table div with a nested role=table div inside of it", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
          <div role="table">
            <div role="row">
                <div role="columnheader">Nested Column 1</div>
                <div role="columnheader">Nested Column 2</div>
            </div>
            <div role="row">
                <div role="cell">
                    <div id="nested-table" role="table">
                        <div role="row">
                        <div role="columnheader">Nested Column 1</div>
                        <div role="columnheader">Nested Column 2</div>
                        </div>
                        <div role="row">
                        <div role="cell">Nested Row 1, Cell 1</div>
                        <div role="cell">Nested Row 1, Cell 2</div>
                        </div>
                        <div role="row">
                        <div role="cell">Nested Row 2, Cell 1</div>
                        <div role="cell">Nested Row 2, Cell 2</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      `;
    const nestedTable = document.querySelector<HTMLElement>("#nested-table");
    (classifier.getParent as jest.Mock).mockResolvedValue(document.querySelector("div[role='table']"));
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedTable]);

    await TableNotNested.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([nestedTable]);
  });

  it("should fail when there are multiple tables with multiple nested tables inside of it", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
          <table>
            <th>Table #2</th>
            <tr>
                <td>
                <table id="nested-table1">
                    <th>Table #3</th>
                    <tr>
                    <td>
                        <table id="nested-table2">
                        <tr>
                            <td>Tickets</td>
                            <td>5</td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
          </table>
      `;
    (classifier.getParent as jest.Mock).mockResolvedValue(document.querySelector("table"));
    const nestedTable1 = document.querySelector<HTMLElement>("#nested-table1");
    const nestedTable2 = document.querySelector<HTMLElement>("#nested-table2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedTable1, nestedTable2]);

    await TableNotNested.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([nestedTable1, nestedTable2]);
  });

  it("should fail when there is a table with a nested table inside of it, and a table without nested tables", async () => {
    const { classifier, document, response } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockResolvedValue(true);

    document.body.innerHTML = `
          <table>
            <th>Table #2</th>
            <tr>
                <td>
                <table id="nested-table">
                    <tr>
                    <td>Tickets</td>
                    <td>5</td>
                    </tr>
                </table>
                </td>
            </tr>
          </table>
          <table>
              <th>Countries</th>
              <tr><td>Finland</td></tr>
              <tr><td>Jerusalem</td></tr>
              <tr><td>Beirut</td></tr>
              <tr><td>Shanghai</td></tr>
          </table>
      `;

    const nestedTable = document.querySelector<HTMLElement>("#nested-table");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedTable]);

    await TableNotNested.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([nestedTable]);
  });
});
