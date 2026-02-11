import { TableHeaderNotEmpty } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TableHeadNotEmpty Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document, classifier } = validateMethodArguments;
    classifier.assert.mockReturnValue(true);
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass when table has headers", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Header1</th>
            <th>Header2</th>
            <th>Header3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row1</td>
            <td>Row2</td>
            <td>Row3</td>
          </tr>
        </tbody>
      </table>
    `;
    const headers = [...document.querySelectorAll<HTMLElement>("th")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([...headers]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "test" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(headers);
  });

  it("should fail when table has an empty header", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Header1</th>
            <th></th>
            <th>Header3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row1</td>
            <td>Row2</td>
            <td>Row3</td>
          </tr>
        </tbody>
      </table>
    `;
    const failHeaders = [...document.querySelectorAll<HTMLElement>("th")].filter((th) => th.textContent?.trim() === "");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(failHeaders);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual(failHeaders);
  });

  it("should pass when a table has no headers", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <tbody>
          <tr>
            <td>Row1</td>
            <td>Row2</td>
            <td>Row3</td>
          </tr>
        </tbody>
      </table>
    `;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "test" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual([]);
  });

  it("should pass when a role=table has headers", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
          <div role="columnheader">Header1</div>
          <div role="columnheader">Header2</div>
          <div role="columnheader">Header3</div>
        </div>
        <div role="row">
          <div>Row1</div>
          <div>Row2</div>
          <div>Row3</div>
        </div>
      </div>
    `;
    const headers = [...document.querySelectorAll<HTMLElement>("[role='columnheader']")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([...headers]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "test" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(headers);
  });

  it("should fail when a role=table has an empty header", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
          <div role="columnheader">Header1</div>
          <div role="columnheader"></div>
          <div role="columnheader">Header3</div>
        </div>
        <div role="row">
          <div>Row1</div>
          <div>Row2</div>
          <div>Row3</div>
        </div>
      </div>
    `;
    const failHeaders = [...document.querySelectorAll<HTMLElement>("[role='columnheader']")].filter((th) => th.textContent?.trim() === "");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(failHeaders);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual(failHeaders);
  });

  it("should pass when a role=table has no headers", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="table">
        <div role="row">
          <div>Row1</div>
          <div>Row2</div>
          <div>Row3</div>
        </div>
      </div>
    `;
    const headers = document.querySelectorAll<HTMLElement>("th");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([...headers]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "test" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual([]);
  });

  it("should pass when a table has headers with role attributes", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
          <tr>
            <th role="columnheader">Header1</th>
            <th role="columnheader">Header2</th>
            <th role="columnheader">Header3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row1</td>
            <td>Row2</td>
            <td>Row3</td>
          </tr>
        </tbody>
      </table>
    `;
    const headers = [...document.querySelectorAll<HTMLElement>("th")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([...headers]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "test" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toEqual(headers);
  });

  it("should fail when a table has an empty row header", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
          <tr>
            <th role="columnheader">Header1</th>
            <th role="columnheader">Header2</th>
            <th role="columnheader">Header3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <td>Row1</td>
            <td>Row2</td>
          </tr>
        </tbody>
      </table>
    `;
    const failHeaders = [...document.querySelectorAll<HTMLElement>("th")].filter((th) => th.textContent?.trim() === "");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(failHeaders);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual(failHeaders);
  });

  it("should fail when a table has an empty role=rowheader", async () => {
    const { classifier, response, document } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
          <tr>
            <th role="columnheader">Header1</th>
            <th role="columnheader">Header2</th>
            <th role="columnheader">Header3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td role="rowheader"></td>
            <td>Row1</td>
            <td>Row2</td>
          </tr>
        </tbody>
      </table>
    `;
    const failHeaders = [...document.querySelectorAll<HTMLElement>("[role='rowheader']")];
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(failHeaders);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      contentInfo: { ariaText: "", visibleText: "" },
    });

    await TableHeaderNotEmpty.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual(failHeaders);
  });
});
