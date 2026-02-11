import { TableHeaders } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TableHeaders Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass when a table has column headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <tr>
            <th>Car Model</th>
            <th>Price</th>
            <th>Speed</th>
            <th>Year of Release</th>
        </tr>
        <tr>
            <td>Toyota Camry</td>
            <td>$25,000</td>
            <td>120 mph</td>
            <td>2022</td>
        </tr>
        <tr>
            <td>Honda Civic</td>
            <td>$20,000</td>
            <td>110 mph</td>
            <td>2021</td>
        </tr>
        <tr>
            <td>Ford Mustang</td>
            <td>$35,000</td>
            <td>150 mph</td>
            <td>2022</td>
        </tr>
      </table>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders = [...document.querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders = [...document.querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(tables);
  });

  it("should pass when a table has row headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <tr>
            <th scope="row">Car Model</th>
            <td>Toyota Camry</td>
            <td>Honda Civic</td>
            <td>Ford Mustang</td>
        </tr>
        <tr>
            <th scope="row">Price</th>
            <td>$25,000</td>
            <td>$20,000</td>
            <td>$35,000</td>
        </tr>
        <tr>
            <th scope="row">Speed</th>
            <td>120 mph</td>
            <td>110 mph</td>
            <td>150 mph</td>
        </tr>
        <tr>
            <th scope="row">Year of Release</th>
            <td>2022</td>
            <td>2021</td>
            <td>2022</td>
        </tr>
      </table>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders = [...document.querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders = [...document.querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(tables);
  });

  it("should fail when a table has no headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
            <tr>
                <td>Car Model</td>
                <td>Price</td>
                <td>Speed</td>
                <td>Year of Release</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Toyota Camry</td>
                <td>$25,000</td>
                <td>120 mph</td>
                <td>2022</td>
            </tr>
            <tr>
                <td>Honda Civic</td>
                <td>$20,000</td>
                <td>110 mph</td>
                <td>2021</td>
            </tr>
            <tr>
                <td>Ford Mustang</td>
                <td>$35,000</td>
                <td>150 mph</td>
                <td>2022</td>
            </tr>
        </tbody>
      </table>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders = [...document.querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders = [...document.querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(tables);
  });

  it("should pass when a role='table' has role='columnheader'", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
            <div role="columnheader">Car Model</div>
            <div role="columnheader">Price</div>
            <div role="columnheader">Speed</div>
            <div role="columnheader">Year of Release</div>
        </div>
        <div role="row">
            <div>Toyota Camry</div>
            <div>$25,000</div>
            <div>120 mph</div>
            <div>2022</div>
        </div>
        <div role="row">
            <div>Honda Civic</div>
            <div>$20,000</div>
            <div>110 mph</div>
            <div>2021</div>
        </div>
        <div role="row">
            <div>Ford Mustang</div>
            <div>$35,000</div>
            <div>150 mph</div>
            <div>2022</div>
        </div>
      </div>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders = [...document.querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders = [...document.querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(tables);
  });

  it("should pass when a role='table' has role='rowheader'", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
            <div role="rowheader">Car Model</div>
            <div role="cell">Toyota Camry</div>
            <div role="cell">Honda Civic</div>
            <div role="cell">Ford Mustang</div>
        </div>
        <div role="row">
            <div role="rowheader">Price</div>
            <div role="cell">$25,000</div>
            <div role="cell">$20,000</div>
            <div role="cell">$35,000</div>
        </div>
        <div role="row">
            <div role="rowheader">Speed</div>
            <div role="cell">120 mph</div>
            <div role="cell">110 mph</div>
            <div role="cell">150 mph</div>
        </div>
        <div role="row">
            <div role="rowheader">Year of Release</div>
            <div role="cell">2022</div>
            <div role="cell">2021</div>
            <div role="cell">2022</div>
        </div>
      </div>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders = [...document.querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders = [...document.querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(tables);
  });

  it("should fail when a role='table' has no headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div id="test-subject" role="table">
        <div role="rowgroup">
            <div role="row">
                <div role="cell">Toyota Camry</div>
                <div role="cell">$25,000</div>
                <div role="cell">120 mph</div>
                <div role="cell">2022</div>
            </div>
            <div role="row">
                <div role="cell">Honda Civic</div>
                <div role="cell">$20,000</div>
                <div role="cell">110 mph</div>
                <div role="cell">2021</div>
            </div>
            <div role="row">
                <div role="cell">Ford Mustang</div>
                <div role="cell">$35,000</div>
                <div role="cell">150 mph</div>
                <div role="cell">2022</div>
            </div>
        </div>
      </div>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders = [...document.querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders = [...document.querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(tables);
  });

  it("should fail with 1 node for 2 tables where one doesn't have headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <tr>
            <th>Car Model</th>
            <th>Price</th>
            <th>Speed</th>
            <th>Year of Release</th>
        </tr>
        <tr>
            <td>Toyota Camry</td>
            <td>$25,000</td>
            <td>120 mph</td>
            <td>2022</td>
        </tr>
        <tr>
          <td>Honda Civic</td>
          <td>$20,000</td>
          <td>110 mph</td>
          <td>2021</td>
        </tr>
        <tr>
            <td>Ford Mustang</td>
            <td>$35,000</td>
            <td>150 mph</td>
            <td>2022</td>
        </tr>
      </table>
      <table>
        <thead>
            <tr>
              <td>Car Model</td>
              <td>Price</td>
              <td>Speed</td>
              <td>Year of Release</td>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>Toyota Camry</td>
              <td>$25,000</td>
              <td>120 mph</td>
              <td>2022</td>
            </tr>
            <tr>
              <td>Honda Civic</td>
              <td>$20,000</td>
              <td>110 mph</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>Ford Mustang</td>
              <td>$35,000</td>
              <td>150 mph</td>
              <td>2022</td>
            </tr>
        </tbody>
      </table>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    const columnHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders2);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders2);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([tables[1]]);
    expect(response.passedNodes).toEqual([tables[0]]);
  });

  it("should fail with 2 nodes for 2 tables that don't have headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
            <tr>
                <td>Car Model</td>
                <td>Price</td>
                <td>Speed</td>
                <td>Year of Release</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Toyota Camry</td>
                <td>$25,000</td>
                <td>120 mph</td>
                <td>2022</td>
            </tr>
            <tr>
                <td>Honda Civic</td>
                <td>$20,000</td>
                <td>110 mph</td>
                <td>2021</td>
            </tr>
            <tr>
                <td>Ford Mustang</td>
                <td>$35,000</td>
                <td>150 mph</td>
                <td>2022</td>
            </tr>
        </tbody>
      </table>
      <table>
          <thead>
            <tr>
                <td>Car Model</td>
                <td>Price</td>
                <td>Speed</td>
                <td>Year of Release</td>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Toyota Camry</td>
                <td>$25,000</td>
                <td>120 mph</td>
                <td>2022</td>
            </tr>
            <tr>
                <td>Honda Civic</td>
                <td>$20,000</td>
                <td>110 mph</td>
                <td>2021</td>
            </tr>
            <tr>
                <td>Ford Mustang</td>
                <td>$35,000</td>
                <td>150 mph</td>
                <td>2022</td>
            </tr>
          </tbody>
      </table>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    const columnHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders2);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders2);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(tables);
  });

  it("should fail with 1 nodes for 2 role='table' where one doesn't have headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
            <div role="columnheader">Car Model</div>
            <div role="columnheader">Price</div>
            <div role="columnheader">Speed</div>
            <div role="columnheader">Year of Release</div>
        </div>
        <div role="row">
            <div>Toyota Camry</div>
            <div>$25,000</div>
            <div>120 mph</div>
            <div>2022</div>
        </div>
        <div role="row">
            <div>Honda Civic</div>
            <div>$20,000</div>
            <div>110 mph</div>
            <div>2021</div>
        </div>
        <div role="row">
            <div>Ford Mustang</div>
            <div>$35,000</div>
            <div>150 mph</div>
            <div>2022</div>
        </div>
      </div>
      <div role="table">
        <div role="row">
            <div>Toyota Camry</div>
            <div>$25,000</div>
            <div>120 mph</div>
            <div>2022</div>
        </div>
        <div role="row">
            <div>Honda Civic</div>
            <div>$20,000</div>
            <div>110 mph</div>
            <div>2021</div>
        </div>
        <div role="row">
            <div>Ford Mustang</div>
            <div>$35,000</div>
            <div>150 mph</div>
            <div>2022</div>
        </div>
      </div>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    const columnHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders2);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders2);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([tables[1]]);
    expect(response.passedNodes).toEqual([tables[0]]);
  });

  it("should fail with 2 nodes for 2 role='table' that don't have headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
            <div>Car Model</div>
            <div>Price</div>
            <div>Speed</div>
            <div>Year of Release</div>
        </div>
        <div role="row">
            <div>Toyota Camry</div>
            <div>$25,000</div>
            <div>120 mph</div>
            <div>2022</div>
        </div>
        <div role="row">
            <div>Honda Civic</div>
            <div>$20,000</div>
            <div>110 mph</div>
            <div>2021</div>
        </div>
        <div role="row">
            <div>Ford Mustang</div>
            <div>$35,000</div>
            <div>150 mph</div>
            <div>2022</div>
        </div>
      </div>
      <div role="table">
        <div role="row">
            <div>Toyota Camry</div>
            <div>$25,000</div>
            <div>120 mph</div>
            <div>2022</div>
        </div>
        <div role="row">
            <div>Honda Civic</div>
            <div>$20,000</div>
            <div>110 mph</div>
            <div>2021</div>
        </div>
        <div role="row">
            <div>Ford Mustang</div>
            <div>$35,000</div>
            <div>150 mph</div>
            <div>2022</div>
        </div>
      </div>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    const columnHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders2);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders2);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(tables);
  });

  it("should fail with 2 nodes for 1 table with no headers and 1 role='table' with no headers", async () => {
    const { document, response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
          <thead>
            <tr>
                <td>Car Model</td>
                <td>Price</td>
                <td>Speed</td>
                <td>Year of Release</td>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Toyota Camry</td>
                <td>$25,000</td>
                <td>120 mph</td>
                <td>2022</td>
            </tr>
            <tr>
                <td>Honda Civic</td>
                <td>$20,000</td>
                <td>110 mph</td>
                <td>2021</td>
            </tr>
            <tr>
                <td>Ford Mustang</td>
                <td>$35,000</td>
                <td>150 mph</td>
                <td>2022</td>
            </tr>
          </tbody>
      </table>
      <div role="table">
        <div role="row">
            <div>Toyota Camry</div>
            <div>$25,000</div>
            <div>120 mph</div>
            <div>2022</div>
        </div>
        <div role="row">
            <div>Honda Civic</div>
            <div>$20,000</div>
            <div>110 mph</div>
            <div>2021</div>
        </div>
        <div role="row">
            <div>Ford Mustang</div>
            <div>$35,000</div>
            <div>150 mph</div>
            <div>2022</div>
        </div>
      </div>
    `;

    const tables = [...document.querySelectorAll<HTMLElement>("table:not([role]), [role='table']")];
    const columnHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders1 = [...tables[0].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    const columnHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th:not([scope]:not([scope=''])),th[scope=col], [role=columnheader]")];
    const rowHeaders2 = [...tables[1].querySelectorAll<HTMLElement>("th[scope=row], [role=rowheader]")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(tables);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders1);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(columnHeaders2);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(rowHeaders2);

    await TableHeaders.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(tables);
  });
});
